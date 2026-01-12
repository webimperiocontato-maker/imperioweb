import { ArrowRight, Check, Zap, Search, MousePointer, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useMemo, memo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = memo(() => {
  const { t } = useLanguage();

  const benefits = useMemo(() => [
    { icon: Search, text: t("heroNew.benefit1") },
    { icon: Zap, text: t("heroNew.benefit2") },
    { icon: MousePointer, text: t("heroNew.benefit3") },
    { icon: Headphones, text: t("heroNew.benefit4") },
  ], [t]);

  const microProofs = useMemo(() => [
    t("heroNew.microProof1"),
    t("heroNew.microProof2"),
    t("heroNew.microProof3"),
  ], [t]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container-custom relative z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* H1 - Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              {t("heroNew.headline1")}
              <span className="text-gradient block mt-2">{t("heroNew.headlineHighlight")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {t("heroNew.subheadline")}
            </p>

            {/* Benefits - 4 Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/80 border border-border"
                >
                  <benefit.icon size={16} className="text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground">{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#orcamento">
                  {t("heroNew.ctaPrimary")}
                  <ArrowRight size={20} />
                </a>
              </Button>
            </motion.div>

            {/* Guarantee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center justify-center gap-2 mb-8"
            >
              <Clock size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground font-medium">
                {t("heroNew.guarantee")}
              </span>
            </motion.div>

            {/* Micro Proofs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-6 border-t border-border/50"
            >
              {microProofs.map((proof, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check size={14} className="text-primary" />
                  <span className="text-xs text-muted-foreground">{proof}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
