import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWhatsappLink } from "@/lib/utils";
import {
  Building,
  Cloud,
  Home,
  Package,
  Phone,
  Shield,
  Smartphone,
  Tv,
  Wifi,
} from "lucide-react";
import Link from "next/link";

export function Hire() {
  const whatsappLink = getWhatsappLink();

  const residentialServices = [
    {
      icon: <Wifi className="w-7 h-7 stroke-2" />,
      title: "Internet Fibra:",
      description: "até 1 Giga de velocidade com Wi-Fi incluso",
    },
    {
      icon: <Smartphone className="w-7 h-7 stroke-2" />,
      title: "Celular Claro:",
      description: "Planos Pós, Controle e Pré com apps ilimitados",
    },
    {
      icon: <Tv className="w-7 h-7 stroke-2" />,
      title: "TV Claro:",
      description: "Claro TV+ e Box TV com canais e streaming inclusos",
    },
    {
      icon: <Package className="w-7 h-7 stroke-2" />,
      title: "Combos Multi:",
      description: "Internet + Celular + TV em uma única fatura com desconto",
    },
  ];

  const businessServices = [
    {
      icon: <Building className="w-7 h-7 stroke-2" />,
      title: "Internet Empresarial:",
      description: "Fibra dedicada e estabilidade máxima",
    },
    {
      icon: <Phone className="w-7 h-7 stroke-2" />,
      title: "Telefonia Móvel Empresarial:",
      description: "Multi-linhas com gestão digital e dados compartilhados",
    },
    {
      icon: <Cloud className="w-7 h-7 stroke-2" />,
      title: "Soluções Digitais:",
      description: "Cloud, PABX Virtual, IoT e segurança digital",
    },
    {
      icon: <Shield className="w-7 h-7 stroke-2" />,
      title: "Combos Empresariais:",
      description: "Internet + Fixo + Móvel com suporte especializado",
    },
  ];

  return (
    <section className="py-16 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O que você pode contratar pelo WhatsApp
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Você apresenta sua necessidade, e nossa equipe mostra as melhores
            opções para você ou sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Residencial */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <Home className="w-8 h-8 text-[#E60000] mr-3 stroke-2" />
              <h3 className="text-3xl font-bold text-[#E60000] uppercase">
                Residencial
              </h3>
            </div>

            <div className="space-y-5">
              {residentialServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                >
                  <CardContent className="py-1 px-5 min-h-[110px]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 text-[#E60000] mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-800 mb-4 leading-relaxed">
                          <span className="font-bold">{service.title}</span>{" "}
                          {service.description}
                        </p>
                        <Link
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                          >
                            Saber mais
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Empresarial */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-8">
              <Building className="w-8 h-8 text-[#E60000] mr-3 stroke-2" />
              <h3 className="text-3xl font-bold text-[#E60000] uppercase">
                Empresarial
              </h3>
            </div>

            <div className="space-y-5">
              {businessServices.map((service, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                >
                  <CardContent className="py-1 px-5 min-h-[110px]">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 text-[#E60000] mt-1">
                        {service.icon}
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-800 mb-4 leading-relaxed">
                          <span className="font-bold">{service.title}</span>{" "}
                          {service.description}
                        </p>
                        <Link
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                          >
                            Saber mais
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
