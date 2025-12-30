import { Rocket, Globe, Search, BarChart3, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatWeDeliverSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Rocket,
      title: t("deliver.service1Title"),
      description: t("deliver.service1Desc"),
    },
    {
      icon: Globe,
      title: t("deliver.service2Title"),
      description: t("deliver.service2Desc"),
    },
    {
      icon: Search,
      title: t("deliver.service3Title"),
      description: t("deliver.service3Desc"),
    },
    {
      icon: BarChart3,
      title: t("deliver.service4Title"),
      description: t("deliver.service4Desc"),
    },
    {
      icon: Headphones,
      title: t("deliver.service5Title"),
      description: t("deliver.service5Desc"),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("deliver.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("deliver.headline")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("deliver.description")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;