import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGIN = "https://cienceleads.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, company, email, industry, leadGoal, message, _hp } = await req.json();

    // Honeypot check — if filled, silently succeed (bot trap)
    if (_hp) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert into database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        company,
        email,
        industry,
        lead_goal: leadGoal,
        message: message || null,
      });

    if (dbError) {
      console.error("DB insert error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Escape all user inputs before HTML interpolation
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    const safeIndustry = escapeHtml(industry);
    const safeLeadGoal = escapeHtml(leadGoal);
    const safeMessage = message ? escapeHtml(message) : "";

    // Send email notification via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const NOTIFICATION_EMAIL = Deno.env.get("NOTIFICATION_EMAIL");

    if (RESEND_API_KEY && NOTIFICATION_EMAIL) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "CienceLeads <onboarding@resend.dev>",
          to: [NOTIFICATION_EMAIL],
          subject: `New Lead Request: ${safeName} from ${safeCompany}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a1a2e; border-bottom: 2px solid #4361ee; padding-bottom: 10px;">
                🎯 New Contact Form Submission
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
                <tr>
                  <td style="padding: 10px 12px; font-weight: bold; color: #555; width: 140px;">Name</td>
                  <td style="padding: 10px 12px;">${safeName}</td>
                </tr>
                <tr style="background: #f8f9fa;">
                  <td style="padding: 10px 12px; font-weight: bold; color: #555;">Company</td>
                  <td style="padding: 10px 12px;">${safeCompany}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-weight: bold; color: #555;">Email</td>
                  <td style="padding: 10px 12px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
                </tr>
                <tr style="background: #f8f9fa;">
                  <td style="padding: 10px 12px; font-weight: bold; color: #555;">Industry</td>
                  <td style="padding: 10px 12px;">${safeIndustry}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-weight: bold; color: #555;">Monthly Lead Goal</td>
                  <td style="padding: 10px 12px;">${safeLeadGoal}</td>
                </tr>
                ${safeMessage ? `
                <tr style="background: #f8f9fa;">
                  <td style="padding: 10px 12px; font-weight: bold; color: #555;">Message</td>
                  <td style="padding: 10px 12px;">${safeMessage}</td>
                </tr>` : ""}
              </table>
              <p style="margin-top: 24px; color: #888; font-size: 12px;">
                Submitted via CienceLeads contact form
              </p>
            </div>
          `,
        }),
      });

      const emailData = await emailResponse.json();
      if (!emailResponse.ok) {
        console.error("Resend error:", emailData);
      } else {
        console.log("Notification email sent:", emailData.id);
      }
    } else {
      console.warn("Email not sent: RESEND_API_KEY or NOTIFICATION_EMAIL not configured");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
