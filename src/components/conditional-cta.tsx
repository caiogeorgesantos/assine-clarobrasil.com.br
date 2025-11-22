"use client";

import { getWhatsappLink } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

export function ConditionalCta() {
  const whatspAppLink = getWhatsappLink();

  const isAfter18 = useMemo(() => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 18;
  }, []);

  if (isAfter18 === null) {
    return null;
  }

  return (
    <>
      {isAfter18 ? (
        <Link href={"#"} rel="noopener noreferrer" className="block w-full">
          <button className="bg-hire text-[#1f1d1d] text-center w-full py-2.5 px-6 font-medium rounded-full cursor-pointer flex flex-row items-center justify-center">
            <span className="-mb-1">Assine online</span>
          </button>
        </Link>
      ) : (
        <Link
          href={whatspAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button className="bg-whatsapp text-white text-shadow-sm text-center w-full py-2.5 px-6 font-medium rounded-full cursor-pointer flex flex-row items-center justify-center gap-2">
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="-mb-1">Compre pelo WhatsApp</span>
          </button>
        </Link>
      )}
    </>
  );
}
