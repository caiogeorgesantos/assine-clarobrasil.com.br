import { Button } from "@/components/ui/button";
import { getWhatsappLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function FinalCTA() {
  const whatsappLink = getWhatsappLink();

  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pronto para assinar Claro em minutos?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Nossa equipe está online agora e pronta para te atender!
        </p>

        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button className="bg-[#25D366] hover:bg-[#1ea952] text-white text-xl px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center">
            <Image
              src="/icon-whatsapp-default.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 mr-3"
            />
            Conhecer os planos Claro
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </Link>

        <div className="mt-8 flex justify-center items-center space-x-4 text-gray-300">
          <span className="text-sm">✅ Rápido</span>
          <span>•</span>
          <span className="text-sm">✅ Seguro</span>
        </div>
      </div>
    </section>
  );
}
