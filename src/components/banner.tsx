import { Banners } from "@/@types/banner";
import { SITE_TITLE } from "@/constants";
import banners from "@/data/banners.json";
import Image from "next/image";
import Link from "next/link";

export function Banner({ pathname }: { pathname: string }) {
  const defaultBanners = {
    desktop: "/banners/default-desk.webp",
    mobile: "/banners/default-mobile.webp",
  };

  const { desktop, mobile, label, url, target } = (banners as Banners).find(
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
          fetchPriority="high"
          loading="eager"
        />

        <Image
          src={desktop}
          alt={label}
          title={label}
          width={1335}
          height={292}
          className="w-full hidden md:block"
          fetchPriority="high"
          loading="eager"
        />
      </Link>
    </section>
  );
}
