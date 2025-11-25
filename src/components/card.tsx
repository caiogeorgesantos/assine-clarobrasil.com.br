import { Card as CardType } from "@/@types/card";
import { AssineCta } from "@/components/common/assine-cta";
import { WhatsappCta } from "@/components/common/whatsapp-cta";
import { getWhatsappLink } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  data: CardType;
}

export function Card({ data }: CardProps) {
  const whatsappLink = getWhatsappLink();

  const cardData = {
    ribbon: "",
    title: "",
    subtitle: "",
    headline: "",
    price: "",
    priceDescription: "",
    priceDetails: "",
    whatsappLink,
    onlineLink: "",
    ...data,
  };

  return (
    <div className="flex-1 self-stretch flex flex-col h-full">
      {cardData.ribbon && (
        <div className="bg-claro-level-1 text-white text-sm font-bold px-3 py-1 rounded-tl-xl rounded-br-xl inline-block mb-2 self-start">
          {cardData.ribbon}
        </div>
      )}

      <div className="bg-white border border-[#dbdbdb] rounded-xl shadow-md w-full md:min-w-[296px] md:max-w-[372px] flex-1 p-4 flex flex-col">
        {cardData.title && (
          <h3 className="font-bold text-lg">{cardData.title}</h3>
        )}
        {cardData.subtitle && (
          <h4 className="font-bold text-base">{cardData.subtitle}</h4>
        )}

        {cardData.headline && (
          <p className="mt-4 text-claro-level-1 text-4xl font-extrabold">
            {cardData.headline}
          </p>
        )}

        {cardData.details?.map((detail, index) => (
          <div
            key={index}
            className="border-t border-gray-200 mt-4 pt-6 flex flex-col gap-3 flex-1"
          >
            {detail.title && (
              <h5 className="font-semibold text-base">{detail.title}</h5>
            )}

            {detail.strongInfo && detail?.strongInfo.length > 0 && (
              <div className="flex flex-col gap-1">
                {detail.strongInfo.map((info, idx) => (
                  <p key={idx} className="font-semibold text-sm">
                    {info}
                  </p>
                ))}
              </div>
            )}

            {detail.defaultInfo && detail?.defaultInfo.length > 0 && (
              <div className="flex flex-col gap-1">
                {detail.defaultInfo.map((info, idx) => (
                  <div key={idx} className="text-sm">
                    {info}
                  </div>
                ))}
              </div>
            )}

            {detail.imageInfo && detail?.imageInfo.length > 0 && (
              <div>
                <p className="font-semibold text-sm mb-2">
                  Franquia para redes sociais e apps:
                </p>
                <div className="flex flex-row gap-1">
                  {detail.imageInfo.map((src, idx) => (
                    <Image
                      key={idx}
                      src={`/icons/${src}.svg`}
                      alt={src}
                      title={src}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="border-t border-gray-200 mt-6 pt-6 flex flex-col gap-4">
          {/* Price */}
          <div className="flex flex-row items-center justify-start">
            <span className="text-claro-level-1 text-3xl font-extrabold">
              {cardData.price}
            </span>
            <span className="text-xl font-medium">
              /{cardData.priceDescription}
            </span>
          </div>

          {/* Price Details */}
          {cardData.priceDetails && (
            <p className="text-sm text-gray-700">{cardData.priceDetails}</p>
          )}

          <div className="flex flex-col items-center gap-2">
            <WhatsappCta href={cardData.whatsappLink} />
            <AssineCta href={cardData.onlineLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
