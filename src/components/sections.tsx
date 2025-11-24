import { Card as CardType } from "@/@types/card";
import { Sections as SectionsType } from "@/@types/section";
import { Card } from "@/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sections from "@/data/sections.json";

export function Sections({ pathname }: { pathname: string }) {
  const filteredSections = (sections as SectionsType).filter((sections) =>
    sections.context.includes(pathname)
  );

  if (filteredSections.length === 0) {
    return <></>;
  }

  return (
    <div className="py-16 px-4 md:px-0">
      {filteredSections.map((section) => (
        <section
          key={section.title}
          className="container mx-auto py-4 md:py-0 mb-16 last:mb-0"
        >
          <h2 className="mb-4 font-bold text-4xl">{section.title}</h2>

          <p className="mb-8 text-base font-normal">{section.subtitle}</p>

          <Carousel opts={{ align: "center", loop: false }}>
            <CarouselContent>
              {section.tabs[0].cards.map((cardData, id) => (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-1"
                >
                  <Card data={cardData as unknown as CardType} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Área das setas embaixo */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-md border shadow-sm" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-md border shadow-sm" />
            </div>
          </Carousel>
        </section>
      ))}
    </div>
  );
}
