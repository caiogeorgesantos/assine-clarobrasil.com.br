import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Sections } from "@/components/sections";

export default async function PageEmpresas({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pathname = `/empresas/${slug}`;

  return (
    <>
      <Header pathname={pathname} type="empresa" />
      <Banner pathname={pathname} />
      <Sections pathname={pathname} />
    </>
  );
}
