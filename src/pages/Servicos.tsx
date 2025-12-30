import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Globe, Rocket, Share2, TrendingUp, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites Profissionais",
    subtitle: "Sites institucionais e comerciais",
    description: "Desenvolvemos sites modernos e otimizados que representam a identidade da sua marca e convertem visitantes em clientes.",
    features: [
      "Design responsivo para todos os dispositivos",
      "Redirecionamento direto para WhatsApp",
      "Otimização SEO básica incluída",
      "Integração com redes sociais",
      "Painel de gestão intuitivo",
      "Suporte e manutenção inicial",
    ],
    price: "200€ - 300€",
    highlight: true,
  },
  {
    icon: Rocket,
    title: "Landing Pages de Alta Conversão",
    subtitle: "Foco em vendas e geração de leads",
    description: "Páginas estratégicas desenhadas para maximizar conversões em campanhas de anúncios e marketing digital.",
    features: [
      "Design focado em conversão",
      "Testes A/B e otimização",
      "Integração com ferramentas de analytics",
      "CTAs estratégicos e persuasivos",
      "Velocidade de carregamento otimizada",
      "Ideal para Facebook e Google Ads",
    ],
    price: "Projetos Premium",
    highlight: false,
  },
  {
    icon: Share2,
    title: "Gestão de Social Media",
    subtitle: "Estratégia de redes sociais",
    description: "Gestão profissional das suas redes sociais para aumentar a visibilidade e engagement da sua marca.",
    features: [
      "Criação de conteúdo visual",
      "Calendário editorial mensal",
      "Gestão de Facebook e Instagram",
      "Análise de métricas e relatórios",
      "Interação com a comunidade",
      "Estratégia de hashtags",
    ],
    price: "Planos Mensais",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "SEO & Marketing Digital",
    subtitle: "Otimização e estratégia",
    description: "Posicione o seu negócio nos primeiros resultados do Google e atraia clientes qualificados organicamente.",
    features: [
      "Auditoria SEO completa",
      "Otimização on-page e off-page",
      "Pesquisa de palavras-chave",
      "Link building estratégico",
      "Relatórios mensais de performance",
      "Consultoria personalizada",
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
        <title>Serviços Digitais | Criação de Sites e Landing Pages | Império Web</title>
        <meta
          name="description"
          content="Serviços de criação de sites profissionais, landing pages de alta conversão, gestão de social media e SEO para negócios em Portugal."
        />
        <meta
          name="keywords"
          content="serviços digitais portugal, criação de sites lisboa, landing pages portugal, social media margem sul, seo portugal"
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
                Os Nossos Serviços
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Serviços Digitais da{" "}
                <span className="text-gradient">Império Web</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Soluções completas para transformar a presença digital do seu negócio e gerar resultados reais.
              </p>
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
                            href={`https://wa.me/351910000000?text=Olá! Tenho interesse no serviço: ${service.title}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Pedir Orçamento
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
                Não encontrou o que procura?
              </h2>
              <p className="text-muted-foreground mb-8">
                Desenvolvemos soluções personalizadas para as necessidades específicas do seu negócio. Entre em contacto para uma consulta gratuita.
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href="https://wa.me/351910000000?text=Olá! Gostaria de saber mais sobre os vossos serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale Connosco
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
