import { getWhatsappLink } from "@/lib/utils";
import { WhatsappCta } from "./common/whatsapp-cta";

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

        <div className="text-center mt-12 max-w-xs mx-auto">
          <WhatsappCta href={whatsappLink}>
            Conhecer os planos Claro
          </WhatsappCta>
        </div>

        <div className="mt-8 flex justify-center items-center space-x-4 text-gray-300">
          <span className="text-sm">✅ Rápido</span>
          <span>•</span>
          <span className="text-sm">✅ Seguro</span>
        </div>
      </div>
    </section>
  );
}
