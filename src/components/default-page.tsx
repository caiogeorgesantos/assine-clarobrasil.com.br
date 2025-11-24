import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Sections } from "@/components/sections";

export function DefaultPage({ pathname }: { pathname: string }) {
  const isEmpresaPage = pathname.startsWith("/empresas");
  const headerType = isEmpresaPage ? "empresa" : "default";

  return (
    <>
      <Header pathname={pathname} type={headerType} />
      <Banner pathname={pathname} />
      <Sections pathname={pathname} />
    </>
  );
}
