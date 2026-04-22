"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Phone,
  CheckCircle2,
  Instagram,
  Linkedin
} from "lucide-react"

export function Contact() {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  
  // Estado de envio
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handler para mudanças nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Handler para envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio (substitua por integração real)
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset após 5 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 5000)
  }

  return (
    <section
      id="contato"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decorativo */}
      <div 
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[600px] h-[600px] 
          bg-[#00D4FF]/5 
          rounded-full 
          blur-[150px]
        " 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header da seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span 
            className="
              inline-block
              text-[#00D4FF] text-sm font-semibold
              uppercase tracking-wider
              mb-4
            "
          >
            Contato
          </span>
          
          <h2 
            className="
              text-3xl sm:text-4xl lg:text-5xl
              font-bold text-white
              mb-6
            "
          >
            Vamos conversar sobre{" "}
            <span className="gradient-vortex-text">seu projeto?</span>
          </h2>
          
          <p className="text-lg text-white/60 leading-relaxed">
            Preencha o formulário abaixo e receba um orçamento personalizado 
            em até 24 horas. Sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulário de contato */}
          <Card
            className="
              bg-[#1A1A35]/50 backdrop-blur-sm
              border border-white/5
              rounded-2xl
            "
          >
            <CardContent className="p-8">
              {isSubmitted ? (
                // Mensagem de sucesso
                <div className="text-center py-12">
                  <div 
                    className="
                      w-16 h-16 mx-auto mb-6
                      bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6]
                      rounded-full
                      flex items-center justify-center
                    "
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="text-white/60">
                    Obrigado pelo contato. Retornarei em breve!
                  </p>
                </div>
              ) : (
                // Formulário
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Seu nome
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Como posso te chamar?"
                      className="
                        bg-[#0A0A1B] 
                        border-white/10 
                        text-white 
                        placeholder:text-white/30
                        focus:border-[#00D4FF]
                        rounded-xl
                        py-6
                      "
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Seu e-mail
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="
                        bg-[#0A0A1B] 
                        border-white/10 
                        text-white 
                        placeholder:text-white/30
                        focus:border-[#00D4FF]
                        rounded-xl
                        py-6
                      "
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="phone"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      WhatsApp
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="
                        bg-[#0A0A1B] 
                        border-white/10 
                        text-white 
                        placeholder:text-white/30
                        focus:border-[#00D4FF]
                        rounded-xl
                        py-6
                      "
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Conte sobre seu projeto
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva brevemente o que você precisa..."
                      rows={4}
                      className="
                        w-full
                        bg-[#0A0A1B] 
                        border border-white/10 
                        text-white 
                        placeholder:text-white/30
                        focus:border-[#00D4FF]
                        focus:outline-none
                        focus:ring-1
                        focus:ring-[#00D4FF]
                        rounded-xl
                        px-4 py-3
                        resize-none
                        transition-colors
                      "
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      w-full
                      bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6]
                      hover:from-[#00B8E0] hover:to-[#7C3AED]
                      text-white font-semibold
                      py-6
                      rounded-full
                      transition-all duration-300
                      hover:scale-[1.02]
                      disabled:opacity-50
                      disabled:cursor-not-allowed
                    "
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Solicitar orçamento
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Informações de contato */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Ou entre em contato diretamente
            </h3>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-4
                  p-4
                  bg-[#1A1A35]/30
                  border border-white/5
                  hover:border-[#00D4FF]/30
                  rounded-xl
                  transition-all duration-300
                  group
                "
              >
                <div 
                  className="
                    w-12 h-12
                    bg-gradient-to-br from-[#25D366] to-[#128C7E]
                    rounded-xl
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-sm text-white/50">Resposta rápida</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@vortexsites.com.br"
                className="
                  flex items-center gap-4
                  p-4
                  bg-[#1A1A35]/30
                  border border-white/5
                  hover:border-[#00D4FF]/30
                  rounded-xl
                  transition-all duration-300
                  group
                "
              >
                <div 
                  className="
                    w-12 h-12
                    bg-gradient-to-br from-[#00D4FF] to-[#0066FF]
                    rounded-xl
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">E-mail</p>
                  <p className="text-sm text-white/50">contato@vortexsites.com.br</p>
                </div>
              </a>

              {/* Telefone */}
              <a
                href="tel:+5500000000000"
                className="
                  flex items-center gap-4
                  p-4
                  bg-[#1A1A35]/30
                  border border-white/5
                  hover:border-[#00D4FF]/30
                  rounded-xl
                  transition-all duration-300
                  group
                "
              >
                <div 
                  className="
                    w-12 h-12
                    bg-gradient-to-br from-[#8B5CF6] to-[#A855F7]
                    rounded-xl
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Telefone</p>
                  <p className="text-sm text-white/50">(00) 00000-0000</p>
                </div>
              </a>
            </div>

            {/* Redes sociais */}
            <div className="mt-10">
              <p className="text-sm text-white/50 mb-4">Siga nas redes:</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    bg-[#1A1A35]/50
                    border border-white/10
                    hover:border-[#E1306C]/50
                    hover:bg-[#E1306C]/10
                    rounded-xl
                    flex items-center justify-center
                    transition-all duration-300
                  "
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white/70 hover:text-[#E1306C]" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    bg-[#1A1A35]/50
                    border border-white/10
                    hover:border-[#0077B5]/50
                    hover:bg-[#0077B5]/10
                    rounded-xl
                    flex items-center justify-center
                    transition-all duration-300
                  "
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white/70 hover:text-[#0077B5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
