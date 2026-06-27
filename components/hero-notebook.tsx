"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

/**
 * Notebook 3D futurista da hero section.
 *
 * Usa a imagem fotorrealista do MacBook com a prévia do site VÓRTEX.
 * Recursos:
 * - Glow roxo difuso atrás da imagem.
 * - Partículas roxas/ciano flutuando ao redor.
 * - Linhas luminosas passando atrás.
 * - Flutuação contínua + parallax sutil com o mouse (desktop).
 * - Hover aumenta o brilho roxo.
 */
export function HeroNotebook() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Posição do mouse (normalizada -0.5 a 0.5) para o efeito de parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Suaviza o movimento com spring
  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 }
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig)

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
        className="relative z-10 w-full max-w-[620px] lg:max-w-[720px]"
        style={{ transformStyle: "preserve-3d", isolation: "isolate" }}
      >
        {/* Notebook com parallax e hover de brilho */}
        <motion.div
          className="group relative"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          whileHover="hover"
        >
          {/* Glow roxo difuso atrás da imagem (halo principal) */}
          <motion.div
            className="absolute inset-[8%] rounded-full blur-[60px] -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(168,85,247,0.55), rgba(139,92,246,0.25) 50%, transparent 68%)",
            }}
            variants={{ hover: { opacity: 1, scale: 1.1 } }}
            animate={{ opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Luz neon roxa/magenta embaixo do notebook */}
          <motion.div
            className="absolute left-[12%] right-[12%] bottom-[4%] h-[110px] blur-[34px] -z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(217,70,239,0.6), rgba(168,85,247,0.3) 55%, transparent 72%)",
            }}
            animate={{ opacity: [0.5, 0.9, 0.5], scaleX: [0.92, 1.05, 0.92] }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/*
            Imagem real do notebook VÓRTEX integrada ao fundo.
            - mix-blend-mode: screen apaga o fundo escuro da imagem contra o
              fundo escuro da hero, eliminando o efeito de "print colado".
            - máscara radial suaviza/apaga as bordas retangulares.
            - drop-shadow roxo adiciona profundidade e brilho premium.
          */}
          <Image
            src="/images/hero-notebook.png"
            alt="Notebook exibindo um site criado pela Vórtex"
            width={1100}
            height={970}
            priority
            className="w-full h-auto object-contain"
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 35px rgba(168,85,247,0.55))",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 62% at 50% 50%, black 42%, rgba(0,0,0,0.7) 62%, transparent 84%)",
              maskImage:
                "radial-gradient(ellipse 70% 62% at 50% 50%, black 42%, rgba(0,0,0,0.7) 62%, transparent 84%)",
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
