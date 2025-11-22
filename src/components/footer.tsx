import { getWhatsappLink } from "@/lib/utils";
import { Clock, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const whatsappLink = getWhatsappLink();

  const links = [
    {
      link: whatsappLink,
      label: "Planos e Ofertas",
    },
    {
      link: whatsappLink,
      label: "Cobertura",
    },
    {
      link: "https://www.claro.com.br/atendimento",
      label: "App Minha Claro",
    },
    {
      link: "https://www.claro.com.br/atendimento",
      label: "Segunda Via da Conta",
    },
    {
      link: "https://www.claro.com.br/atendimento",
      label: "Suporte Técnico",
    },
    {
      link: "https://www.claro.com.br/privacidade/politica-de-privacidade",
      label: "Política de Privacidade",
    },
  ];

  const atendimento = [
    {
      label: "*1052",
      sublabel: "Clientes de Celular",
    },
    {
      label: "10621",
      sublabel: "Clientes do Residencial",
    },
    {
      label: "0800 721 1021",
      sublabel: "Clientes Empresa",
    },
    {
      label: "0800 036 2525",
      sublabel: "Vendas",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/clarobrasil",
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/clarobrasil/",
      label: "Instagram",
    },
    {
      href: "https://x.com/clarobrasil",
      label: "X",
    },
    {
      href: "https://www.youtube.com/user/clarobrasil",
      label: "YouTube",
    },
    {
      href: "https://www.linkedin.com/company/clarobrasil",
      label: "LinkedIn",
    },
    {
      href: "https://www.tiktok.com/@clarobrasil",
      label: "TikTok",
    },
  ];

  return (
    <footer className="bg-claro-level-2 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Logo e Sobre a Claro */}
          <div className="space-y-4">
            <div className="mb-4">
              <Image
                src="/claro-branca-p-500.webp"
                alt=""
                width={150}
                height={48}
                className="h-12 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-sm text-white/90 leading-relaxed">
              A melhor cobertura e tecnologia para você ficar sempre conectado.
            </p>
          </div>

          {/* Coluna 2 - Links Úteis */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              {links.map(({ link, label }) => (
                <li key={label}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Atendimento */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Atendimento</h3>
            <div className="space-y-3">
              {atendimento.map(({ label, sublabel }) => (
                <Link href={`tel:${label.replace(/\s+/g, "")}`} key={label}>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium">{label}</div>
                      <div className="text-white/80">{sublabel}</div>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm text-white/90">24h por dia</span>
              </div>
            </div>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold mb-4">Siga a Claro</h3>
            <div className="space-y-2">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-white transition-colors block"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80 text-center md:text-left">
              &copy; 2025 Claro S.A. Todos os direitos reservados.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/80">
              <a
                href="https://www.claro.com.br/privacidade/politica-de-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
