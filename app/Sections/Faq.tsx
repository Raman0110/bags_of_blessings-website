import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "../lib/faq"

const Faq = () => {
  return (
    <section className="section-padding py-6">
      <h1 className="text-2xl sm:text-4xl font-semibold mb-6 sm:mb-8 md:mb-10 text-[#1D2030]">
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
    </section>
  )
}

export default Faq