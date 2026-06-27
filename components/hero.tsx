"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { HeroNotebook } from "@/components/hero-notebook"

// Logos de clientes reais exibidos na faixa de prova social
const CLIENTS = [
  { name: "Studio Lê Rodrigues", tagline: "Fisioterapia" },
  { name: "Pausa Fit", tagline: "Marmitas Saudáveis" },
  { name: "Equilibrium", tagline: "Academia" },
  { name: "Bruna Teixeira", tagline: "Odontologia" },
  { name: "Instituto Axis", tagline: "" },
]

// Variantes de animação para entrada suave do conteúdo textual (esquerda -> direita)
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative min-h-screen 
        flex items-center
        pt-28 pb-16 lg:pt-32 lg:pb-24
        overflow-hidden
      "
    >
      {/* Background com grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Gradiente premium de fundo: azul profundo, roxo e preto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(ellipse 70% 50% at 20% 70%, rgba(0,212,255,0.12), transparent 55%)",
        }}
      />

      {/* Efeitos de glow no background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00D4FF]/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[28rem] h-[28rem] bg-[#8B5CF6]/20 rounded-full blur-[130px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Coluna esquerda: conteúdo textual ──────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge de destaque */}
            <motion.div
              variants={itemVariants}
              className="
                inline-flex items-center gap-2
                bg-white/5 backdrop-blur-sm
                border border-white/10
                rounded-full
                px-4 py-2 mb-6
              "
            >
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
              <span className="text-sm text-white/70">
                Especialista em Sites que Convertem
              </span>
            </motion.div>

            {/* Headline principal */}
            <motion.h1
              variants={itemVariants}
              className="
                text-4xl sm:text-5xl lg:text-5xl xl:text-6xl
                font-bold leading-tight
                mb-6 text-balance
              "
            >
              <span className="text-white">Seu site não deveria só existir.</span>
              <br />
              <span className="gradient-vortex-text">
                Ele deveria gerar clientes.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="
                text-lg sm:text-xl
                text-white/60
                max-w-xl mx-auto lg:mx-0
                mb-8
                leading-relaxed text-pretty
              "
            >
              Transformo sua presença digital em uma{" "}
              <span className="text-white font-medium">máquina de vendas</span>.
              Sites estratégicos que{" "}
              <span className="text-[#00D4FF]">atraem</span>,{" "}
              <span className="text-[#8B5CF6]">engajam</span> e{" "}
              <span className="text-[#A855F7]">convertem</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* CTA Principal com gradiente roxo/azul/magenta e glow no hover */}
              <Button
                asChild
                size="lg"
                className="
                  relative overflow-hidden
                  bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#A855F7]
                  bg-[length:200%_100%] bg-left hover:bg-right
                  text-white font-semibold
                  px-8 py-6 text-lg
                  rounded-full
                  transition-[background-position,transform,box-shadow] duration-500
                  hover:scale-105
                  hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.7)]
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
                  hover:border-white/40 hover:bg-white/5
                  text-white font-medium
                  px-8 py-6 text-lg
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
            </motion.div>
          </motion.div>

          {/* ── Coluna direita: notebook 3D futurista ──────────────────── */}
          <div className="relative">
            <HeroNotebook />
          </div>
        </div>

        {/* ── Prova social: logos de clientes ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 lg:mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-white/40 mb-8 text-center">
            Empresas que já transformaram sua presença digital
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 sm:gap-x-8 lg:gap-x-10">
            {CLIENTS.map((client, index) => (
              <div key={client.name} className="flex items-center gap-x-6 sm:gap-x-8 lg:gap-x-10">
                {/* Logo textual estilizado */}
                <div className="group flex flex-col items-center text-center cursor-default">
                  <span
                    className="
                      font-serif tracking-wide leading-none
                      text-base sm:text-lg
                      text-white/40 group-hover:text-white/70
                      transition-colors duration-300
                    "
                  >
                    {client.name}
                  </span>
                  {client.tagline && (
                    <span className="mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/25 group-hover:text-white/40 transition-colors duration-300">
                      {client.tagline}
                    </span>
                  )}
                </div>

                {/* Divisor vertical (exceto após o último) */}
                {index < CLIENTS.length - 1 && (
                  <span className="hidden sm:block h-8 w-px bg-white/10" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
