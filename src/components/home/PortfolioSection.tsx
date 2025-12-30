import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("portfolio.project1Title"),
      niche: t("portfolio.project1Niche"),
      objective: t("portfolio.project1Objective"),
      result: t("portfolio.project1Result"),
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
    },
    {
      title: t("portfolio.project2Title"),
      niche: t("portfolio.project2Niche"),
      objective: t("portfolio.project2Objective"),
      result: t("portfolio.project2Result"),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
    {
      title: t("portfolio.project3Title"),
      niche: t("portfolio.project3Niche"),
      objective: t("portfolio.project3Objective"),
      result: t("portfolio.project3Result"),
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    },
    {
      title: t("portfolio.project4Title"),
      niche: t("portfolio.project4Niche"),
      objective: t("portfolio.project4Objective"),
      result: t("portfolio.project4Result"),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("portfolio.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("portfolio.headline")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("portfolio.description")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <ExternalLink size={20} className="text-foreground" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs text-primary font-medium">{project.niche}</span>
                <h3 className="font-semibold font-display text-foreground mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{project.objective}</p>
                <p className="text-xs text-primary font-medium">{project.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="/servicos">
              {t("portfolio.viewMore")}
              <ArrowRight size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;