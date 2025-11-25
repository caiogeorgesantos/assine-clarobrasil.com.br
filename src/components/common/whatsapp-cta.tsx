import { cn, getWhatsappLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type WhatsappCtaProps = Partial<
  Pick<ComponentPropsWithoutRef<typeof Link>, "href">
> &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    children?: ReactNode;
  };

export function WhatsappCta({ ...props }: WhatsappCtaProps) {
  const whatsappLink = props.href ?? getWhatsappLink();
  const target = props.target ?? "_blank";
  const rel = props.rel ?? "noopener noreferrer";

  return (
    <Link
      href={whatsappLink}
      target={target}
      rel={rel}
      className="block w-full"
    >
      <span
        className={cn(
          "bg-whatsapp text-white text-shadow-sm text-center w-full py-2.5 px-6 font-medium rounded-full cursor-pointer flex flex-row items-center justify-center gap-2",
          props.className
        )}
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <span className="-mb-1">
          {props.children ?? "Compre pelo WhatsApp"}
        </span>
      </span>
    </Link>
  );
}
