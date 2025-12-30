import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const MiniCasesSection = () => {
  const { t } = useLanguage();

  const cases = [
    {
      situation: t("miniCases.case1Situation"),
      solution: t("miniCases.case1Solution"),
      benefit: t("miniCases.case1Benefit"),
    },
    {
      situation: t("miniCases.case2Situation"),
      solution: t("miniCases.case2Solution"),
      benefit: t("miniCases.case2Benefit"),
    },
    {
      situation: t("miniCases.case3Situation"),
      solution: t("miniCases.case3Solution"),
      benefit: t("miniCases.case3Benefit"),
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("miniCases.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("miniCases.headline")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("miniCases.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {t("miniCases.situationLabel")}
                  </span>
                  <p className="text-sm text-foreground">{caseItem.situation}</p>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {t("miniCases.solutionLabel")}
                  </span>
                  <p className="text-sm text-foreground">{caseItem.solution}</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">
                    {t("miniCases.benefitLabel")}
                  </span>
                  <p className="text-sm text-primary font-medium">{caseItem.benefit}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="/portfolio">
              {t("miniCases.viewPortfolio")}
              <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniCasesSection;
