import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type AssineCtaProps = Partial<
  Pick<ComponentPropsWithoutRef<typeof Link>, "href">
> &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
    children?: ReactNode;
  };

export function AssineCta({ ...props }: AssineCtaProps) {
  const href = props.href ?? "#";
  const target = props.target ?? "_blank";
  const rel = props.rel ?? "noopener noreferrer";

  return (
    <Link href={href} target={target} rel={rel} className="block w-full">
      <button
        className={cn(
          "bg-hire text-black-level-1 text-center w-full py-2.5 px-6 font-medium rounded-full cursor-pointer flex flex-row items-center justify-center",
          props.className
        )}
      >
        <span className="-mb-1">{props.children ?? "Assine online"}</span>
      </button>
    </Link>
  );
}
