import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Check, ArrowRight, Sparkles, Clock, RefreshCw, Headphones, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Servicos = memo(() => {
  const { t, language } = useLanguage();

  const packages = useMemo(() => [
    {
      name: t("packages.starterName"),
      description: t("packages.starterDesc"),
      price: t("packages.starterPrice"),
      priceNote: t("packages.starterPriceNote"),
      delivery: "5-7 dias",
      revisions: "2 revisões",
      support: "30 dias",
      idealFor: t("packages.starterIdeal"),
      notIncluded: t("packages.starterNotIncluded"),
      features: [
        t("packages.starterF1"),
        t("packages.starterF2"),
        t("packages.starterF3"),
        t("packages.starterF4"),
        t("packages.starterF5"),
      ],
      highlighted: true,
    },
    {
      name: t("packages.growthName"),
      description: t("packages.growthDesc"),
      price: t("packages.growthPrice"),
      priceNote: t("packages.growthPriceNote"),
      delivery: "10-15 dias",
      revisions: "3 revisões",
      support: "60 dias",
      idealFor: t("packages.growthIdeal"),
      notIncluded: t("packages.growthNotIncluded"),
      features: [
        t("packages.growthF1"),
        t("packages.growthF2"),
        t("packages.growthF3"),
        t("packages.growthF4"),
      ],
      highlighted: false,
    },
    {
      name: t("packages.premiumName"),
      description: t("packages.premiumDesc"),
      price: t("packages.premiumPrice"),
      priceNote: t("packages.premiumPriceNote"),
      delivery: "10-30 dias",
      revisions: "5 revisões",
      support: "90 dias",
      idealFor: t("packages.premiumIdeal"),
      notIncluded: t("packages.premiumNotIncluded"),
      features: [
        t("packages.premiumF1"),
        t("packages.premiumF2"),
        t("packages.premiumF3"),
        t("packages.premiumF5"),
        t("packages.premiumF6"),
      ],
      highlighted: false,
    },
  ], [t]);

  const comparisonFeatures = useMemo(() => [
    { feature: t("packages.compFeature1"), starter: true, growth: true, premium: true },
    { feature: t("packages.compFeature2"), starter: true, growth: true, premium: true },
    { feature: t("packages.compFeature3"), starter: true, growth: true, premium: true },
    { feature: t("packages.compFeature4"), starter: true, growth: true, premium: true },
    { feature: t("packages.compFeature5"), starter: true, growth: true, premium: true },
    { feature: t("packages.compFeature6"), starter: true, growth: true, premium: true },
    { feature: t("packages.compFeature7"), starter: false, growth: true, premium: true },
    { feature: t("packages.compFeature8"), starter: false, growth: true, premium: true },
    { feature: t("packages.compFeature9"), starter: false, growth: false, premium: true },
    { feature: t("packages.compFeature10"), starter: false, growth: false, premium: true },
    { feature: t("packages.compFeature11"), starter: false, growth: false, premium: true },
    { feature: t("packages.compFeature12"), starter: false, growth: false, premium: true },
    { feature: t("packages.compFeature13"), starter: false, growth: false, premium: true },
  ], [t]);

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
                {t("packages.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                {t("packages.headline")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("packages.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section-padding" id="pacotes">
          <div className="container-custom">
            {/* Package Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                    pkg.highlighted
                      ? "bg-gradient-card border-primary/40 shadow-glow scale-[1.02]"
                      : "bg-card border-border hover:border-primary/20"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                      <Sparkles size={12} />
                      {t("packages.popular")}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold font-display text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-3xl font-bold font-display text-gradient">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted-foreground ml-2">{pkg.priceNote}</span>
                  </div>

                  {/* Delivery, Revisions, Support with Labels */}}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="text-center">
                      <Clock size={14} className="text-primary mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wide">{t("packages.deliveryLabel")}</p>
                      <p className="text-xs text-muted-foreground font-medium">{pkg.delivery}</p>
                    </div>
                    <div className="text-center border-x border-border/50">
                      <RefreshCw size={14} className="text-primary mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wide">{t("packages.revisionsLabel")}</p>
                      <p className="text-xs text-muted-foreground font-medium">{pkg.revisions}</p>
                    </div>
                    <div className="text-center">
                      <Headphones size={14} className="text-primary mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground/70 uppercase tracking-wide">{t("packages.supportLabel")}</p>
                      <p className="text-xs text-muted-foreground font-medium">{pkg.support}</p>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-xs font-medium text-primary mb-1">{t("packages.idealFor")}</p>
                    <p className="text-xs text-muted-foreground">{pkg.idealFor}</p>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Not Included */}
                  <div className="mb-6 p-3 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-xs font-medium text-muted-foreground mb-1">{t("packages.notIncluded")}</p>
                    <p className="text-xs text-muted-foreground/80">{pkg.notIncluded}</p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant={pkg.highlighted ? "hero" : "outline"} 
                      size="lg" 
                      className="w-full"
                      asChild
                    >
                      <a href="/contacto">
                        {t("packages.cta")}
                        <ArrowRight size={18} />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <h3 className="text-xl md:text-2xl font-bold font-display text-center mb-8">
                {t("packages.comparisonTitle")}
              </h3>
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-muted-foreground font-medium">{t("packages.comparisonFeature")}</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">{t("packages.starterName")}</th>
                    <th className="text-center py-4 px-4 text-primary font-semibold bg-primary/5 rounded-t-lg">{t("packages.growthName")}</th>
                    <th className="text-center py-4 px-4 text-foreground font-semibold">{t("packages.premiumName")}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                      <td className="py-3 px-4 text-sm text-muted-foreground">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {row.starter ? (
                          <Check size={18} className="text-primary mx-auto" />
                        ) : (
                          <X size={18} className="text-muted-foreground/40 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center bg-primary/5">
                        {row.growth ? (
                          <Check size={18} className="text-primary mx-auto" />
                        ) : (
                          <X size={18} className="text-muted-foreground/40 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.premium ? (
                          <Check size={18} className="text-primary mx-auto" />
                        ) : (
                          <X size={18} className="text-muted-foreground/40 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Guarantee Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-center"
            >
              <h4 className="text-lg font-bold font-display text-foreground mb-2">
                {t("packages.guaranteeTitle")}
              </h4>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                {t("packages.guaranteeText")}
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
});

Servicos.displayName = "Servicos";

export default Servicos;