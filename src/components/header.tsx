import { Menu } from "@/@types/menu";
import { HeaderConditionalCta } from "@/components/header-conditional-cta";
import { HeaderMenuMobile } from "@/components/header-menu-mobile";
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
        <div className="container mx-auto py-4 px-0 flex flex-col md:flex-row gap-8 md:gap-4 items-center md:justify-between">
          <div className="relative w-full md:w-auto flex items-center justify-center">
            <Link href="/">
              <h1>
                <Image
                  src="/logo-claro.png"
                  alt=""
                  width={171}
                  height={37}
                  priority
                />
                <span className="sr-only">{SITE_TITLE}</span>
              </h1>
            </Link>

            {links.length > 0 && (
              <HeaderMenuMobile links={links} pathname={pathname} />
            )}
          </div>

          <div className="hidden md:flex flex-row gap-6">
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
            <HeaderConditionalCta />
          </div>
        </div>
      </div>
    </header>
  );
}
