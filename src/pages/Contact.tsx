import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { usePageSEO } from "@/hooks/use-page-seo";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be under 100 characters"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email must be under 255 characters"),
  industry: z.string().min(1, "Select a target industry"),
  leadGoal: z.string().min(1, "Select a monthly lead goal"),
  message: z.string().trim().max(1000, "Message must be under 1,000 characters").optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const industries = [
  "SaaS / Software",
  "Marketing / Advertising",
  "Financial Services",
  "Real Estate",
  "Healthcare",
  "E-Commerce",
  "Manufacturing",
  "Professional Services",
  "Education",
  "IT Staffing",
  "Other",
];

const leadGoals = [
  "Under 500",
  "500 – 1,000",
  "1,000 – 2,500",
  "2,500 – 5,000",
  "5,000 – 10,000",
  "10,000+",
];

const Contact = () => {
  usePageSEO(
    "Contact CienceLeads | Hire a B2B Lead Generation Expert | Get a Free Sample List",
    "Contact CienceLeads to hire a B2B lead generation expert. Get a free sample list of human-verified B2B leads. Tell us your ICP and monthly lead goal — we'll deliver within 48 hours."
  );

  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", company: "", email: "", industry: "", leadGoal: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast({
      title: "Request received",
      description: `Thanks ${data.name}, we'll reach out within 24 hours.`,
    });
    form.reset();
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-24 md:py-32">
        <div className="container max-w-2xl">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pipeline</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Hire a B2B lead generation expert. Tell us about your ideal customers and we'll deliver a free sample list of verified B2B leads within 48 hours.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Jane Smith" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl><Input placeholder="Acme Inc." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email</FormLabel>
                    <FormControl><Input type="email" placeholder="jane@acme.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="industry" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Industry</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {industries.map((ind) => (
                            <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="leadGoal" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Lead Goal</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Select volume" /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {leadGoals.map((goal) => (
                            <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Details <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                    <FormControl><Textarea placeholder="Tell us about your ICP, target titles, or geo focus…" rows={4} {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
                  Get a Free Sample List
                  <ArrowRight className="ml-2" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
