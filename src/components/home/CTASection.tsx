import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Pain Point */}
          <p className="text-primary font-medium mb-4">
            {t("cta.painPoint")}
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            {t("cta.headline")}{" "}
            <span className="text-gradient">{t("cta.headlineHighlight")}</span> {t("cta.headlineEnd")}
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            {t("cta.description")} <span className="text-foreground font-semibold">{t("cta.descriptionPrice")}</span> {t("cta.descriptionEnd")}
          </p>
          <p className="text-muted-foreground mb-10">
            {t("cta.subDescription")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("cta.ctaPrimary")}
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="/contacto">
                {t("cta.ctaSecondary")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;