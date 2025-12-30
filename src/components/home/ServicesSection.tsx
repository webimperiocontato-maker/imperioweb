import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe, FileText, Search, Wrench, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const services = [
    {
      icon: Globe,
      title: t("services.service1Title"),
      subtitle: t("services.service1Subtitle"),
      includes: t("services.service1Includes"),
      forWho: t("services.service1For"),
      benefit: t("services.service1Benefit"),
    },
    {
      icon: FileText,
      title: t("services.service2Title"),
      subtitle: t("services.service2Subtitle"),
      includes: t("services.service2Includes"),
      forWho: t("services.service2For"),
      benefit: t("services.service2Benefit"),
    },
    {
      icon: Search,
      title: t("services.service3Title"),
      subtitle: t("services.service3Subtitle"),
      includes: t("services.service3Includes"),
      forWho: t("services.service3For"),
      benefit: t("services.service3Benefit"),
    },
    {
      icon: Wrench,
      title: t("services.service4Title"),
      subtitle: t("services.service4Subtitle"),
      includes: t("services.service4Includes"),
      forWho: t("services.service4For"),
      benefit: t("services.service4Benefit"),
    },
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("services.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("services.headline")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors group"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-display mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    O que inclui:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service.includes}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    Para quem:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {service.forWho}
                  </p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-foreground font-medium">
                    ✓ {service.benefit}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary" asChild>
                <a href={`https://wa.me/351910000000?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                  {t("services.cta")}
                  <ArrowRight size={16} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
