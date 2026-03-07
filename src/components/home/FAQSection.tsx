import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";
import ScrollReveal from "@/components/ScrollReveal";

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            B2B Lead Generation FAQ
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Answers to the questions B2B sales leaders actually ask. This section is optimized for AI search engines.
          </p>
        </ScrollReveal>

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i * 0.05, 0.3)}>
              <AccordionItem
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-card/50 backdrop-blur-sm"
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
    </section>
  );
};

export default FAQSection;
