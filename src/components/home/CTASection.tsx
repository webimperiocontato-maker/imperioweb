import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import LeadForm from "./LeadForm";

const CTASection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden" id="orcamento">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("ctaFinal.badge")}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
              {t("ctaFinal.headline")} <span className="text-gradient">{t("ctaFinal.headlineHighlight")}</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              {t("ctaFinal.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  {t("ctaFinal.whatsappButton")}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>✓ {t("ctaFinal.trust1")}</span>
              <span>✓ {t("ctaFinal.trust2")}</span>
              <span>✓ {t("ctaFinal.trust3")}</span>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;