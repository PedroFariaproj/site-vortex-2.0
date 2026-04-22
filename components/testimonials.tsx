"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

// Depoimentos de clientes
// Prova social é essencial para gerar confiança e converter
const testimonials = [
  {
    id: 1,
    name: "Mariana Costa",
    role: "CEO, TechFlow Solutions",
    content: "O Pedro entendeu exatamente o que precisávamos. Nosso site antigo não gerava nenhum lead. Em 3 meses com o novo site, triplicamos nossa geração de contatos qualificados. Investimento que se pagou rapidamente.",
    rating: 5,
  },
  {
    id: 2,
    name: "Roberto Almeida",
    role: "Proprietário, Bella Moda",
    content: "Tinha receio de investir em e-commerce, mas o resultado superou todas as expectativas. O site é lindo, fácil de gerenciar e as vendas aumentaram 150%. Recomendo demais!",
    rating: 5,
  },
  {
    id: 3,
    name: "Dra. Fernanda Lima",
    role: "Diretora, Clínica Bem-Estar",
    content: "Profissionalismo do início ao fim. O Pedro foi muito atencioso, explicou cada etapa e entregou um site que transmite exatamente a credibilidade que nossa clínica precisa. Os agendamentos online dobraram!",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    role: "Fundador, Consultoria Financeira",
    content: "A landing page ficou perfeita. Texto persuasivo, design profissional e resultado imediato. Mais de 500 contatos no primeiro mês. Pedro é um profissional excepcional.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ricardo Santos",
    role: "Diretor, PowerFit Academia",
    content: "O site transmite exatamente a energia da nossa academia. As matrículas online aumentaram 90% e recebemos elogios diários dos alunos. O investimento valeu cada centavo!",
    rating: 5,
  },
  {
    id: 6,
    name: "Chef Juliana Rocha",
    role: "Proprietária, Sabor & Arte",
    content: "Nosso restaurante precisava de um site à altura da nossa gastronomia. O Pedro entregou algo sofisticado e elegante. As reservas pelo site cresceram absurdamente. Trabalho impecável!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#12122A]/50">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div 
        className="
          absolute bottom-0 right-0 
          w-96 h-96 
          bg-[#00D4FF]/10 
          rounded-full 
          blur-[120px]
        " 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="
              inline-block
              text-[#00D4FF] text-sm font-semibold
              uppercase tracking-wider
              mb-4
            "
          >
            Depoimentos
          </span>
          
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
            "
          >
            O que nossos{" "}
            <span className="gradient-vortex-text">clientes dizem</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed">
            Histórias reais de empresários que transformaram sua presença digital 
            e viram resultados concretos em seus negócios.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="
                bg-[#1A1A35]/50 backdrop-blur-sm
                border border-white/5
                hover:border-white/10
                rounded-2xl
                transition-all duration-300
                hover:transform hover:-translate-y-1
              "
            >
              <CardContent className="p-6 lg:p-8">
                {/* Ícone de citação */}
                <Quote className="w-10 h-10 text-[#00D4FF]/30 mb-4" />

                {/* Conteúdo do depoimento */}
                <p className="text-white/80 leading-relaxed mb-6 text-lg">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Informações do cliente */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-white/50">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Estrelas de avaliação */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <Star 
                        key={index} 
                        className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" 
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
