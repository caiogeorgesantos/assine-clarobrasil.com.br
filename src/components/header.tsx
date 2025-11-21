import { SITE_TITLE } from "@/constants";
import menuParaEmpresas from "@/data/para-empresas/menu.json";
import menuParaVc from "@/data/para-vc/menu.json";
import { getWhatsappLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function Header({
  type,
  pathname,
}: {
  type?: "default" | "empresa";
  pathname: string;
}) {
  const links = type === "empresa" ? menuParaEmpresas : menuParaVc;

  const whatspAppLink = getWhatsappLink();

  return (
    <header>
      <div className="bg-[#1f1d1d] text-white">
        <div className="container mx-auto py-4 px-4 md:px-0 flex flex-col md:flex-row gap-4 items-center md:justify-between">
          <Link href="/">
            <h1>
              <Image
                src="/claro-branca-p-500.webp"
                alt=""
                width={106}
                height={38}
                priority
              />
              <span className="sr-only">{SITE_TITLE}</span>
            </h1>
          </Link>

          <div className="flex flex-row gap-6">
            {links.map((item) => (
              <Link
                key={item.url + item.label}
                href={item.url}
                className={`pb-0.5 border-b border-transparent hover:border-white ${
                  pathname === item.url ? "border-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Fale pelo WhatsApp */}
          <div>
            <Link
              href={whatspAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-2 bg-whatsapp text-white py-2.5 px-4 rounded-full"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="-mb-1">Fale pelo WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
