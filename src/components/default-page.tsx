import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Sections } from "@/components/sections";

export function DefaultPage({ pathname }: { pathname: string }) {
  return (
    <>
      <Header pathname={pathname} />
      <Banner pathname={pathname} />
      <Sections pathname={pathname} />
    </>
  );
}
