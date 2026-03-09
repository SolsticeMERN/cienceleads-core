import { usePageSEO } from "@/hooks/use-page-seo";

const TermsOfService = () => {
  usePageSEO(
    "Terms of Service | CienceLeads",
    "CienceLeads terms of service. Read our terms and conditions for using our B2B lead generation services."
  );

  return (
    <main className="min-h-screen py-20">
      <div className="container max-w-3xl">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 9, 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <p>Welcome to CienceLeads. By accessing our website at cienceleads.com or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

          <h2>1. Services</h2>
          <p>CienceLeads provides B2B lead generation, LinkedIn prospecting, data enrichment, and email list building services. We deliver human-verified contact data and prospect lists tailored to your specifications.</p>

          <h2>2. Acceptable Use</h2>
          <p>You agree to use our services and the data we provide only for lawful business purposes. You will not:</p>
          <ul>
            <li>Use our data for spamming, harassment, or any illegal activity</li>
            <li>Resell, redistribute, or sublicense our data without written consent</li>
            <li>Use our services in violation of any applicable data protection laws (including GDPR, CAN-SPAM, CCPA)</li>
            <li>Attempt to reverse-engineer, scrape, or exploit our platform</li>
          </ul>

          <h2>3. Data Accuracy</h2>
          <p>We strive to deliver accurate, human-verified B2B contact data. While we guarantee 0% bounce on verified email addresses at the time of delivery, contact information may change over time. We are not liable for data that becomes outdated after delivery.</p>

          <h2>4. Payment Terms</h2>
          <p>Payment terms are outlined in individual service agreements or invoices. All fees are non-refundable unless otherwise stated in your service agreement. We reserve the right to modify pricing with reasonable notice.</p>

          <h2>5. Intellectual Property</h2>
          <p>All content on our website — including text, graphics, logos, and software — is the property of CienceLeads and is protected by intellectual property laws. You may not copy, modify, or distribute our content without written permission.</p>

          <h2>6. Confidentiality</h2>
          <p>Both parties agree to keep confidential any proprietary information shared during the course of our engagement. This includes targeting criteria, prospect lists, pricing, and business strategies.</p>

          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, CienceLeads shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>

          <h2>8. Indemnification</h2>
          <p>You agree to indemnify and hold CienceLeads harmless from any claims, damages, or expenses arising from your use of our services, your violation of these Terms, or your violation of any applicable law.</p>

          <h2>9. Termination</h2>
          <p>Either party may terminate the service relationship with written notice. Upon termination, you retain the right to use data already delivered, subject to the acceptable use terms above. We reserve the right to suspend or terminate access for violations of these Terms.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.</p>

          <h2>11. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms.</p>

          <h2>12. Contact Us</h2>
          <p>For questions about these Terms of Service, please contact us at:</p>
          <p><strong>Email:</strong> hello@cienceleads.com</p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
