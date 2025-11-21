"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const profileLinks = [
  { href: "/", label: "Para Você" },
  { href: "/empresas", label: "Para Empresas" },
];

export function NavProfile() {
  const pathname = usePathname();

  function isEmpresasPath(currentPath: string) {
    return pathname?.startsWith("/empresas") && currentPath === "/empresas";
  }

  function isParaVocePath(currentPath: string) {
    return !pathname?.startsWith("/empresas") && currentPath === "/";
  }

  return (
    <nav className="container mx-auto">
      <div className="flex list-none flex-row flex-wrap border-b-0 ps-0">
        {profileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-block hover:border-yellow-600 rounded-t-lg py-2 px-4 text-base font-medium text-center border-transparent border-b-4 ${
              isEmpresasPath(link.href) || isParaVocePath(link.href)
                ? " border-yellow-600"
                : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
