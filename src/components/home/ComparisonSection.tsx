import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonSection = () => {
  const { t } = useLanguage();

  const comparisons = [
    {
      feature: t("comparison.feature1"),
      good: t("comparison.good1"),
      bad: t("comparison.bad1"),
    },
    {
      feature: t("comparison.feature2"),
      good: t("comparison.good2"),
      bad: t("comparison.bad2"),
    },
    {
      feature: t("comparison.feature3"),
      good: t("comparison.good3"),
      bad: t("comparison.bad3"),
    },
    {
      feature: t("comparison.feature4"),
      good: t("comparison.good4"),
      bad: t("comparison.bad4"),
    },
    {
      feature: t("comparison.feature5"),
      good: t("comparison.good5"),
      bad: t("comparison.bad5"),
    },
    {
      feature: t("comparison.feature6"),
      good: t("comparison.good6"),
      bad: t("comparison.bad6"),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("comparison.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("comparison.headline")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("comparison.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-card">
              <div className="p-4 text-sm font-medium text-muted-foreground">
                {t("comparison.headerFeature")}
              </div>
              <div className="p-4 text-sm font-medium text-primary text-center border-l border-border bg-primary/5">
                {t("comparison.headerUs")}
              </div>
              <div className="p-4 text-sm font-medium text-muted-foreground text-center border-l border-border">
                {t("comparison.headerThem")}
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 border-t border-border"
              >
                <div className="p-4 text-sm text-foreground bg-background">
                  {item.feature}
                </div>
                <div className="p-4 text-sm text-center border-l border-border bg-primary/5">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-foreground">{item.good}</span>
                  </div>
                </div>
                <div className="p-4 text-sm text-center border-l border-border bg-background">
                  <div className="flex items-center justify-center gap-2">
                    <X size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">{item.bad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
