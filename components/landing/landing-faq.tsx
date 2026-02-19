import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LandingFAQProps {
  faqItems: models.IFAQItem[];
  defaultOpenIndex?: number | null;
  title?: string;
  subtitle?: string;
}

const LandingFAQ: React.FC<LandingFAQProps> = ({
  faqItems,
  defaultOpenIndex = 0,
  title = "SUPPORT",
  subtitle = "Your questions, answered",
}) => {
  const defaultValue =
    defaultOpenIndex !== null ? `item-${defaultOpenIndex}` : undefined;

  return (
    <div className="w-full bg-background py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-sm font-semibold uppercase tracking-wider mb-2">
            {title}
          </h5>
          <h2 className="text-4xl font-bold">{subtitle}</h2>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue={defaultValue}
          className="w-full space-y-4"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-md shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 font-medium text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default LandingFAQ;
