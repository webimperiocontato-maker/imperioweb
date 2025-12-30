import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { MapPin, Mail, Phone, Send, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const whatsappMessage = encodeURIComponent(
  "Olá! Tenho um negócio local e gostaria de saber como funciona a criação de um site para gerar mais contactos."
);

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const whatsappFormMessage = `Olá! O meu nome é ${formData.name}.%0A%0AServiço de interesse: ${formData.service || "Não especificado"}%0A%0AMensagem: ${formData.message}%0A%0AContacto: ${formData.email} | ${formData.phone}`;
    
    window.open(`https://wa.me/351910000000?text=${whatsappFormMessage}`, "_blank");
    
    toast({
      title: "Mensagem Preparada!",
      description: "Será redirecionado para o WhatsApp para enviar a sua mensagem.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Receber Proposta Gratuita | Império Web Lisboa</title>
        <meta
          name="description"
          content="Receba uma proposta gratuita para criação de sites em Lisboa e Margem Sul. Resposta em menos de 24 horas. Fale connosco no WhatsApp."
        />
        <meta
          name="keywords"
          content="contacto império web, orçamento sites portugal, agência digital lisboa contacto, pedir orçamento site margem sul"
        />
        <link rel="canonical" href="https://imperioweb.pt/contacto" />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-40" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Fale Connosco
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Receba uma{" "}
                <span className="text-gradient">Proposta Gratuita</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Preencha o formulário ou fale diretamente no WhatsApp. Respondemos em menos de 24 horas.
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  Falar Agora no WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold font-display mb-4">
                    Vamos Conversar?
                  </h2>
                  <p className="text-muted-foreground">
                    Estamos prontos para ajudar o seu negócio local a ter mais presença online e gerar mais contactos.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                      <p className="text-muted-foreground text-sm">
                        Lisboa, Portugal<br />
                        Servindo Lisboa e Margem Sul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a 
                        href="mailto:info@imperioweb.pt" 
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        info@imperioweb.pt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/351910000000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        +351 910 000 000
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <div className="p-6 rounded-2xl bg-gradient-card border border-primary/30 shadow-glow">
                  <h3 className="font-semibold font-display mb-2">Resposta Mais Rápida?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Clique abaixo e fale diretamente com um especialista.
                  </p>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a
                      href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero um Site que Venda
                      <ArrowRight size={18} />
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
              >
                <form 
                  onSubmit={handleSubmit}
                  className="p-8 rounded-3xl bg-gradient-card border border-border"
                >
                  <h2 className="text-2xl font-bold font-display mb-2">
                    Receber Proposta para o Meu Negócio
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Preencha os campos abaixo e receba uma proposta personalizada.
                  </p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground"
                          placeholder="O seu nome"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground"
                          placeholder="seu@email.pt"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground"
                          placeholder="+351 900 000 000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          O Que Precisa?
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground"
                        >
                          <option value="">Selecione uma opção</option>
                          <option value="Site Profissional (200€-300€)">Site Profissional (200€-300€)</option>
                          <option value="Landing Page">Landing Page</option>
                          <option value="Social Media">Social Media</option>
                          <option value="SEO Local">SEO Local</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Conte-nos sobre o seu negócio *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder="Qual é o seu negócio? O que precisa? Quais são os seus objetivos?"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      Enviar e Receber Proposta
                      <Send size={20} />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Ao submeter, será redirecionado para o WhatsApp para finalizar. Resposta em menos de 24h.
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contacto;
