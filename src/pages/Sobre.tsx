import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Target, Users, Award, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoCrown from "@/assets/logo-crown.png";

const Sobre = () => {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("aboutPage.value1Title"),
      description: t("aboutPage.value1Description"),
    },
    {
      icon: Users,
      title: t("aboutPage.value2Title"),
      description: t("aboutPage.value2Description"),
    },
    {
      icon: Award,
      title: t("aboutPage.value3Title"),
      description: t("aboutPage.value3Description"),
    },
    {
      icon: Lightbulb,
      title: t("aboutPage.value4Title"),
      description: t("aboutPage.value4Description"),
    },
  ];

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("aboutPage.metaTitle")}</title>
        <meta name="description" content={t("aboutPage.metaDescription")} />
        <link rel="canonical" href="https://imperioweb.eu/sobre" />
        <link rel="alternate" hrefLang="pt-PT" href="https://imperioweb.eu/sobre" />
        <link rel="alternate" hrefLang="en" href="https://imperioweb.eu/sobre" />
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
                {t("aboutPage.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                {t("aboutPage.headline")}{" "}
                <span className="text-gradient">{t("aboutPage.headlineHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("aboutPage.description")}
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
                  {t("aboutPage.missionHeadline")} <span className="text-gradient">{t("aboutPage.missionHeadlineHighlight")}</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t("aboutPage.missionText1")}</p>
                  <p>{t("aboutPage.missionText2")}</p>
                  <p>{t("aboutPage.missionText3")}</p>
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
                      <img src={logoCrown} alt="Império Web" className="w-24 h-24 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold font-display text-foreground mb-2">
                        Império Web
                      </h3>
                      <p className="text-muted-foreground">
                        {t("aboutPage.buildingFuture")}
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
                {t("aboutPage.valuesTitle")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                {t("aboutPage.valuesSubtitle")} <span className="text-gradient">{t("aboutPage.valuesSubtitleHighlight")}</span>
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
                {t("aboutPage.ctaHeadline")}{" "}
                <span className="text-gradient">{t("aboutPage.ctaHeadlineHighlight")}</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("aboutPage.ctaDescription")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="whatsapp" size="xl" asChild>
                  <a
                    href={`https://wa.me/351910000000?text=${encodeURIComponent(t("whatsapp.aboutMessage"))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("aboutPage.ctaWhatsApp")}
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/contacto">
                    {t("aboutPage.ctaMessage")}
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