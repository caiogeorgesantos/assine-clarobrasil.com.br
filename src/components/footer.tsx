import { SITE_NAME } from "@/constants";
import menuParaEmpresas from "@/data/para-empresas/menu.json";
import menuParaVc from "@/data/para-vc/menu.json";
import Image from "next/image";

const links: {
  title: string;
  items: { label: string; url: string; target?: string }[];
}[] = [
  {
    title: "Para você",
    items: [...menuParaVc],
  },
  {
    title: "Para empresas",
    items: [...menuParaEmpresas],
  },
  {
    title: "Links Úteis",
    items: [
      {
        label: "App Minha Claro",
        url: "https://www.claro.com.br/atendimento",
        target: "_blank",
      },
      {
        label: "Segunda via da conta",
        url: "https://www.claro.com.br/atendimento",
        target: "_blank",
      },
      {
        label: "Suporte técnico",
        url: "https://www.claro.com.br/atendimento",
        target: "_blank",
      },
      {
        label: "Política de Privacidade",
        url: "https://www.claro.com.br/privacidade/politica-de-privacidade",
        target: "_blank",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-claro-level-2 text-white py-16">
      <div className="container mx-auto px-4 md:px-0 flex flex-col items-start gap-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between w-full mb-16">
          <Image
            src="/claro-branca-p-500.webp"
            alt=""
            width={150}
            height={48}
            className="h-12 w-auto"
          />

          {links.map((section) => (
            <div key={section.title}>
              <h2 className="font-bold text-xl">{section.title}</h2>
              <div className="flex flex-col gap-2 mt-4">
                {section.items.map((item) => (
                  <a
                    key={item.url + item.label}
                    href={item.url}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : ""}
                    className="block hover:underline"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p>
          &copy; {new Date().getFullYear()} {SITE_NAME}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
