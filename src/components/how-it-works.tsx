import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HowItWorks() {
  const whatsappLink = getWhatsappLink();

  const steps = [
    {
      number: "01",
      title: "Fale com nossa equipe",
      description:
        "Nossa equipe está pronta para te atender e tirar suas dúvidas pelo WhatsApp.",
      tech: "Atendimento 24h",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Análise personalizada",
      description:
        "Analisamos sua necessidade e indicamos os melhores planos para você.",
      tech: "Equipe especializada",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Ativação rápida",
      description:
        "Cuidamos de toda a contratação e ativação do plano de forma rápida e prática.",
      tech: "Atendimento Claro",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #e2e8f0 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #cbd5e1 0.5px, transparent 0.5px)`,
            backgroundSize: "50px 50px, 30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-full px-6 py-3 mb-6 border border-gray-200 shadow-sm">
            <Sparkles className="w-5 h-5 text-gray-700 mr-2" />
            <span className="text-gray-700 font-medium">
              Tecnologia de Ponta
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Como funciona nosso
            <span className="text-[#E30613]"> atendimento</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contratação rápida e sem burocracia.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora tech */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-4/5 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting line for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-full w-px h-8 bg-gradient-to-b from-blue-300 to-transparent transform -translate-x-1/2"></div>
                )}

                <div className="relative">
                  {/* Card */}
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center transition-all duration-500 group-hover:scale-105 group-hover:border-[#E30613] group-hover:shadow-2xl group-hover:shadow-[#E30613]/10 shadow-lg">
                    {/* Número do passo */}
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-[#E30613] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        <span className="text-white font-bold text-xl relative z-10">
                          {step.number}
                        </span>
                      </div>

                      {/* Tech badge */}
                      <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse mr-2"></div>
                        <span className="text-gray-700 text-sm font-medium">
                          {step.tech}
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E30613] transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action tech */}
        <div className="text-center mt-16">
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              <Image
                src="/icon-whatsapp-default.svg"
                alt=""
                width={20}
                height={20}
                className="w-5 h-5 mr-3"
              />
              Conhecer os planos Claro
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
