import { Banner } from "@/components/banner";
import { FloatingButton } from "@/components/floating-button";
import { Header } from "@/components/header";
import { Hire } from "@/components/hire";
import { Sections } from "@/components/sections";

export default function Home() {
  const pathname = "/";

  return (
    <>
      <Header pathname={pathname} />
      <Banner pathname={pathname} />
      <Sections pathname={pathname} />

      <Hire />

      <FloatingButton />
    </>
  );
}
