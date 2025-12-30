import { AlertTriangle, Clock, MousePointer2, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    { icon: Clock, text: t("problem.pain1") },
    { icon: MousePointer2, text: t("problem.pain2") },
    { icon: Search, text: t("problem.pain3") },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertTriangle size={16} className="text-destructive" />
            <span className="text-sm text-destructive font-medium">{t("problem.badge")}</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("problem.headline")}
          </h2>
          
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            {t("problem.description")}
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                  <problem.icon size={20} className="text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground">{problem.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;