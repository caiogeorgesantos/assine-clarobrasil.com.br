import { Card, CardContent } from "@/components/ui/card";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
}
