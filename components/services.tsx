"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Rocket, ShoppingCart, CheckCircle2 } from "lucide-react"

// Dados dos serviços oferecidos
// Cada serviço é apresentado com foco nos benefícios para o cliente
const services = [
  {
    id: 1,
    icon: Globe,
    title: "Sites Institucionais",
    description: "Transmita profissionalismo e conquiste a confiança do seu público com um site que reflete a qualidade do seu negócio.",
    benefits: [
      "Design premium e exclusivo",
      "Otimizado para conversão",
      "SEO para aparecer no Google",
      "100% responsivo",
    ],
    gradient: "from-[#00D4FF] to-[#0066FF]",
  },
  {
    id: 2,
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas de alta conversão projetadas para transformar visitantes em leads qualificados e clientes.",
    benefits: [
      "Copywriting persuasivo",
      "Design focado em ação",
      "Testes A/B inclusos",
      "Integração com CRM",
    ],
    gradient: "from-[#8B5CF6] to-[#A855F7]",
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Lojas virtuais completas que vendem 24 horas por dia, com experiência de compra fluida e segura.",
    benefits: [
      "Checkout otimizado",
      "Gestão de produtos fácil",
      "Integração com pagamentos",
      "Relatórios de vendas",
    ],
    gradient: "from-[#00D4FF] to-[#8B5CF6]",
  },
]

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorativo */}
      <div 
        className="
          absolute top-0 right-0 
          w-96 h-96 
          bg-[#00D4FF]/10 
          rounded-full 
          blur-[120px]
        " 
      />
      <div 
        className="
          absolute bottom-0 left-0 
          w-96 h-96 
          bg-[#8B5CF6]/10 
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
            Serviços
          </span>
          
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
            "
          >
            Soluções completas para{" "}
            <span className="gradient-vortex-text">seu negócio crescer</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed">
            Cada tipo de site é desenvolvido com estratégias específicas 
            para maximizar seus resultados e atingir seus objetivos de negócio.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            
            return (
              <Card
                key={service.id}
                className="
                  group
                  bg-[#1A1A35]/50 backdrop-blur-sm
                  border border-white/5
                  hover:border-white/10
                  rounded-2xl
                  overflow-hidden
                  transition-all duration-500
                  hover:transform hover:-translate-y-2
                  relative
                "
              >
                {/* Linha de gradiente no topo */}
                <div 
                  className={`
                    absolute top-0 left-0 right-0
                    h-1
                    bg-gradient-to-r ${service.gradient}
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  `}
                />

                <CardContent className="p-8">
                  {/* Ícone do serviço */}
                  <div 
                    className={`
                      w-16 h-16 
                      rounded-2xl
                      bg-gradient-to-br ${service.gradient}
                      flex items-center justify-center
                      mb-6
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título do serviço */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Descrição do serviço */}
                  <p className="text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Lista de benefícios */}
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 text-white/80"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00D4FF] flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
