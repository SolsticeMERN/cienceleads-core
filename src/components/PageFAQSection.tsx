import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

interface PageFAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
}

const PageFAQSection = ({ faqs, heading = "Frequently Asked Questions" }: PageFAQSectionProps) => {
  return (
    <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
      <h2 className="text-2xl font-bold mb-6">{heading}</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((item, i) => (
          <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
            <AccordionItem
              value={`faq-${i}`}
              className="border border-border rounded-xl px-6 bg-secondary/30"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <h3 className="text-sm md:text-base font-semibold pr-4">
                  {item.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </ScrollReveal>
        ))}
      </Accordion>
    </div>
  );
};

export default PageFAQSection;
