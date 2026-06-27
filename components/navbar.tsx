"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Links de navegação do site
const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
]

export function Navbar() {
  // Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para detectar se o usuário rolou a página (muda o estilo da navbar)
  const [isScrolled, setIsScrolled] = useState(false)

  // Efeito para detectar scroll e aplicar blur na navbar
  useEffect(() => {
    const handleScroll = () => {
      // Se rolou mais de 50px, ativa o estado "scrolled"
      setIsScrolled(window.scrollY > 50)
    }

    // Adiciona o listener de scroll
    window.addEventListener("scroll", handleScroll)
    
    // Cleanup: remove o listener quando o componente desmonta
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? "bg-[#0A0A1B]/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_8px_30px_-12px_rgba(139,92,246,0.35)]" 
          : "bg-[#0A0A1B]/20 backdrop-blur-md border-b border-white/5 py-5"
        }
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo da Vortex - mix-blend-mode dissolve o fundo escuro do JPEG.
              Escala ampliada (origem à esquerda) compensa as margens do arquivo. */}
          <Link href="#inicio" className="flex-shrink-0 overflow-visible h-10 flex items-center">
            <Image
              src="/images/logo-vortex.jpeg"
              alt="Vortex Sites - Logo"
              width={150}
              height={50}
              className="h-10 w-auto object-contain scale-[1.7] origin-left"
              priority
              style={{
                mixBlendMode: "screen",
                WebkitMaskImage:
                  "radial-gradient(ellipse 68% 42% at 50% 50%, black 42%, transparent 82%)",
                maskImage:
                  "radial-gradient(ellipse 68% 42% at 50% 50%, black 42%, transparent 82%)",
              }}
            />
          </Link>

          {/* Menu Desktop - Oculto em telas pequenas */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-white/70 hover:text-[#A855F7]
                  text-sm font-medium
                  transition-colors duration-200
                  relative
                  after:absolute after:-bottom-1 after:left-0 
                  after:w-0 after:h-0.5 
                  after:bg-gradient-to-r after:from-[#00D4FF] after:to-[#A855F7]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Botão CTA Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="
                bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]
                hover:from-[#00B8E0] hover:to-[#7C3AED]
                text-white font-semibold
                px-6 py-2.5
                rounded-full
                transition-all duration-300
                hover:scale-105
                glow-cyan
              "
            >
              <Link href="#contato">Solicitar orçamento</Link>
            </Button>
          </div>

          {/* Botão do Menu Mobile - Hambúrguer */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#00D4FF] transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Menu Mobile - Aparece quando isMenuOpen é true */}
        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-[#1A1A35]/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    text-white/80 hover:text-white 
                    text-lg font-medium
                    py-2 px-4 rounded-lg
                    hover:bg-white/5
                    transition-all duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
              
              {/* CTA Mobile */}
              <Button
                asChild
                className="
                  mt-4
                  bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]
                  hover:from-[#00B8E0] hover:to-[#7C3AED]
                  text-white font-semibold
                  py-3
                  rounded-full
                  w-full
                "
              >
                <Link href="#contato" onClick={handleLinkClick}>
                  Solicitar orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
