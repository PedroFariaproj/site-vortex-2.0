/**
 * Página principal do site Vortex Sites
 * 
 * Estrutura da página:
 * 1. Navbar - Navegação fixa com efeito blur ao rolar
 * 2. Hero - Seção principal com headline persuasiva e CTAs
 * 3. Portfolio - Grid de projetos com resultados
 * 4. Services - Cards com serviços oferecidos
 * 5. Differentials - Por que escolher a Vortex
 * 6. Process - Timeline do processo de trabalho
 * 7. Testimonials - Depoimentos de clientes
 * 8. Final CTA - Chamada para ação com urgência
 * 9. Contact - Formulário e informações de contato
 * 10. Footer - Rodapé com links e informações
 */

import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Portfolio } from "@/components/portfolio"
import { Services } from "@/components/services"
import { Differentials } from "@/components/differentials"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      {/* 
        Navbar fixa no topo
        - Muda de transparente para blur quando o usuário rola
        - Menu hambúrguer no mobile
        - CTA destacado "Solicitar orçamento"
      */}
      <Navbar />

      {/* 
        Conteúdo principal envolvido em <main> para semântica HTML
        Cada seção tem um id para navegação por âncora
      */}
      <main>
        {/* 
          Hero Section
          - Headline principal: "Seu site não deveria só existir. Ele deveria gerar clientes."
          - Dois CTAs: primário e secundário
          - Efeitos de glow no background
        */}
        <Hero />

        {/* 
          Seção de Portfólio
          - Grid de 6 projetos com resultados
          - Cada card mostra tipo, nome, descrição e resultado alcançado
          - Hover com efeito de elevação
        */}
        <Portfolio />

        {/* 
          Seção de Serviços
          - 3 cards: Sites Institucionais, Landing Pages, E-commerce
          - Cada serviço com ícone, descrição e lista de benefícios
          - Gradientes e efeitos de hover
        */}
        <Services />

        {/* 
          Seção de Diferenciais
          - 6 diferenciais em grid
          - Ícones e descrições focadas em benefícios
          - Design estratégico, performance, responsividade, SEO, atendimento, suporte
        */}
        <Differentials />

        {/* 
          Seção de Processo
          - Timeline com 4 etapas: Diagnóstico, Planejamento, Desenvolvimento, Entrega
          - Layout alternado em desktop
          - Cada etapa com duração estimada
        */}
        <Process />

        {/* 
          Seção de Depoimentos
          - 4 depoimentos de clientes
          - Cards com citação, nome, cargo e avaliação em estrelas
          - Prova social para aumentar confiança
        */}
        <Testimonials />

        {/* 
          CTA Final
          - Texto com urgência: "Seu concorrente já tem um site que converte. E você?"
          - Botão grande e destacado
          - Background com gradiente intenso
        */}
        <FinalCTA />

        {/* 
          Seção de Contato
          - Formulário com campos: nome, email, WhatsApp, mensagem
          - Links diretos: WhatsApp, email, telefone
          - Ícones de redes sociais
        */}
        <Contact />
      </main>

      {/* 
        Rodapé
        - Logo, descrição, redes sociais
        - Links rápidos
        - Informações de contato
        - Copyright e créditos
      */}
      <Footer />

      {/*
        Botão flutuante de WhatsApp
        - Fixo no canto inferior direito em todas as telas
        - Abre conversa com mensagem pré-preenchida
      */}
      <WhatsAppFloat />
    </>
  )
}
