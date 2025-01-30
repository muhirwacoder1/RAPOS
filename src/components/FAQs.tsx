import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is RAPOS?",
      answer: "RAPOS (Rwanda Association of Prosthetics and Orthotics Students) is a student-led organization dedicated to advancing prosthetics and orthotics education, research, and practice in Rwanda. We empower students to become skilled professionals and drive innovation in rehabilitation services."
    },
    {
      question: "Who can join RAPOS?",
      answer: "RAPOS is open to students studying or interested in prosthetics, orthotics, and related fields in Rwanda. We welcome passionate individuals committed to making a difference in rehabilitation and healthcare."
    },
    {
      question: "What are the benefits of joining RAPOS?",
      answer: "Members gain access to training, workshops, mentorship, and networking opportunities. You'll also participate in research, community outreach, and innovative projects that enhance your skills and impact."
    },
    {
      question: "How does RAPOS contribute to Rwanda's healthcare system?",
      answer: "We train future rehabilitation professionals, advocate for accessible assistive technology, and collaborate with stakeholders to strengthen rehabilitation services and align with national healthcare goals."
    },
    {
      question: "Does RAPOS work with communities?",
      answer: "Yes! We conduct outreach programs to raise awareness about rehabilitation services, provide support to underserved communities, and promote inclusivity for individuals with disabilities."
    },
    {
      question: "How can I support RAPOS?",
      answer: "You can support us by partnering with us, donating resources, volunteering, or spreading awareness about our mission. Contact us to learn more about collaboration opportunities."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-rapos-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rapos-primary mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
                <AccordionTrigger className="px-6 text-rapos-primary hover:text-rapos-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-rapos-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;