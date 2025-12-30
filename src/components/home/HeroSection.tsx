import { ArrowRight, Sparkles, CheckCircle, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const socialProofPills = [
    { icon: Users, text: t("hero.pillExperts") },
    { icon: Target, text: t("hero.pillResults") },
    { icon: CheckCircle, text: t("hero.pillCustom") },
  ];

  const stats = [
    { number: t("hero.stat1Number"), label: t("hero.stat1Label") },
    { number: t("hero.stat2Number"), label: t("hero.stat2Label") },
    { number: t("hero.stat3Number"), label: t("hero.stat3Label") },
    { number: t("hero.stat4Number"), label: t("hero.stat4Label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-custom relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">{t("hero.badge")}</span>
          </motion.div>

          {/* Pain Point - Direct Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-primary font-medium mb-4"
          >
            {t("hero.painPoint")}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6"
          >
            {t("hero.headline")}{" "}
            <span className="text-gradient">{t("hero.headlineHighlight")}</span>{" "}
            {t("hero.headlineEnd")}
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6"
          >
            {t("hero.valueProposition")} <span className="text-foreground font-semibold">{t("hero.valuePropositionPrice")}</span>{t("hero.valuePropositionEnd")}
          </motion.p>

          {/* Social Proof Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {socialProofPills.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
              >
                <item.icon size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("hero.ctaPrimary")}
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="/servicos">
                {t("hero.ctaSecondary")}
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-16 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-display text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;