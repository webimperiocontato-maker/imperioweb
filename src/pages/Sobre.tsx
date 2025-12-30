import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Target, Users, Award, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada projeto é desenvolvido com o objetivo de gerar conversões e crescimento real para o seu negócio.",
  },
  {
    icon: Users,
    title: "Parceria Próxima",
    description: "Trabalhamos lado a lado com os nossos clientes, garantindo comunicação clara e transparente.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Entregamos apenas trabalhos de excelência, com atenção aos mínimos detalhes.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Mantemo-nos atualizados com as últimas tendências e tecnologias do mercado digital.",
  },
];

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Império Web | Agência Digital em Portugal</title>
        <meta
          name="description"
          content="Conheça a Império Web, agência digital especializada em criação de sites e soluções digitais para negócios em Lisboa e Margem Sul."
        />
        <meta
          name="keywords"
          content="agência digital portugal, sobre império web, equipa digital lisboa, agência web margem sul"
        />
        <link rel="canonical" href="https://imperioweb.pt/sobre" />
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
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Somos a{" "}
                <span className="text-gradient">Império Web</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Agência digital focada em transformar negócios através de soluções web modernas e estratégias digitais eficazes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  A Nossa <span className="text-gradient">Missão</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    A Império Web nasceu da paixão por tecnologia e do desejo de ajudar pequenas empresas e negócios locais a prosperarem no mundo digital.
                  </p>
                  <p>
                    Acreditamos que toda empresa, independentemente do tamanho, merece uma presença online profissional e eficaz. O nosso objetivo é democratizar o acesso a soluções digitais de qualidade, oferecendo serviços premium a preços acessíveis.
                  </p>
                  <p>
                    Com sede em Portugal, servimos clientes em Lisboa, Margem Sul e em toda a região, com planos de expansão para o Brasil e mercado internacional.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-card border border-border overflow-hidden">
                  <div className="absolute inset-0 bg-glow opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-primary-foreground font-bold text-5xl font-display">I</span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                        Império Web
                      </h3>
                      <p className="text-muted-foreground">
                        Construindo o Futuro Digital
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gradient-subtle">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Os Nossos Valores
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                O Que Nos <span className="text-gradient">Define</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-card border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-semibold font-display text-lg mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Vamos Trabalhar{" "}
                <span className="text-gradient">Juntos</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Estamos prontos para ajudar o seu negócio a crescer no mundo digital. Entre em contacto e vamos conversar sobre o seu projeto.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href="https://wa.me/351910000000?text=Olá! Gostaria de saber mais sobre a Império Web."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar no WhatsApp
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/contacto">
                    Enviar Mensagem
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Sobre;
