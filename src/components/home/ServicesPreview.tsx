import { Globe, Rocket, Share2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ServicesPreview = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const services = [
    {
      icon: Globe,
      title: t("services.service1Title"),
      description: t("services.service1Description"),
      price: t("services.service1Price"),
    },
    {
      icon: Rocket,
      title: t("services.service2Title"),
      description: t("services.service2Description"),
      price: t("services.service2Price"),
    },
    {
      icon: Share2,
      title: t("services.service3Title"),
      description: t("services.service3Description"),
      price: t("services.service3Price"),
    },
    {
      icon: TrendingUp,
      title: t("services.service4Title"),
      description: t("services.service4Description"),
      price: t("services.service4Price"),
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            {t("services.headline")} <span className="text-gradient">{t("services.headlineHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="text-primary font-medium text-sm">{service.price}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 space-y-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a
              href={`https://wa.me/351910000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("services.ctaButton")}
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            ou <Link to="/servicos" className="text-primary hover:underline">{t("common.seeAllServices")}</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;