import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Search, FileText, Eye, Headphones, Check, X } from "lucide-react";

const DifferentialsSection = () => {
  const { t } = useLanguage();

  const differentials = [
    {
      icon: Zap,
      title: t("differentials.diff1Title"),
      description: t("differentials.diff1Desc"),
    },
    {
      icon: Search,
      title: t("differentials.diff2Title"),
      description: t("differentials.diff2Desc"),
    },
    {
      icon: FileText,
      title: t("differentials.diff3Title"),
      description: t("differentials.diff3Desc"),
    },
    {
      icon: Eye,
      title: t("differentials.diff4Title"),
      description: t("differentials.diff4Desc"),
    },
    {
      icon: Headphones,
      title: t("differentials.diff5Title"),
      description: t("differentials.diff5Desc"),
    },
  ];

  const comparisons = [
    {
      feature: t("differentials.comp1Feature"),
      us: t("differentials.comp1Us"),
      them: t("differentials.comp1Them"),
    },
    {
      feature: t("differentials.comp2Feature"),
      us: t("differentials.comp2Us"),
      them: t("differentials.comp2Them"),
    },
    {
      feature: t("differentials.comp3Feature"),
      us: t("differentials.comp3Us"),
      them: t("differentials.comp3Them"),
    },
    {
      feature: t("differentials.comp4Feature"),
      us: t("differentials.comp4Us"),
      them: t("differentials.comp4Them"),
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
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("differentials.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("differentials.headline")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("differentials.description")}
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {differentials.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <diff.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">
                {diff.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold font-display text-center mb-6">
            {t("differentials.comparisonTitle")}
          </h3>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
              <div className="p-4 text-sm font-medium text-muted-foreground">
                {t("differentials.comparison")}
              </div>
              <div className="p-4 text-sm font-semibold text-primary text-center border-l border-border">
                Império Web
              </div>
              <div className="p-4 text-sm font-medium text-muted-foreground text-center border-l border-border">
                Site Barato
              </div>
            </div>

            {/* Table Body */}
            {comparisons.map((comp, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index !== comparisons.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="p-4 text-sm text-foreground">
                  {comp.feature}
                </div>
                <div className="p-4 text-sm text-center border-l border-border">
                  <div className="flex items-center justify-center gap-2">
                    <Check size={16} className="text-primary" />
                    <span className="text-foreground">{comp.us}</span>
                  </div>
                </div>
                <div className="p-4 text-sm text-center border-l border-border">
                  <div className="flex items-center justify-center gap-2">
                    <X size={16} className="text-destructive/70" />
                    <span className="text-muted-foreground">{comp.them}</span>
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

export default DifferentialsSection;
