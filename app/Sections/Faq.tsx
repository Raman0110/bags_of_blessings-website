import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "../lib/faq"

const Faq = () => {
  return (
    <div className="section-padding">
      <h1 className="max-md:px-8 text-3xl font-semibold mt-8 mb-6 text-[#EC1A1C]">
        Frequently asked questions
      </h1>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.answer}>
            <AccordionTrigger className="font-semibold text-lg cursor-pointer">{faq.question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export default Faq