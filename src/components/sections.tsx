import { Card as CardType } from "@/@types/card";
import { Sections as SectionsType } from "@/@types/section";
import { Card } from "@/components/card";
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

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center items-stretch bg-white border border-[#dbdbdb] rounded-xl shadow-md p-6 md:p-10">
            {section.tabs[0].cards.map((cardData, id) => (
              <Card key={id} data={cardData as unknown as CardType} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
