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
      <div className="bg-black-level-1 text-white min-h-[76px]">
        <div className="container mx-auto py-4 px-2 lg:px-0 flex flex-row gap-8 lg:gap-4 items-center lg:justify-between h-full">
          <div className="relative w-full lg:w-auto flex flex-row-reverse items-center justify-end gap-1">
            <Link href="/">
              <h1>
                <Image
                  src="/logo-claro.png"
                  alt=""
                  width={171}
                  height={37}
                  className="w-auto h-6 lg:h-9"
                  priority
                />
                <span className="sr-only">{SITE_TITLE}</span>
              </h1>
            </Link>

            {links.length > 0 && (
              <HeaderMenuMobile links={links} pathname={pathname} />
            )}
          </div>

          <div className="hidden lg:flex flex-row gap-6">
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
          <div className="flex-1 lg:flex-0 max-h-10">
            <HeaderConditionalCta />
          </div>
        </div>
      </div>
    </header>
  );
}
