import { Banner } from "@/components/banner";
import { Header } from "@/components/header";
import { Sections } from "@/components/sections";

export default function Home() {
  const pathname = "/";

  return (
    <>
      <Header pathname={pathname} />
      <Banner pathname={pathname} />
      <Sections pathname={pathname} />
    </>
  );
}
