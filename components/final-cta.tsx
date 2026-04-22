"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background com gradiente intenso */}
      <div 
        className="
          absolute inset-0
          bg-gradient-to-br from-[#00D4FF]/10 via-[#8B5CF6]/10 to-[#A855F7]/10
        "
      />
      
      {/* Efeitos de glow */}
      <div 
        className="
          absolute top-1/2 left-1/4 -translate-y-1/2
          w-96 h-96 
          bg-[#00D4FF]/20 
          rounded-full 
          blur-[120px]
        " 
      />
      <div 
        className="
          absolute top-1/2 right-1/4 -translate-y-1/2
          w-96 h-96 
          bg-[#8B5CF6]/20 
          rounded-full 
          blur-[120px]
        " 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div 
          className="
            max-w-4xl mx-auto
            text-center
            p-8 lg:p-16
            bg-[#1A1A35]/50 backdrop-blur-xl
            border border-white/10
            rounded-3xl
          "
        >
          {/* Badge de urgência */}
          <div 
            className="
              inline-flex items-center gap-2
              bg-[#00D4FF]/10
              border border-[#00D4FF]/20
              rounded-full
              px-4 py-2 mb-8
            "
          >
            <Clock className="w-4 h-4 text-[#00D4FF]" />
            <span className="text-sm text-[#00D4FF] font-medium">
              Vagas limitadas por mês
            </span>
          </div>

          {/* Headline com urgência */}
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
              leading-tight
            "
          >
            Seu concorrente já tem um site{" "}
            <span className="gradient-vortex-text">que converte</span>.
            <br />
            E você?
          </h2>

          {/* Subheadline persuasiva */}
          <p 
            className="
              text-lg lg:text-xl
              text-white/60
              max-w-2xl mx-auto
              mb-10
              leading-relaxed
            "
          >
            Cada dia sem um site profissional é um dia de clientes perdidos 
            para a concorrência. Vamos mudar isso{" "}
            <span className="text-white font-medium">agora</span>?
          </p>

          {/* CTA Principal */}
          <Button
            asChild
            size="lg"
            className="
              bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]
              hover:from-[#00B8E0] hover:to-[#7C3AED]
              text-white font-semibold
              px-10 py-7
              text-lg
              rounded-full
              transition-all duration-300
              hover:scale-105
              glow-cyan
            "
          >
            <Link href="#contato" className="flex items-center gap-3">
              Quero um site profissional
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>

          {/* Garantia / Reassurance */}
          <p className="mt-8 text-sm text-white/40">
            Orçamento gratuito e sem compromisso. Resposta em até 24 horas.
          </p>
        </div>
      </div>
    </section>
  )
}
