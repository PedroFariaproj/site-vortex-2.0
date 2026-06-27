"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

/**
 * Notebook 3D futurista da hero section.
 *
 * Recursos:
 * - Notebook em CSS 3D (perspective + rotateX/Y) com tela e base.
 * - Tela mostrando uma prévia de site da VÓRTEX (menu, headline, métricas, código).
 * - Glow roxo saindo da tela.
 * - Círculo de energia neon pulsando embaixo.
 * - Partículas roxas flutuando ao redor.
 * - Linhas luminosas passando atrás.
 * - Flutuação contínua + parallax com o mouse (desktop).
 * - Hover aumenta o brilho roxo.
 */
export function HeroNotebook() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Posição do mouse (normalizada -0.5 a 0.5) para o efeito de parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Suaviza o movimento com spring
  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 }
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)

  // Handler do parallax: calcula a posição relativa do mouse no container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
      aria-hidden="true"
    >
      {/* ── Linhas luminosas passando atrás ──────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px w-[140%] -left-[20%]"
            style={{
              top: `${30 + i * 20}%`,
              background:
                "linear-gradient(90deg, transparent, rgba(168,85,247,0.6), rgba(0,212,255,0.4), transparent)",
            }}
            animate={{ x: ["-10%", "10%", "-10%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Partículas roxas flutuando ───────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLES.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.9, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Conjunto do notebook (flutuação contínua) ────────────────────── */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-[520px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Notebook com parallax e hover de brilho */}
        <motion.div
          className="group relative"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover="hover"
        >
          {/* Glow roxo saindo da tela */}
          <motion.div
            className="absolute -inset-8 rounded-[40px] blur-[60px] -z-10"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.55), rgba(168,85,247,0.25) 45%, transparent 70%)",
            }}
            variants={{ hover: { opacity: 1, scale: 1.08 } }}
            animate={{ opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* ── Tela do notebook ───────────────────────────────────────── */}
          <div
            className="
              relative rounded-t-2xl rounded-b-md
              border border-white/10
              bg-[#0D0D1F]
              shadow-[0_30px_80px_-20px_rgba(139,92,246,0.5)]
              overflow-hidden
            "
            style={{
              background:
                "linear-gradient(160deg, #15152e 0%, #0d0d1f 60%, #0a0a18 100%)",
            }}
          >
            {/* Moldura interna / borda neon */}
            <div className="absolute inset-0 rounded-t-2xl ring-1 ring-inset ring-[#8B5CF6]/20 pointer-events-none" />

            {/* Webcam */}
            <div className="flex justify-center pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Conteúdo da tela = prévia de site VÓRTEX */}
            <div className="px-4 pb-4 pt-2">
              {/* Menu superior */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6]" />
                  <span className="text-[9px] font-bold tracking-wide text-white">VÓRTEX</span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  {["Início", "Projetos", "Contato"].map((m) => (
                    <span key={m} className="text-[7px] text-white/40">
                      {m}
                    </span>
                  ))}
                </div>
                <span className="text-[6px] font-semibold text-black bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] px-2 py-1 rounded-full">
                  Orçamento
                </span>
              </div>

              {/* Headline + área de código */}
              <div className="grid grid-cols-5 gap-3">
                {/* Texto principal */}
                <div className="col-span-3">
                  <div className="inline-block bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full px-2 py-0.5 mb-2">
                    <span className="text-[6px] text-[#A855F7]">Agência premium</span>
                  </div>
                  <h3 className="text-[13px] leading-tight font-extrabold text-white mb-1">
                    Sites que geram{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#8B5CF6] to-[#A855F7]">
                      resultado.
                    </span>
                  </h3>
                  <p className="text-[7px] text-white/40 leading-relaxed mb-3">
                    Estratégia, design e tecnologia para transformar visitantes em clientes.
                  </p>

                  {/* Cards de métricas */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {[
                      { v: "+200%", l: "Leads" },
                      { v: "98%", l: "Satisfação" },
                      { v: "+150", l: "Projetos" },
                    ].map((m) => (
                      <div
                        key={m.l}
                        className="rounded-md bg-white/[0.04] border border-white/5 px-1.5 py-1.5 text-center"
                      >
                        <div className="text-[9px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#A855F7]">
                          {m.v}
                        </div>
                        <div className="text-[5px] text-white/40 mt-0.5">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Área lateral de código / dev */}
                <div className="col-span-2 rounded-md bg-[#080814] border border-white/5 p-2 overflow-hidden">
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="w-1 h-1 rounded-full bg-red-400/60" />
                    <span className="w-1 h-1 rounded-full bg-yellow-400/60" />
                    <span className="w-1 h-1 rounded-full bg-green-400/60" />
                  </div>
                  {CODE_LINES.map((line, idx) => (
                    <div key={idx} className="flex items-center gap-1 mb-1">
                      <span className="text-[5px] text-white/20 w-2 text-right">{idx + 1}</span>
                      <span
                        className="h-1 rounded-full"
                        style={{ width: line.width, background: line.color }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Base / dobradiça do notebook ───────────────────────────── */}
          <div className="relative">
            {/* Dobradiça */}
            <div className="h-1.5 bg-gradient-to-b from-[#1a1a30] to-[#0a0a14] rounded-b-sm" />
            {/* Base inferior com leve perspectiva */}
            <div
              className="
                mx-auto h-2.5 w-[108%] -ml-[4%]
                rounded-b-2xl
                bg-gradient-to-b from-[#16162c] to-[#0c0c18]
                border-x border-b border-white/5
                shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)]
              "
            >
              {/* Recorte do touchpad */}
              <div className="mx-auto mt-0.5 h-1 w-10 rounded-full bg-white/5" />
            </div>
          </div>
        </motion.div>

        {/* ── Círculo de energia neon embaixo (pulsa) ──────────────────── */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -bottom-10 -z-10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div
            className="w-72 h-20 rounded-[100%] blur-2xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(168,85,247,0.7), rgba(0,212,255,0.25) 50%, transparent 75%)",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Partículas pré-definidas (posições fixas para evitar mismatch de hidratação)
const PARTICLES = [
  { left: "8%", top: "20%", size: 5, duration: 5, delay: 0, color: "rgba(168,85,247,0.9)" },
  { left: "85%", top: "15%", size: 4, duration: 6, delay: 0.5, color: "rgba(0,212,255,0.8)" },
  { left: "92%", top: "55%", size: 6, duration: 7, delay: 1, color: "rgba(168,85,247,0.8)" },
  { left: "12%", top: "70%", size: 4, duration: 5.5, delay: 0.8, color: "rgba(139,92,246,0.9)" },
  { left: "50%", top: "8%", size: 3, duration: 6.5, delay: 1.2, color: "rgba(0,212,255,0.7)" },
  { left: "70%", top: "85%", size: 5, duration: 5, delay: 0.3, color: "rgba(168,85,247,0.85)" },
  { left: "25%", top: "90%", size: 3, duration: 7, delay: 1.5, color: "rgba(139,92,246,0.8)" },
  { left: "95%", top: "35%", size: 4, duration: 6, delay: 0.6, color: "rgba(0,212,255,0.75)" },
]

// Linhas de "código" da área lateral
const CODE_LINES = [
  { width: "70%", color: "rgba(0,212,255,0.5)" },
  { width: "45%", color: "rgba(168,85,247,0.5)" },
  { width: "60%", color: "rgba(255,255,255,0.18)" },
  { width: "35%", color: "rgba(139,92,246,0.5)" },
  { width: "55%", color: "rgba(0,212,255,0.4)" },
  { width: "40%", color: "rgba(255,255,255,0.15)" },
]
