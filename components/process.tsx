"use client"

import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react"

// Etapas do processo de trabalho
// Mostra ao cliente exatamente o que esperar, gerando confiança
const steps = [
  {
    id: 1,
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico",
    description: "Entendo profundamente seu negócio, público-alvo e objetivos. Analisamos a concorrência e identificamos oportunidades únicas para o seu site.",
    duration: "1-2 dias",
  },
  {
    id: 2,
    number: "02",
    icon: Lightbulb,
    title: "Planejamento",
    description: "Defino a estrutura, funcionalidades e estratégia de conversão do site. Você aprova o wireframe antes de começarmos o design.",
    duration: "2-3 dias",
  },
  {
    id: 3,
    number: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description: "Transformo o planejamento em realidade. Design exclusivo, código limpo e otimizado. Você acompanha cada etapa em tempo real.",
    duration: "5-10 dias",
  },
  {
    id: 4,
    number: "04",
    icon: Rocket,
    title: "Entrega",
    description: "Testes finais, ajustes e lançamento. Seu site vai ao ar 100% funcional, otimizado e pronto para gerar resultados.",
    duration: "1-2 dias",
  },
]

export function Process() {
  return (
    <section
      id="processo"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorativo */}
      <div 
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] 
          bg-[#8B5CF6]/5 
          rounded-full 
          blur-[150px]
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
            Processo
          </span>
          
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
            "
          >
            Como funciona a{" "}
            <span className="gradient-vortex-text">criação do seu site</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed">
            Um processo transparente e organizado para você saber exatamente 
            o que esperar em cada etapa do projeto.
          </p>
        </div>

        {/* Timeline de etapas */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha conectora vertical (visível apenas em desktop) */}
            <div 
              className="
                hidden lg:block
                absolute left-1/2 top-0 bottom-0
                w-px
                bg-gradient-to-b from-[#00D4FF] via-[#8B5CF6] to-[#A855F7]
                opacity-30
              "
            />

            {/* Etapas do processo */}
            <div className="space-y-8 lg:space-y-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                const isEven = index % 2 === 0
                
                return (
                  <div
                    key={step.id}
                    className={`
                      relative
                      flex flex-col lg:flex-row
                      items-center
                      gap-6 lg:gap-12
                      ${!isEven ? "lg:flex-row-reverse" : ""}
                    `}
                  >
                    {/* Card da etapa */}
                    <div 
                      className={`
                        flex-1
                        w-full
                        p-6 lg:p-8
                        bg-[#1A1A35]/50 backdrop-blur-sm
                        border border-white/5
                        hover:border-[#00D4FF]/20
                        rounded-2xl
                        transition-all duration-300
                        ${isEven ? "lg:text-right" : "lg:text-left"}
                      `}
                    >
                      {/* Duração */}
                      <span 
                        className="
                          inline-block
                          text-xs font-medium
                          text-[#8B5CF6]
                          bg-[#8B5CF6]/10
                          px-3 py-1
                          rounded-full
                          mb-4
                        "
                      >
                        {step.duration}
                      </span>

                      {/* Título */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Descrição */}
                      <p className="text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Círculo central com número e ícone */}
                    <div 
                      className="
                        relative
                        w-20 h-20
                        flex-shrink-0
                        flex items-center justify-center
                        bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6]
                        rounded-full
                        shadow-lg shadow-[#00D4FF]/20
                        z-10
                      "
                    >
                      <div className="text-center">
                        <IconComponent className="w-8 h-8 text-white mx-auto" />
                      </div>
                      
                      {/* Número absoluto */}
                      <span 
                        className="
                          absolute -top-2 -right-2
                          w-8 h-8
                          bg-[#0A0A1B]
                          border-2 border-[#00D4FF]
                          rounded-full
                          flex items-center justify-center
                          text-xs font-bold text-[#00D4FF]
                        "
                      >
                        {step.number}
                      </span>
                    </div>

                    {/* Espaçador para manter alinhamento */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
