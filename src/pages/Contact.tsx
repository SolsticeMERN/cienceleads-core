import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { usePageSEO } from "@/hooks/use-page-seo";
import ScrollReveal from "@/components/ScrollReveal";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email must be under 255 characters"),
  industry: z.string().min(1, "Select a target industry"),
  leadGoal: z.string().min(1, "Select a monthly lead goal"),
  message: z.string().trim().max(1000, "Message must be under 1,000 characters").optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const industries = ["SaaS / Software", "Marketing / Advertising", "Financial Services", "Real Estate", "Healthcare", "E-Commerce", "Manufacturing", "Professional Services", "Education", "IT Staffing", "Other"];
const leadGoals = ["Under 500", "500 – 1,000", "1,000 – 2,500", "2,500 – 5,000", "5,000 – 10,000", "10,000+"];

const Contact = () => {
  usePageSEO(
    "Get 50 Free Verified B2B Leads in 48 Hours | CienceLeads",
    "Request a free sample list of human-verified B2B leads. Tell us your ICP — titles, industries, company size — and we'll deliver 50 verified contacts in 48 hours. Zero cost, zero contracts."
  );

  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", industry: "", leadGoal: "", message: "" },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({ title: "Request received", description: `Thanks ${data.name}, we'll reach out within 24 hours.` });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — Copy & Trust */}
            <ScrollReveal>
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Responding within 24 hours
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
                  Get 50 Free{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Verified Leads
                  </span>{" "}
                  in 48 Hours
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Tell us your ICP — titles, industries, company size — and we'll hand-deliver a sample list of human-verified contacts with valid emails. Zero cost, zero commitment.
                </p>

                {/* Trust bullets */}
                <ul className="space-y-4 mb-10">
                  {[
                    { metric: "0%", label: "bounce guarantee on every email" },
                    { metric: "48h", label: "turnaround from request to delivery" },
                    { metric: "2,500+", label: "B2B teams already trust CienceLeads" },
                    { metric: "No", label: "contracts, cancel anytime" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="shrink-0 mt-0.5 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                        {item.metric}
                      </span>
                      <span className="text-sm text-muted-foreground leading-snug pt-2.5">{item.label}</span>
                    </li>
                  ))}
                </ul>

                {/* Social proof quote */}
                <div className="rounded-lg border border-border bg-card/40 p-5">
                  <p className="text-sm italic text-muted-foreground leading-relaxed mb-3">
                    "We replaced our entire SDR prospecting stack with CienceLeads. 3x pipeline in 60 days — and every email actually lands."
                  </p>
                  <p className="text-xs font-semibold text-foreground">
                    — VP Sales, Series B SaaS
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={0.2}>
              <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
                <h2 className="text-xl font-bold mb-1">Request Your Free Sample List</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill this out in 60 seconds. We'll do the rest.
                </p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="Jane Smith" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="company" render={({ field }) => (
                        <FormItem><FormLabel>Company</FormLabel><FormControl><Input placeholder="Acme Inc." {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel>Work Email</FormLabel><FormControl><Input type="email" placeholder="jane@acme.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField control={form.control} name="industry" render={({ field }) => (
                        <FormItem><FormLabel>Target Industry</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger></FormControl><SelectContent>{industries.map((ind) => (<SelectItem key={ind} value={ind}>{ind}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="leadGoal" render={({ field }) => (
                        <FormItem><FormLabel>Monthly Lead Goal</FormLabel><Select onValueChange={field.onChange} value={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select volume" /></SelectTrigger></FormControl><SelectContent>{leadGoals.map((goal) => (<SelectItem key={goal} value={goal}>{goal}</SelectItem>))}</SelectContent></Select><FormMessage /></FormItem>
                      )} />
                    </div>
                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem><FormLabel>Additional Details <span className="text-muted-foreground font-normal">(optional)</span></FormLabel><FormControl><Textarea placeholder="Target titles, geo, company size…" rows={3} {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 disabled:opacity-70">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                      ) : (
                        <>Send My Request <ArrowRight className="ml-2" /></>
                      )}
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      No credit card · No contracts · Your data stays private
                    </p>
                  </form>
                </Form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
