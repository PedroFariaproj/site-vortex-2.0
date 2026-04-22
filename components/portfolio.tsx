"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dados dos projetos do portfólio
// Cada projeto demonstra resultados reais e tangíveis
// image: caminho para a imagem mockup gerada representando o projeto
const projects = [
  {
    id: 1,
    name: "TechFlow Solutions",
    type: "Site Institucional",
    description: "Empresa de tecnologia que triplicou a geração de leads em 3 meses após o lançamento do novo site.",
    result: "+200% em leads",
    image: "/images/portfolio/techflow.jpg",
    gradient: "from-[#00D4FF] to-[#0066FF]",
  },
  {
    id: 2,
    name: "Bella Moda",
    type: "E-commerce",
    description: "Loja de moda feminina que aumentou as vendas online em 150% com um design focado em conversão.",
    result: "+150% em vendas",
    image: "/images/portfolio/bella-moda.jpg",
    gradient: "from-[#8B5CF6] to-[#A855F7]",
  },
  {
    id: 3,
    name: "Consultoria Financeira",
    type: "Landing Page",
    description: "Landing page de alta conversão que gerou mais de 500 novos contatos no primeiro mês.",
    result: "+500 contatos/mês",
    image: "/images/portfolio/consultoria-financeira.jpg",
    gradient: "from-[#00D4FF] to-[#8B5CF6]",
  },
  {
    id: 4,
    name: "Clínica Bem-Estar",
    type: "Site Institucional",
    description: "Clínica de saúde que dobrou os agendamentos online com uma experiência digital moderna.",
    result: "+100% agendamentos",
    image: "/images/portfolio/clinica-bem-estar.jpg",
    gradient: "from-[#A855F7] to-[#EC4899]",
  },
  {
    id: 5,
    name: "Academia PowerFit",
    type: "Landing Page",
    description: "Landing page que converteu 35% dos visitantes em alunos matriculados em apenas 2 semanas.",
    result: "35% taxa de conversão",
    image: "/images/portfolio/powerfit.jpg",
    gradient: "from-[#0066FF] to-[#00D4FF]",
  },
  {
    id: 6,
    name: "Restaurante Sabor & Arte",
    type: "Site Institucional",
    description: "Restaurante que aumentou reservas em 80% com um site otimizado para mobile.",
    result: "+80% em reservas",
    image: "/images/portfolio/sabor-arte.jpg",
    gradient: "from-[#8B5CF6] to-[#00D4FF]",
  },
]

export function Portfolio() {
  return (
    <section
      id="projetos"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorativo - glow roxo sutil */}
      <div 
        className="
          absolute top-1/2 -left-48 
          w-96 h-96 
          bg-[#8B5CF6]/10 
          rounded-full 
          blur-[120px]
          pointer-events-none
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
            Portfólio
          </span>
          
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
            "
          >
            Projetos que{" "}
            <span className="gradient-vortex-text">geram resultados</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed">
            Cada projeto é desenvolvido com foco em performance, conversão e 
            experiência do usuário. Veja alguns dos resultados que entregamos.
          </p>
        </div>

        {/* Grid de projetos - responsivo: 1 coluna mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="
                group
                bg-[#1A1A35]/50 backdrop-blur-sm
                border border-white/5
                hover:border-[#00D4FF]/30
                rounded-2xl
                overflow-hidden
                transition-all duration-500
                hover:transform hover:-translate-y-2
                hover:shadow-2xl hover:shadow-[#00D4FF]/10
              "
            >
              {/* Área de preview do projeto com imagem real */}
              <div 
                className="
                  relative
                  h-52 
                  overflow-hidden
                "
              >
                {/* Imagem do mockup do projeto */}
                <Image
                  src={project.image}
                  alt={`Projeto ${project.name} - ${project.type}`}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                
                {/* Overlay com gradiente para legibilidade */}
                <div 
                  className={`
                    absolute inset-0 
                    bg-gradient-to-t from-[#0A0A1B] via-transparent to-transparent
                    opacity-60
                  `}
                />

                {/* Glow sutil na borda superior baseado no gradiente do projeto */}
                <div 
                  className={`
                    absolute top-0 left-0 right-0 h-1
                    bg-gradient-to-r ${project.gradient}
                    opacity-80
                  `}
                />

                {/* Overlay de hover com botão "Ver projeto" */}
                <div 
                  className="
                    absolute inset-0 
                    bg-[#0A0A1B]/70 
                    backdrop-blur-sm
                    opacity-0 group-hover:opacity-100
                    transition-all duration-300
                    flex items-center justify-center
                  "
                >
                  <span 
                    className="
                      flex items-center gap-2
                      bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]
                      text-white font-semibold
                      px-6 py-3
                      rounded-full
                      transform translate-y-4 group-hover:translate-y-0
                      transition-transform duration-300
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver projeto
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Tipo do projeto - badge */}
                <span 
                  className="
                    inline-block
                    text-xs font-medium
                    text-[#00D4FF]
                    bg-[#00D4FF]/10
                    px-3 py-1
                    rounded-full
                    mb-4
                  "
                >
                  {project.type}
                </span>

                {/* Nome do projeto */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Descrição focada em resultado */}
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Resultado destaque com ícone */}
                <div 
                  className="
                    flex items-center gap-2
                    text-[#00D4FF] font-semibold
                  "
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>{project.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para solicitar projeto similar */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              bg-transparent
              border-2 border-white/20
              hover:border-[#00D4FF]/50
              hover:bg-[#00D4FF]/5
              text-white font-medium
              px-8 py-6
              rounded-full
              transition-all duration-300
            "
          >
            <Link href="#contato" className="flex items-center gap-2">
              Quero um projeto assim
              <ExternalLink className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
