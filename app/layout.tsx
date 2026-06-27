import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// Fonte principal - Inter para um visual moderno e profissional
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Metadados SEO otimizados para conversão
export const metadata: Metadata = {
  title: 'Vortex Sites | Criação de Sites Profissionais que Geram Resultados',
  description: 'Transforme sua presença digital com sites estratégicos que geram mais clientes, vendas e autoridade. Especialista em sites institucionais, landing pages e e-commerce.',
  keywords: ['criação de sites', 'sites profissionais', 'landing page', 'e-commerce', 'desenvolvimento web', 'Pedro Faria', 'Vortex Sites'],
  authors: [{ name: 'Pedro Faria' }],
  creator: 'Pedro Faria',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vortexsites.com.br',
    siteName: 'Vortex Sites',
    title: 'Vortex Sites | Sites Profissionais que Geram Resultados',
    description: 'Transforme sua presença digital com sites estratégicos que geram mais clientes, vendas e autoridade.',
    images: [
      {
        url: '/images/logo-vortex.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vortex Sites - Criação de Sites Profissionais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vortex Sites | Sites Profissionais que Geram Resultados',
    description: 'Transforme sua presença digital com sites estratégicos.',
    images: ['/images/logo-vortex.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// Configurações de viewport para mobile-first
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A1B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-[#0A0A1B]`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
