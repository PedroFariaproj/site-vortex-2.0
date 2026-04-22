"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative min-h-screen 
        flex items-center justify-center
        pt-24 pb-16 lg:pt-32 lg:pb-24
        overflow-hidden
      "
    >
      {/* Background com grid pattern e gradiente */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Efeitos de glow no background */}
      <div 
        className="
          absolute top-1/4 -left-32 
          w-96 h-96 
          bg-[#00D4FF]/20 
          rounded-full 
          blur-[120px]
        " 
      />
      <div 
        className="
          absolute bottom-1/4 -right-32 
          w-96 h-96 
          bg-[#8B5CF6]/20 
          rounded-full 
          blur-[120px]
        " 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge de destaque */}
          <div 
            className="
              inline-flex items-center gap-2
              bg-white/5 backdrop-blur-sm
              border border-white/10
              rounded-full
              px-4 py-2 mb-8
            "
          >
            <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
            <span className="text-sm text-white/70">
              Especialista em Sites que Convertem
            </span>
          </div>

          {/* Headline principal - A mensagem mais importante */}
          <h1 
            className="
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-bold leading-tight
              mb-6
            "
          >
            <span className="text-white">Seu site não deveria </span>
            <span className="text-white">só existir.</span>
            <br />
            <span className="gradient-vortex-text">
              Ele deveria gerar clientes.
            </span>
          </h1>

          {/* Subheadline - Reforça o benefício */}
          <p 
            className="
              text-lg sm:text-xl lg:text-2xl
              text-white/60
              max-w-3xl mx-auto
              mb-10
              leading-relaxed
            "
          >
            Transformo sua presença digital em uma{" "}
            <span className="text-white font-medium">máquina de vendas</span>.
            Sites estratégicos que{" "}
            <span className="text-[#00D4FF]">atraem</span>,{" "}
            <span className="text-[#8B5CF6]">engajam</span> e{" "}
            <span className="text-[#A855F7]">convertem</span>.
          </p>

          {/* CTAs - Ações principais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA Principal */}
            <Button
              asChild
              size="lg"
              className="
                bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]
                hover:from-[#00B8E0] hover:to-[#7C3AED]
                text-white font-semibold
                px-8 py-6
                text-lg
                rounded-full
                transition-all duration-300
                hover:scale-105
                glow-cyan
                w-full sm:w-auto
              "
            >
              <Link href="#contato" className="flex items-center gap-2">
                Solicitar orçamento
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>

            {/* CTA Secundário */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="
                bg-transparent
                border-2 border-white/20
                hover:border-white/40
                hover:bg-white/5
                text-white font-medium
                px-8 py-6
                text-lg
                rounded-full
                transition-all duration-300
                w-full sm:w-auto
              "
            >
              <Link href="#projetos" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Ver projetos
              </Link>
            </Button>
          </div>

          {/* Prova social rápida */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-white/40 mb-6">
              Empresas que já transformaram sua presença digital
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {/* Logos de clientes (usando placeholders estilizados) */}
              {["Cliente A", "Cliente B", "Cliente C", "Cliente D"].map((client, index) => (
                <div
                  key={client}
                  className="
                    text-white/30 font-semibold text-lg
                    hover:text-white/50 transition-colors
                    cursor-default
                  "
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Elemento visual decorativo - Mockup de interface */}
      <div 
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          w-full max-w-6xl
          h-32 lg:h-48
          bg-gradient-to-t from-[#0A0A1B] to-transparent
          z-20
        "
      />
    </section>
  )
}
