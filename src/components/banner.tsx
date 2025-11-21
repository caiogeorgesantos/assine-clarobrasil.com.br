import { SITE_TITLE } from "@/constants";
import bannersParaEmpresas from "@/data/para-empresas/banners.json";
import bannersParaVc from "@/data/para-vc/banners.json";
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
    <Link href={url} target={target} aria-label={label}>
      <picture>
        <source srcSet={desktop} media="(min-width: 768px)" />

        <img src={mobile} alt={label} title={label} width="100%" />
      </picture>
    </Link>
  );
}
