import { Menu } from "@/@types/menu";
import { ConditionalCta } from "@/components/conditional-cta";
import { SITE_TITLE } from "@/constants";
import menu from "@/data/menu.json";
import Image from "next/image";
import Link from "next/link";

export function Header({ pathname }: { pathname: string }) {
  const links = (menu as Menu).filter((item) =>
    item.context.some((start) => pathname.startsWith(start))
  );

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
            <ConditionalCta />
          </div>
        </div>
      </div>
    </header>
  );
}
