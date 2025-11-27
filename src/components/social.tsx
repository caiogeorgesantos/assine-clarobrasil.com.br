import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function Social() {
  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo, SP",
      rating: 5,
      text: "Super fácil! Assinei pelo WhatsApp em 5 minutos. A equipe da Claro é muito eficiente!",
    },
    {
      name: "Carlos Santos",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Incrível como é rápido. Não precisei sair de casa e já estava navegando na Claro.",
    },
    {
      name: "Marina Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      text: "Melhor experiência de contratação que já tive. Recomendo!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mais de <span className="text-[#E30613]">100 milhões</span> de
            brasileiros já assinaram a{" "}
            <span className="text-[#E30613]">Claro</span>
          </h2>
        </div>

        <div className="">
          <Carousel opts={{ align: "center", loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="lg:basis-1/3 py-1">
                  <Card className="bg-gray-50 border-gray-200 h-full">
                    <CardContent className="flex flex-col h-full justify-between p-6">
                      <div>
                        <div className="flex justify-center mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 italic mb-4 text-center">
                          &quot;{testimonial.text}&quot;
                        </blockquote>
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Área das setas embaixo */}
            <div className="flex items-center justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-md border shadow-sm bg-claro-level-1 text-white disabled:bg-gray-300 disabled:text-black" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-md border shadow-sm bg-claro-level-1 text-white disabled:bg-gray-300 disabled:text-black" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
