"use client";

import { AssineCta } from "@/components/common/assine-cta";
import { WhatsappCta } from "@/components/common/whatsapp-cta";
import { isWorkingHours } from "@/lib/utils";

export function HeaderConditionalCta() {
  const workingHours = isWorkingHours();

  if (workingHours) {
    return <WhatsappCta />;
  }

  return <AssineCta />;
}
