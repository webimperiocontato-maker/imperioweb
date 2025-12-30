import { Check, Zap, Shield, HeartHandshake, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const reasons = [
    {
      icon: Zap,
      title: t("whyChooseUs.reason1Title"),
      description: t("whyChooseUs.reason1Description"),
    },
    {
      icon: MessageCircle,
      title: t("whyChooseUs.reason2Title"),
      description: t("whyChooseUs.reason2Description"),
    },
    {
      icon: HeartHandshake,
      title: t("whyChooseUs.reason3Title"),
      description: t("whyChooseUs.reason3Description"),
    },
  ];

  const features = [
    t("whyChooseUs.feature1"),
    t("whyChooseUs.feature2"),
    t("whyChooseUs.feature3"),
    t("whyChooseUs.feature4"),
    t("whyChooseUs.feature5"),
    t("whyChooseUs.feature6"),
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t("whyChooseUs.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              {t("whyChooseUs.headline")}{" "}
              <span className="text-gradient">{t("whyChooseUs.headlineHighlight")}</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {t("whyChooseUs.description")}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("whyChooseUs.ctaButton")}
              </a>
            </Button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-lg mb-2 text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;