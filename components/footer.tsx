"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react"

// Links de navegação do rodapé
const footerLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0A0A12] border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Coluna 1: Logo e descrição */}
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-block mb-6">
              <Image
                src="/images/logo-vortex.jpeg"
                alt="Vortex Sites"
                width={160}
                height={50}
                className="h-12 w-auto object-contain"
              />
            </Link>
            
            <p className="text-white/50 leading-relaxed mb-6 max-w-md">
              Transformando ideias em experiências digitais que geram resultados. 
              Sites estratégicos para empresas que querem crescer.
            </p>

            {/* Redes sociais */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  bg-white/5
                  hover:bg-[#E1306C]/20
                  border border-white/10
                  hover:border-[#E1306C]/30
                  rounded-lg
                  flex items-center justify-center
                  transition-all duration-300
                "
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/60 hover:text-[#E1306C]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10
                  bg-white/5
                  hover:bg-[#0077B5]/20
                  border border-white/10
                  hover:border-[#0077B5]/30
                  rounded-lg
                  flex items-center justify-center
                  transition-all duration-300
                "
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white/60 hover:text-[#0077B5]" />
              </a>
              <a
                href="mailto:contato@vortexsites.com.br"
                className="
                  w-10 h-10
                  bg-white/5
                  hover:bg-[#00D4FF]/20
                  border border-white/10
                  hover:border-[#00D4FF]/30
                  rounded-lg
                  flex items-center justify-center
                  transition-all duration-300
                "
                aria-label="E-mail"
              >
                <Mail className="w-4 h-4 text-white/60 hover:text-[#00D4FF]" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-white/50 hover:text-white
                    text-sm
                    transition-colors duration-200
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00D4FF] mt-1 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  contato@vortexsites.com.br
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D4FF] mt-1 flex-shrink-0" />
                <span className="text-white/50 text-sm">
                  Atendimento remoto<br />
                  Todo o Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-white/40 text-sm text-center md:text-left">
              © {currentYear} Vortex Sites. Todos os direitos reservados.
            </p>

            {/* Créditos */}
            <p className="text-white/40 text-sm text-center md:text-right">
              Desenvolvido por{" "}
              <span className="text-[#00D4FF] font-medium">Pedro Faria</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
