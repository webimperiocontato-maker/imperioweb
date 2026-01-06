import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Globe, Rocket, Share2, TrendingUp, Check, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, language } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const services = [
    {
      icon: Globe,
      title: t("servicesPage.service1Title"),
      subtitle: t("servicesPage.service1Subtitle"),
      description: t("servicesPage.service1Description"),
      features: [
        t("servicesPage.service1Feature1"),
        t("servicesPage.service1Feature2"),
        t("servicesPage.service1Feature3"),
        t("servicesPage.service1Feature4"),
        t("servicesPage.service1Feature5"),
        t("servicesPage.service1Feature6"),
      ],
      price: t("servicesPage.service1Price"),
      highlight: true,
    },
    {
      icon: Rocket,
      title: t("servicesPage.service2Title"),
      subtitle: t("servicesPage.service2Subtitle"),
      description: t("servicesPage.service2Description"),
      features: [
        t("servicesPage.service2Feature1"),
        t("servicesPage.service2Feature2"),
        t("servicesPage.service2Feature3"),
        t("servicesPage.service2Feature4"),
        t("servicesPage.service2Feature5"),
        t("servicesPage.service2Feature6"),
      ],
      price: t("servicesPage.service2Price"),
      highlight: false,
    },
    {
      icon: Share2,
      title: t("servicesPage.service3Title"),
      subtitle: t("servicesPage.service3Subtitle"),
      description: t("servicesPage.service3Description"),
      features: [
        t("servicesPage.service3Feature1"),
        t("servicesPage.service3Feature2"),
        t("servicesPage.service3Feature3"),
        t("servicesPage.service3Feature4"),
        t("servicesPage.service3Feature5"),
        t("servicesPage.service3Feature6"),
      ],
      price: t("servicesPage.service3Price"),
      highlight: false,
    },
    {
      icon: TrendingUp,
      title: t("servicesPage.service4Title"),
      subtitle: t("servicesPage.service4Subtitle"),
      description: t("servicesPage.service4Description"),
      features: [
        t("servicesPage.service4Feature1"),
        t("servicesPage.service4Feature2"),
        t("servicesPage.service4Feature3"),
        t("servicesPage.service4Feature4"),
        t("servicesPage.service4Feature5"),
        t("servicesPage.service4Feature6"),
      ],
      price: t("servicesPage.service4Price"),
      highlight: false,
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("servicesPage.metaTitle")}</title>
        <meta name="description" content={t("servicesPage.metaDescription")} />
        <link rel="canonical" href="https://imperioweb.eu/servicos" />
        <link rel="alternate" hrefLang="pt-PT" href="https://imperioweb.eu/servicos" />
        <link rel="alternate" hrefLang="en" href="https://imperioweb.eu/servicos" />
        <meta property="og:locale" content={language === "pt" ? "pt_PT" : "en_US"} />
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
                {t("servicesPage.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                {t("servicesPage.headline")}{" "}
                <span className="text-gradient">{t("servicesPage.headlineHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {t("servicesPage.description")}
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/351920804088?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  {t("servicesPage.ctaButton")}
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
                            {t("servicesPage.mostPopular")}
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
                        {t("servicesPage.whatIsIncluded")}
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
                            href={`https://wa.me/351920804088?text=${encodeURIComponent(t("whatsapp.serviceMessage", { service: service.title }))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("servicesPage.wantThisService")}
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
                {t("servicesPage.readyHeadline")} <span className="text-gradient">{t("servicesPage.readyHeadlineHighlight")}</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("servicesPage.readyDescription")}
              </p>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={`https://wa.me/351920804088?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("servicesPage.readyCta")}
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