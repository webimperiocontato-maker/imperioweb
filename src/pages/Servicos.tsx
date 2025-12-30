import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Globe, Rocket, Share2, TrendingUp, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const whatsappMessage = encodeURIComponent(
  "Olá! Tenho um negócio local e gostaria de saber como funciona a criação de um site para gerar mais contactos."
);

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    subtitle: "Sites institucionais e comerciais",
    description: "Criamos sites profissionais a partir de 200€, focados em gerar contactos via WhatsApp para negócios locais.",
    features: [
      "Design responsivo para telemóvel e desktop",
      "Botão de contacto direto no WhatsApp",
      "Otimização SEO para aparecer no Google",
      "Integração com redes sociais",
      "Painel de gestão simples",
      "Suporte e acompanhamento incluídos",
    ],
    price: "200€ - 300€",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    subtitle: "Foco em vendas e geração de leads",
    description: "Páginas estratégicas para campanhas de anúncios que convertem visitantes em contactos.",
    features: [
      "Design focado em conversão",
      "Otimização para anúncios",
      "Carregamento ultra-rápido",
      "CTAs estratégicos e persuasivos",
      "Integração com WhatsApp",
      "Ideal para Facebook e Google Ads",
    ],
    price: "Projetos Premium",
    highlight: false,
  },
  {
    icon: Share2,
    title: "Gestão de Social Media",
    subtitle: "Estratégia de redes sociais",
    description: "Gestão profissional das suas redes sociais para aumentar a visibilidade do seu negócio local.",
    features: [
      "Criação de conteúdo visual",
      "Calendário editorial mensal",
      "Gestão de Facebook e Instagram",
      "Relatórios de resultados",
      "Interação com seguidores",
      "Estratégia de hashtags locais",
    ],
    price: "Planos Mensais",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "SEO Local",
    subtitle: "Apareça no Google na sua região",
    description: "Posicione o seu negócio nos primeiros resultados quando clientes procuram serviços na sua área.",
    features: [
      "Otimização para Google My Business",
      "SEO para pesquisas locais",
      "Palavras-chave da sua região",
      "Otimização do site existente",
      "Relatórios de posicionamento",
      "Estratégia de longo prazo",
    ],
    price: "Consultoria",
    highlight: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | Criação de Sites desde 200€ | Império Web Lisboa</title>
        <meta
          name="description"
          content="Criação de sites profissionais desde 200€ para negócios locais em Lisboa e Margem Sul. Landing pages, social media e SEO local. Contacte-nos."
        />
        <meta
          name="keywords"
          content="criação de sites margem sul, sites baratos portugal, landing pages lisboa, social media portugal, seo local lisboa"
        />
        <link rel="canonical" href="https://imperioweb.pt/servicos" />
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
                Serviços para Negócios Locais
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Sites Profissionais{" "}
                <span className="text-gradient">Desde 200€</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Criamos sites profissionais focados em gerar contactos via WhatsApp para negócios locais em Lisboa e Margem Sul.
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  Falar com um Especialista Agora
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {services.map((service, index) => (
                <motion.article
                  key={index}
                  variants={item}
                  className={`p-8 md:p-10 rounded-3xl border transition-all duration-300 ${
                    service.highlight
                      ? "bg-gradient-card border-primary/30 shadow-glow"
                      : "bg-gradient-card border-border hover:border-primary/20"
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <service.icon size={28} className="text-primary" />
                        </div>
                        {service.highlight && (
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            Mais Popular
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-display mb-2 text-foreground">
                        {service.title}
                      </h2>
                      <p className="text-primary font-medium mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold font-display text-gradient">
                          {service.price}
                        </span>
                      </div>
                    </div>

                    {/* Right - Features */}
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-muted-foreground mb-4">
                        O que está incluído:
                      </p>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <Check size={12} className="text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      <div className="pt-6">
                        <Button variant="hero" size="lg" asChild>
                          <a
                            href={`https://wa.me/351910000000?text=${encodeURIComponent(`Olá! Tenho interesse no serviço: ${service.title}. Gostaria de saber mais informações.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Quero Este Serviço
                            <ArrowRight size={18} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Pronto para Ter <span className="text-gradient">Mais Contactos</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Fale connosco agora e receba uma proposta personalizada para o seu negócio em menos de 24 horas.
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Receber Proposta para o Meu Negócio
                  <ArrowRight size={20} />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Servicos;
