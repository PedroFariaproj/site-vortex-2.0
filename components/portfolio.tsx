"use client"

import { TrendingUp, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// ─────────────────────────────────────────────────────────────────────────────
// INTERFACES DE SITES – renderizadas em JSX puro, sem imagens externas.
// Cada interface simula fielmente a estrutura de um site real:
// navbar, hero, seções, cards, botões, tipografia e hierarquia visual.
// ─────────────────────────────────────────────────────────────────────────────

// ── Studio Lê Rodrigues – Site real (cliente em produção) ────────────────────
// Exibe uma captura real do site publicado em vez de uma UI simulada.
function StudioLeRodriguesUI() {
  return (
    <div className="w-full h-full bg-[#0D0D1F] overflow-hidden select-none">
      <Image
        src="/images/portfolio/studio-le-rodrigues.png"
        alt="Prévia do site Studio Lê Rodrigues"
        width={1440}
        height={900}
        className="w-full h-auto object-cover object-top"
        priority
      />
    </div>
  )
}

// ── iPhone Premium – Loja virtual de iPhones (cliente em produção) ───────────
// Exibe uma captura real do site publicado em vez de uma UI simulada.
function LojaVirtualIphonesUI() {
  return (
    <div className="w-full h-full bg-black overflow-hidden select-none">
      <Image
        src="/images/portfolio/loja-virtual-iphones.png"
        alt="Prévia do site iPhone Premium - loja virtual de iPhones"
        width={1440}
        height={900}
        className="w-full h-auto object-cover object-top"
      />
    </div>
  )
}

// ── Elisangela Lima Fisioterapia – Landing page (cliente em produção) ────────
// Exibe uma captura real do site publicado em vez de uma UI simulada.
function ElisangelaFisioUI() {
  return (
    <div className="w-full h-full bg-white overflow-hidden select-none">
      <Image
        src="/images/portfolio/elisangela-fisio.png"
        alt="Prévia do site Elisangela Lima - fisioterapia domiciliar especializada"
        width={1440}
        height={900}
        className="w-full h-auto object-cover object-top"
      />
    </div>
  )
}

// ── Clínica Bem-Estar – Site médico com agendamento ───────────────────────────
function ClinicaUI() {
  return (
    <div className="w-full h-full bg-[#F0F7FF] font-sans overflow-hidden select-none">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-blue-50">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-blue-600" />
          <span className="text-[9px] font-bold text-blue-900">Clínica Bem-Estar</span>
        </div>
        <div className="bg-blue-600 text-[7px] font-semibold text-white px-2 py-1 rounded-lg">
          Agendar consulta
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-4 pt-4 pb-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-full opacity-10">
          <div className="w-full h-full bg-white rounded-bl-full" />
        </div>
        <div className="text-[7px] text-blue-200 mb-1 uppercase tracking-widest">Saúde & Bem-estar</div>
        <h1 className="text-[12px] font-extrabold text-white leading-tight mb-1.5">
          Cuidado completo<br />para você e sua família
        </h1>
        <p className="text-[7px] text-blue-200 mb-3 max-w-[160px]">
          Consultas presenciais e online com especialistas dedicados à sua saúde.
        </p>
        <div className="bg-white text-[7px] font-bold text-blue-700 px-3 py-1.5 rounded-lg inline-block">
          Consulta online disponível
        </div>
      </div>

      {/* Especialidades */}
      <div className="px-4 pt-3 mb-2">
        <div className="text-[8px] font-bold text-blue-900 mb-2">Nossas especialidades</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            ["Cardiologia","#EFF6FF","#3B82F6"],
            ["Nutrição","#F0FDF4","#22C55E"],
            ["Psicologia","#FDF4FF","#A855F7"],
            ["Pediatria","#FFF7ED","#F97316"],
            ["Ortopedia","#F0F9FF","#0EA5E9"],
            ["Dermatologia","#FFF1F2","#F43F5E"],
          ].map(([name, bg, color]) => (
            <div key={name} className="rounded-lg p-2 text-center" style={{ backgroundColor: bg }}>
              <div className="w-4 h-4 rounded-full mx-auto mb-1" style={{ backgroundColor: color + "33", border: `1px solid ${color}44` }} />
              <div className="text-[6px] font-semibold text-gray-700">{name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Agendamento rápido */}
      <div className="mx-4 bg-white rounded-xl p-3 border border-blue-100 shadow-sm">
        <div className="text-[8px] font-bold text-blue-900 mb-2">Agendar consulta</div>
        <div className="flex flex-col gap-1.5">
          <div className="bg-blue-50 rounded-lg px-2 py-1.5 text-[7px] text-blue-400 border border-blue-100">
            Selecione a especialidade
          </div>
          <div className="bg-blue-50 rounded-lg px-2 py-1.5 text-[7px] text-blue-400 border border-blue-100">
            Escolha a data
          </div>
          <div className="bg-blue-600 text-center text-white text-[7px] font-bold py-1.5 rounded-lg">
            Confirmar agendamento
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Academia PowerFit – Landing page com planos e CTA ────────────────────────
function PowerFitUI() {
  return (
    <div className="w-full h-full bg-[#0A0A0A] text-white font-sans overflow-hidden select-none">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-gradient-to-br from-orange-500 to-red-600" />
          <span className="text-[10px] font-black text-white uppercase tracking-wider">PowerFit</span>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-[7px] font-bold text-white px-2 py-1 rounded">
          Matricule-se
        </div>
      </div>

      {/* Hero */}
      <div className="relative bg-gradient-to-b from-[#1a0a00] to-[#0A0A0A] px-4 pt-4 pb-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, #f97316 8px, #f97316 9px)" }} />
        <div className="relative">
          <div className="text-[7px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-1.5">
            Resultados reais
          </div>
          <h1 className="text-[14px] font-black leading-none text-white uppercase mb-1.5">
            TRANSFORME<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              SEU CORPO
            </span>
          </h1>
          <p className="text-[7px] text-white/50 mb-3 max-w-[150px]">
            Treinos personalizados, nutrição e acompanhamento profissional.
          </p>
          <div className="flex gap-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-[7px] font-bold text-white px-3 py-1.5 rounded">
              Aula experimental grátis
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-1.5 px-4 mt-3 mb-3">
        {[["1.200+","Alunos"],["15","Trainers"],["24h","Funcionamento"]].map(([num, label]) => (
          <div key={label} className="text-center border-r border-white/10 last:border-0">
            <div className="text-[11px] font-black text-orange-500">{num}</div>
            <div className="text-[6px] text-white/40">{label}</div>
          </div>
        ))}
      </div>

      {/* Planos */}
      <div className="px-4 mb-1">
        <div className="text-[8px] font-bold text-white mb-2 uppercase tracking-wider">Planos</div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { name:"Basic", price:"R$ 89", color:"border-white/10", highlight: false },
            { name:"Pro", price:"R$ 149", color:"border-orange-500", highlight: true },
            { name:"Elite", price:"R$ 249", color:"border-white/10", highlight: false },
          ].map((plan) => (
            <div key={plan.name} className={`rounded-xl p-2.5 border ${plan.color} ${plan.highlight ? "bg-gradient-to-b from-orange-500/20 to-transparent" : "bg-white/[0.03]"}`}>
              {plan.highlight && (
                <div className="text-[6px] text-orange-400 font-bold uppercase mb-1">Popular</div>
              )}
              <div className="text-[7px] font-bold text-white">{plan.name}</div>
              <div className="text-[10px] font-black text-white">{plan.price}</div>
              <div className="text-[6px] text-white/30">/mês</div>
              <div className={`mt-2 text-[6px] text-center py-1 rounded font-semibold ${plan.highlight ? "bg-orange-500 text-white" : "bg-white/10 text-white/60"}`}>
                Escolher
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Restaurante Sabor & Arte – Site com menu e reservas ──────────────────────
function RestauranteUI() {
  return (
    <div className="w-full h-full bg-[#120D08] text-white font-sans overflow-hidden select-none">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-amber-900/20">
        <span className="text-[10px] font-bold text-amber-300 tracking-[0.12em] uppercase">Sabor & Arte</span>
        <div className="hidden sm:flex items-center gap-3">
          {["Menu","Reservas","Chef","Eventos"].map(i => (
            <span key={i} className="text-[7px] text-amber-100/50">{i}</span>
          ))}
        </div>
        <div className="border border-amber-500/50 text-[7px] text-amber-400 px-2 py-1 rounded">
          Reservar mesa
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-b from-amber-950/80 to-[#120D08] px-4 pt-4 pb-3">
          <div className="text-[7px] text-amber-500 uppercase tracking-[0.2em] mb-1">Gastronomia de alto nível</div>
          <h1 className="text-[13px] font-bold text-amber-100 leading-tight mb-1.5">
            Uma experiência<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              inesquecível
            </span>
          </h1>
          <p className="text-[7px] text-amber-100/40 mb-3">
            Cozinha autoral com ingredientes selecionados e serviço impecável.
          </p>
          <div className="flex gap-2">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-[7px] font-bold text-white px-3 py-1.5 rounded">
              Reservar mesa
            </div>
            <div className="border border-amber-800 text-[7px] text-amber-400 px-3 py-1.5 rounded">
              Ver cardápio
            </div>
          </div>
        </div>
      </div>

      {/* Destaque do menu */}
      <div className="px-4 mt-2 mb-2">
        <div className="text-[8px] font-bold text-amber-300 mb-2">Destaques do cardápio</div>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { name:"Risoto Trufado", price:"R$ 89", tag:"Chef Recomenda", color:"#4A3520" },
            { name:"Filé ao Vinho", price:"R$ 110", tag:"Mais pedido", color:"#3A2010" },
            { name:"Salmão Grelhado", price:"R$ 95", tag:"Nova entrada", color:"#1A2A3A" },
            { name:"Tiramisù Artesanal", price:"R$ 42", tag:"Sobremesa", color:"#2A1A0A" },
          ].map((item) => (
            <div key={item.name} className="rounded-lg overflow-hidden border border-amber-900/30">
              <div className="h-8 flex items-center justify-center" style={{ backgroundColor: item.color }}>
                <div className="text-[6px] text-amber-400/60 font-medium">{item.tag}</div>
              </div>
              <div className="p-1.5 bg-white/[0.03]">
                <div className="text-[7px] font-semibold text-amber-100">{item.name}</div>
                <div className="text-[7px] font-bold text-amber-400">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reserva rápida */}
      <div className="mx-4 bg-amber-950/40 border border-amber-900/30 rounded-xl p-2.5">
        <div className="text-[7px] font-bold text-amber-300 mb-1.5">Reserva rápida</div>
        <div className="grid grid-cols-3 gap-1">
          {["Data","Horário","Pessoas"].map(f => (
            <div key={f} className="bg-black/30 border border-amber-900/20 rounded px-1.5 py-1 text-[6px] text-amber-100/30">{f}</div>
          ))}
        </div>
        <div className="mt-1.5 bg-gradient-to-r from-amber-600 to-orange-600 text-[7px] font-bold text-white text-center py-1.5 rounded-lg">
          Confirmar reserva
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Dados dos projetos – cada UI component mapeia para um projeto real
// ────────────────────��────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    name: "Studio Lê Rodrigues",
    type: "Site Institucional",
    description: "Studio de beleza especializado em noivas e estética. Site elegante com agendamento que aumentou os contatos via WhatsApp e fortaleceu a presença digital da marca.",
    result: "Presença digital premium",
    accent: "#C9A24B",
    gradientBar: "from-[#C9A24B] to-[#E0C074]",
    url: "https://studiolerodrigues.vercel.app",
    UI: StudioLeRodriguesUI,
  },
  {
    id: 2,
    name: "iPhone Premium",
    type: "E-commerce",
    description: "Loja virtual de iPhones premium revisados, com catálogo de produtos, carrinho de compras e design moderno focado em conversão e confiança.",
    result: "Loja online completa",
    accent: "#0A84FF",
    gradientBar: "from-[#0A84FF] to-[#5AC8FA]",
    url: "https://lojavirtualiphones.vercel.app",
    UI: LojaVirtualIphonesUI,
  },
  {
  id: 3,
  name: "Elisangela Lima Fisioterapia",
  type: "Landing Page",
  description: "Landing page de fisioterapia domiciliar especializada, com design humanizado e foco em agendamentos via WhatsApp para pacientes em recuperação.",
  result: "Agendamentos via WhatsApp",
  accent: "#16A34A",
  gradientBar: "from-[#16A34A] to-[#4ADE80]",
  url: "https://www.elisangelalimafisio.com.br/",
  UI: ElisangelaFisioUI,
  },
  {
    id: 4,
    name: "Clínica Bem-Estar",
    type: "Site Institucional",
    description: "Clínica de saúde que dobrou os agendamentos online com uma experiência digital moderna.",
    result: "+100% agendamentos",
    accent: "#3B82F6",
    gradientBar: "from-[#3B82F6] to-[#06B6D4]",
    UI: ClinicaUI,
  },
  {
    id: 5,
    name: "Academia PowerFit",
    type: "Landing Page",
    description: "Landing page que converteu 35% dos visitantes em alunos matriculados em apenas 2 semanas.",
    result: "35% taxa de conversão",
    accent: "#F97316",
    gradientBar: "from-[#F97316] to-[#EF4444]",
    UI: PowerFitUI,
  },
  {
    id: 6,
    name: "Restaurante Sabor & Arte",
    type: "Site Institucional",
    description: "Restaurante que aumentou reservas em 80% com um site otimizado para mobile e reservas online.",
    result: "+80% em reservas",
    accent: "#F59E0B",
    gradientBar: "from-[#D97706] to-[#F59E0B]",
    UI: RestauranteUI,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Componente de card individual
// Hover: elevação do card, zoom sutil na UI, sombra intensa, glow da marca.
// Sem cursor pointer, sem clique, sem botões de link.
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const { UI } = project
  // Quando o projeto tem URL, o card vira um link clicável que abre o site real.
  const hasLink = "url" in project && Boolean(project.url)

  const cardInner = (
    <div
      className={`
        group
        bg-[#12122A]/60 backdrop-blur-sm
        border border-white/5
        rounded-2xl
        overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-white/10
        select-none
        ${hasLink ? "cursor-pointer" : "cursor-default"}
      `}
      style={{
        // Sombra padrão sutil, sombra intensa + glow de marca no hover
        // via CSS custom properties pois Tailwind não suporta glow dinâmico
        boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${project.accent}22`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.3)"
      }}
    >
      {/* ── Browser frame + UI mockup ─────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Barra do browser */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1C1C3A] border-b border-white/5 relative z-10">
          {/* Botões do browser (semáforo) */}
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500/70" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <div className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          {/* Barra de URL falsa */}
          <div className="flex-1 mx-2 bg-[#0D0D20]/60 rounded px-2 py-0.5 flex items-center gap-1">
            {/* Ícone de cadeado */}
            <svg className="w-2 h-2 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9 5V3.5a3 3 0 0 0-6 0V5H2v6h8V5H9zm-4-1.5a1 1 0 0 1 2 0V5H5V3.5z"/>
            </svg>
            <span className="text-[7px] text-white/30 truncate">
              {hasLink
                ? project.url!.replace(/^https?:\/\//, "")
                : `www.${project.name.toLowerCase().replace(/\s+/g, "")}.com.br`}
            </span>
          </div>
        </div>

        {/* Conteúdo da UI – com zoom sutil no hover */}
        <div
          className="
            h-56
            overflow-hidden
            transition-transform duration-300 ease-out
            group-hover:scale-[1.04]
            origin-top
          "
        >
          <UI />
        </div>

        {/* Overlay "Visitar site" – aparece no hover apenas em projetos com link */}
        {hasLink && (
          <div
            className="
              absolute inset-0 z-20
              flex items-center justify-center
              bg-black/40 backdrop-blur-[2px]
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              pointer-events-none
            "
          >
            <span
              className="
                flex items-center gap-2
                bg-white/95 text-[#0A0A1B]
                text-sm font-semibold
                px-4 py-2 rounded-full
                shadow-lg
                translate-y-2 group-hover:translate-y-0
                transition-transform duration-300
              "
            >
              Visitar site
              <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        )}

        {/* Barra de cor da marca na base do preview */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradientBar} opacity-60 group-hover:opacity-100 transition-opacity duration-300 z-20`} />
      </div>

      {/* ── Informações do card ───────────────────────────────────────────── */}
      <div className="p-5">
        {/* Badge do tipo de projeto */}
        <span
          className="inline-block text-[10px] font-medium px-2.5 py-0.5 rounded-full mb-3"
          style={{ color: project.accent, backgroundColor: project.accent + "18" }}
        >
          {project.type}
        </span>

        {/* Nome */}
        <h3 className="text-base font-bold text-white mb-2 transition-colors duration-300 flex items-center gap-1.5">
          {project.name}
          {hasLink && (
            <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" />
          )}
        </h3>

        {/* Descrição */}
        <p className="text-white/50 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Resultado em destaque */}
        <div className="flex items-center gap-2" style={{ color: project.accent }}>
          <TrendingUp className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-sm font-semibold">{project.result}</span>
        </div>
      </div>
    </div>
  )

  // Projeto com link: envolve em <a> que abre o site real em nova aba.
  if (hasLink) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visitar o site ${project.name} em uma nova aba`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF]/50 rounded-2xl"
      >
        {cardInner}
      </a>
    )
  }

  return cardInner
}

// ─────────────────────────────────────────────────────────────────────────────
// Seção de portfólio
// ─────────────────────────────────────────────────────────────────────────────
export function Portfolio() {
  return (
    <section id="projetos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Glow decorativo de fundo */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#8B5CF6]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#00D4FF] text-sm font-semibold uppercase tracking-wider mb-4">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Projetos que{" "}
            <span className="gradient-vortex-text">geram resultados</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Cada projeto é desenvolvido com foco em performance, conversão e
            experiência do usuário. Veja alguns dos resultados que entregamos.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              bg-transparent
              border-2 border-white/15
              hover:border-[#00D4FF]/40
              hover:bg-[#00D4FF]/5
              text-white font-medium
              px-8 py-6
              rounded-full
              transition-all duration-300
            "
          >
            <Link href="#contato">
              Quero um projeto assim
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
