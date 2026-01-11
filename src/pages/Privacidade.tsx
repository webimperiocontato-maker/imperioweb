import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Privacidade = () => {
  const { t, language } = useLanguage();
  const lastUpdated = language === "pt" ? "11 de janeiro de 2026" : "January 11, 2026";

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("privacy.title")} | Império Web</title>
        <meta name="description" content={t("privacy.metaDescription")} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Layout>
        <section className="section-padding pt-32">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
                {language === "pt" ? (
                  <>Política de <span className="text-gradient">Privacidade</span></>
                ) : (
                  <>Privacy <span className="text-gradient">Policy</span></>
                )}
              </h1>
              <p className="text-muted-foreground mb-12">
                {t("privacy.lastUpdated")} {lastUpdated}
              </p>

              <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
                
                {/* 1. Quem Somos */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section1Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t("privacy.section1Text") }} />
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong className="text-foreground">{t("privacy.section1Contact")}</strong> webimperiocontato@gmail.com
                  </p>
                </section>

                {/* 2. Que Dados Recolhemos */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section2Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t("privacy.section2Text")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section2Item1") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section2Item2") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section2Item3") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section2Item4") }} />
                  </ul>
                </section>

                {/* 3. Como Recolhemos os Dados */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section3Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t("privacy.section3Text")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>{t("privacy.section3Item1")}</li>
                    <li>{t("privacy.section3Item2")}</li>
                    <li>{t("privacy.section3Item3")}</li>
                    <li>{t("privacy.section3Item4")}</li>
                  </ul>
                </section>

                {/* 4. Finalidades do Tratamento */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section4Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t("privacy.section4Text")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>{t("privacy.section4Item1")}</li>
                    <li>{t("privacy.section4Item2")}</li>
                    <li>{t("privacy.section4Item3")}</li>
                    <li>{t("privacy.section4Item4")}</li>
                    <li>{t("privacy.section4Item5")}</li>
                    <li>{t("privacy.section4Item6")}</li>
                  </ul>
                </section>

                {/* 5. Base Legal */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section5Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t("privacy.section5Text")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section5Item1") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section5Item2") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section5Item3") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section5Item4") }} />
                  </ul>
                </section>

                {/* 6. Partilha de Dados */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section6Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t("privacy.section6Text")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>{t("privacy.section6Item1")}</li>
                    <li>{t("privacy.section6Item2")}</li>
                    <li>{t("privacy.section6Item3")}</li>
                    <li>{t("privacy.section6Item4")}</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {t("privacy.section6Extra")}
                  </p>
                </section>

                {/* 7. Retenção */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section7Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("privacy.section7Text1")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {t("privacy.section7Text2")}
                  </p>
                </section>

                {/* 8. Direitos */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section8Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {t("privacy.section8Text")}
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section8Item1") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section8Item2") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section8Item3") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section8Item4") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section8Item5") }} />
                    <li dangerouslySetInnerHTML={{ __html: t("privacy.section8Item6") }} />
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {t("privacy.section8Extra")} <strong className="text-foreground">webimperiocontato@gmail.com</strong>.
                  </p>
                </section>

                {/* 9. Segurança */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section9Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("privacy.section9Text")}
                  </p>
                </section>

                {/* 10. Cookies */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section10Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("privacy.section10Text1")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    {t("privacy.section10Text2")}
                  </p>
                </section>

                {/* 11. Contacto */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section11Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("privacy.section11Text")}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong className="text-foreground">{t("privacy.section11Email")}</strong> webimperiocontato@gmail.com<br />
                    <strong className="text-foreground">{t("privacy.section11Phone")}</strong> +351 920 804 088
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3" dangerouslySetInnerHTML={{ __html: t("privacy.section11Extra") }} />
                </section>

                {/* 12. Atualizações */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold font-display text-foreground mb-4">
                    {t("privacy.section12Title")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("privacy.section12Text")}
                  </p>
                </section>

              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacidade;
