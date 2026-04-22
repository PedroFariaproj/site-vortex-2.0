"use client"

import { 
  Target, 
  Zap, 
  Smartphone, 
  Search, 
  MessageCircle,
  Shield
} from "lucide-react"

// Diferenciais que destacam o valor do serviço
// Cada diferencial responde à pergunta: "Por que escolher você?"
const differentials = [
  {
    id: 1,
    icon: Target,
    title: "Design Estratégico",
    description: "Cada elemento do seu site é pensado para guiar o visitante até a ação desejada. Design bonito que também converte.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Alta Performance",
    description: "Sites rápidos que carregam em menos de 3 segundos. Melhor experiência para o usuário e melhor ranqueamento no Google.",
  },
  {
    id: 3,
    icon: Smartphone,
    title: "Responsividade Total",
    description: "Perfeito em qualquer dispositivo. Do celular ao desktop, seu site vai impressionar seus clientes em qualquer tela.",
  },
  {
    id: 4,
    icon: Search,
    title: "SEO Otimizado",
    description: "Estrutura técnica preparada para o Google. Apareça nas buscas e seja encontrado por quem procura seu serviço.",
  },
  {
    id: 5,
    icon: MessageCircle,
    title: "Atendimento Personalizado",
    description: "Comunicação direta e transparente do início ao fim. Você participa de todas as etapas do projeto.",
  },
  {
    id: 6,
    icon: Shield,
    title: "Suporte Contínuo",
    description: "Não te abandono após a entrega. Suporte técnico e atualizações para manter seu site sempre funcionando.",
  },
]

export function Differentials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#12122A]/50">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

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
            Diferenciais
          </span>
          
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
            "
          >
            Por que escolher a{" "}
            <span className="gradient-vortex-text">Vortex Sites?</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed">
            Não entrego apenas um site bonito. Entrego uma ferramenta estratégica 
            que trabalha 24 horas para o crescimento do seu negócio.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential) => {
            const IconComponent = differential.icon
            
            return (
              <div
                key={differential.id}
                className="
                  group
                  p-6 lg:p-8
                  bg-[#1A1A35]/30 backdrop-blur-sm
                  border border-white/5
                  hover:border-[#00D4FF]/20
                  rounded-2xl
                  transition-all duration-300
                  hover:bg-[#1A1A35]/50
                "
              >
                {/* Ícone */}
                <div 
                  className="
                    w-12 h-12 
                    rounded-xl
                    bg-gradient-to-br from-[#00D4FF]/20 to-[#8B5CF6]/20
                    border border-[#00D4FF]/20
                    flex items-center justify-center
                    mb-5
                    transition-all duration-300
                    group-hover:border-[#00D4FF]/40
                    group-hover:scale-110
                  "
                >
                  <IconComponent className="w-6 h-6 text-[#00D4FF]" />
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {differential.title}
                </h3>

                {/* Descrição */}
                <p className="text-white/60 leading-relaxed">
                  {differential.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
