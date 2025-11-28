import { Card, CardContent } from "@/components/ui/card";
import { getWhatsappLink } from "@/lib/utils";
import { Headphones, MessageCircle, Package, Zap } from "lucide-react";
import { WhatsappCta } from "./common/whatsapp-cta";

export function Benefits() {
  const whatsappLink = getWhatsappLink();

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rápido e prático",
      description: "Assine seu plano Claro em poucos minutos",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Tudo no WhatsApp",
      description: "Processo 100% pelo WhatsApp, sem complicação",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Planos completos",
      description: "Internet, celular, TV e combos disponíveis",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte humano",
      description: "Atendimento humano disponível se precisar",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por que assinar pelo WhatsApp?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center text-[#25D366] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA abaixo dos benefícios */}
        <div className="text-center mt-12 max-w-xs mx-auto">
          <WhatsappCta href={whatsappLink}>
            Conhecer os planos Claro
          </WhatsappCta>
        </div>
      </div>
    </section>
  );
}
