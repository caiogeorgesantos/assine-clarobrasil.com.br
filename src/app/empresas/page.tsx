import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Sections } from "@/components/sections";

export default function HomeEmpresas() {
  const pathname = "/empresas";

  return (
    <>
      <Header pathname={pathname} type="empresa" />
      <Banner pathname={pathname} />
      <Sections pathname={pathname} />
    </>
  );
}
