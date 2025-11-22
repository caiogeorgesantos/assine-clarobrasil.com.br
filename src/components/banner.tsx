import { SITE_TITLE } from "@/constants";
import bannersParaEmpresas from "@/data/para-empresas/banners.json";
import bannersParaVc from "@/data/para-vc/banners.json";
import Image from "next/image";
import Link from "next/link";

export function Banner({ pathname }: { pathname: string }) {
  const defaultBanners = {
    desktop: "/banners/default-desk.webp",
    mobile: "/banners/default-mobile.webp",
  };

  const banners: {
    pathname: string;
    desktop: string;
    mobile: string;
    label: string;
    url: string;
    target: string;
  }[] = [...bannersParaVc, ...bannersParaEmpresas];

  const { desktop, mobile, label, url, target } = banners.find(
    (b) => b.pathname === pathname
  ) || {
    desktop: defaultBanners.desktop,
    mobile: defaultBanners.mobile,
    label: SITE_TITLE,
    url: "/",
    target: "_self",
  };

  return (
    <section>
      <Link href={url} target={target} aria-label={label}>
        <Image
          src={mobile}
          alt={label}
          title={label}
          width={721}
          height={817}
          className="w-full block md:hidden"
        />

        <Image
          src={desktop}
          alt={label}
          title={label}
          width={1335}
          height={292}
          className="w-full hidden md:block"
        />
      </Link>
    </section>
  );
}
