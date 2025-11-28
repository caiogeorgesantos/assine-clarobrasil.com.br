"use client";

import { AssineCta } from "@/components/common/assine-cta";
import { WhatsappCta } from "@/components/common/whatsapp-cta";
import { isWorkingHours } from "@/lib/utils";
import { useEffect, useState } from "react";

export function HeaderConditionalCta() {
  const [showWhatsAppCta, setShowWhatsAppCta] = useState<boolean | null>(null);

  useEffect(() => {
    const workingHours = isWorkingHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowWhatsAppCta(workingHours);
  }, []);

  if (showWhatsAppCta) {
    return <WhatsappCta />;
  }

  if (showWhatsAppCta === false) {
    return <AssineCta />;
  }

  return <div className="w-32 h-10" />;
}
