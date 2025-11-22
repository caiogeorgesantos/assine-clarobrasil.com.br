import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const faqItems = [
    {
      question: "Como funciona o atendimento via WhatsApp?",
      answer:
        "Nossa equipe responde suas dúvidas direto pelo WhatsApp. Você pode consultar planos, verificar cobertura e até mesmo finalizar sua assinatura.",
    },
    {
      question: "É seguro contratar pelo WhatsApp?",
      answer:
        "Sim, totalmente seguro. Utilizamos criptografia de ponta a ponta e todos os processos seguem os padrões de segurança da Claro.",
    },
    {
      question: "Quais planos posso contratar pelo WhatsApp?",
      answer:
        "Todos os nossos planos estão disponíveis: internet fibra, móvel, TV por assinatura e combos. Tanto para sua residência, quanto para sua empresa.",
    },
    {
      question: "Quanto tempo demora para ativar meu plano?",
      answer:
        "Após a confirmação da contratação, a ativação é imediata para planos móveis. Para fibra, agendamos a instalação em até 5 dias úteis.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais dúvidas sobre nosso atendimento
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left hover:text-[#E30613] py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
