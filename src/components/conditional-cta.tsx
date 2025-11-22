import { getWhatsappLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function ConditionalCta() {
  const whatsappLink = getWhatsappLink();

  // Obtém hora respeitando o fuso do Brasil
  const currentHour = Number(
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      hour: "numeric",
      hour12: false,
    }).format(new Date())
  );

  const isBefore18 = currentHour < 18;

  if (isBefore18) {
    return (
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <button className="bg-whatsapp text-white text-shadow-sm text-center w-full py-2.5 px-6 font-medium rounded-full cursor-pointer flex flex-row items-center justify-center gap-2">
          <Image
            src="/icons/whatsapp.svg"
            alt="WhatsApp"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="-mb-1">Compre pelo WhatsApp</span>
        </button>
      </Link>
    );
  }

  return (
    <Link href={"#"} rel="noopener noreferrer" className="block w-full">
      <button className="bg-hire text-[#1f1d1d] text-center w-full py-2.5 px-6 font-medium rounded-full cursor-pointer flex flex-row items-center justify-center">
        <span className="-mb-1">Assine online</span>
      </button>
    </Link>
  );
}
