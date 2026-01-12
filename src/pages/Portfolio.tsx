import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, ExternalLink, Check, Search, Zap, Target, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    business: "",
  });

  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const filters = [
    { id: "all", label: t("portfolioPage.filterAll") },
    { id: "sites", label: t("portfolioPage.filterSites") },
    { id: "landing", label: t("portfolioPage.filterLanding") },
    { id: "optimization", label: t("portfolioPage.filterOptimization") },
  ];

  const projects = [
    {
      id: 1,
      type: "sites",
      title: t("portfolioPage.example1Title"),
      niche: t("portfolioPage.example1Niche"),
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      bullets: [
        t("portfolioPage.example1Bullet1"),
        t("portfolioPage.example1Bullet2"),
        t("portfolioPage.example1Bullet3"),
      ],
      situation: t("portfolioPage.example1Situation"),
      solution: t("portfolioPage.example1Solution"),
      elements: t("portfolioPage.example1Elements"),
    },
    {
      id: 2,
      type: "landing",
      title: t("portfolioPage.example2Title"),
      niche: t("portfolioPage.example2Niche"),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      bullets: [
        t("portfolioPage.example2Bullet1"),
        t("portfolioPage.example2Bullet2"),
        t("portfolioPage.example2Bullet3"),
      ],
      situation: t("portfolioPage.example2Situation"),
      solution: t("portfolioPage.example2Solution"),
      elements: t("portfolioPage.example2Elements"),
    },
    {
      id: 3,
      type: "sites",
      title: t("portfolioPage.example3Title"),
      niche: t("portfolioPage.example3Niche"),
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
      bullets: [
        t("portfolioPage.example3Bullet1"),
        t("portfolioPage.example3Bullet2"),
        t("portfolioPage.example3Bullet3"),
      ],
      situation: t("portfolioPage.example3Situation"),
      solution: t("portfolioPage.example3Solution"),
      elements: t("portfolioPage.example3Elements"),
    },
    {
      id: 4,
      type: "optimization",
      title: t("portfolioPage.example4Title"),
      niche: t("portfolioPage.example4Niche"),
      image: "https://images.unsplash.com/photo-1625225233840-695456021cde?w=600&h=400&fit=crop",
      bullets: [
        t("portfolioPage.example4Bullet1"),
        t("portfolioPage.example4Bullet2"),
        t("portfolioPage.example4Bullet3"),
      ],
      situation: t("portfolioPage.example4Situation"),
      solution: t("portfolioPage.example4Solution"),
      elements: t("portfolioPage.example4Elements"),
    },
    {
      id: 5,
      type: "landing",
      title: t("portfolioPage.example5Title"),
      niche: t("portfolioPage.example5Niche"),
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop",
      bullets: [
        t("portfolioPage.example5Bullet1"),
        t("portfolioPage.example5Bullet2"),
        t("portfolioPage.example5Bullet3"),
      ],
      situation: t("portfolioPage.example5Situation"),
      solution: t("portfolioPage.example5Solution"),
      elements: t("portfolioPage.example5Elements"),
    },
    {
      id: 6,
      type: "sites",
      title: t("portfolioPage.example6Title"),
      niche: t("portfolioPage.example6Niche"),
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
      bullets: [
        t("portfolioPage.example6Bullet1"),
        t("portfolioPage.example6Bullet2"),
        t("portfolioPage.example6Bullet3"),
      ],
      situation: t("portfolioPage.example6Situation"),
      solution: t("portfolioPage.example6Solution"),
      elements: t("portfolioPage.example6Elements"),
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Vi o portfólio e quero o diagnóstico gratuito.\n\nNome: ${formData.name}\nContacto: ${formData.contact}\nNegócio: ${formData.business}`
    );
    window.open(`https://wa.me/351920804088?text=${message}`, "_blank");
    toast({
      title: t("leadForm.toastTitle"),
      description: t("leadForm.toastDescription"),
    });
    setFormData({ name: "", contact: "", business: "" });
  };

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("portfolioPage.metaTitle")}</title>
        <meta name="description" content={t("portfolioPage.metaDescription")} />
        <link rel="canonical" href="https://imperioweb.eu/portfolio" />
        <meta property="og:title" content={t("portfolioPage.metaTitle")} />
        <meta property="og:description" content={t("portfolioPage.metaDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imperioweb.eu/portfolio" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-40" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
                {t("portfolioPage.heroTitle")}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("portfolioPage.heroSubtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="aspect-[3/2] overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded-full bg-background/90 text-xs text-primary font-medium">
                          {t("portfolioPage.exampleBadge")}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium">{project.niche}</span>
                      <h3 className="font-semibold font-display text-foreground mt-1 mb-3">
                        {project.title}
                      </h3>
                      <ul className="space-y-1.5 mb-4">
                        {project.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check size={12} className="text-primary mt-0.5 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedProject(project.id)}
                        >
                          {t("portfolioPage.viewDetails")}
                        </Button>
                        <Button variant="hero" size="sm" className="flex-1" asChild>
                          <a href="#orcamento-portfolio">
                            {t("portfolioPage.wantSimilar")}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={20} />
                </button>
                
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  return (
                    <>
                      <span className="text-xs text-primary font-medium">{project.niche}</span>
                      <h3 className="text-xl font-bold font-display mb-4">{project.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            {t("portfolioPage.modalSituation")}
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.situation}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            {t("portfolioPage.modalSolution")}
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-1">
                            {t("portfolioPage.modalElements")}
                          </h4>
                          <p className="text-sm text-muted-foreground">{project.elements}</p>
                        </div>
                      </div>

                      <Button variant="hero" size="lg" className="w-full" asChild>
                        <a href="#orcamento-portfolio" onClick={() => setSelectedProject(null)}>
                          {t("portfolioPage.wantLikeThis")}
                          <ArrowRight size={18} />
                        </a>
                      </Button>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA / Lead Magnet Section */}
        <section id="orcamento-portfolio" className="section-padding bg-gradient-subtle">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                    {t("portfolioPage.ctaBadge")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                    {t("portfolioPage.ctaHeadline")}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t("portfolioPage.ctaDescription")}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Search size={16} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{t("portfolioPage.ctaBenefit1")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap size={16} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{t("portfolioPage.ctaBenefit2")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target size={16} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{t("portfolioPage.ctaBenefit3")}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold font-display mb-4">
                    {t("portfolioPage.formTitle")}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder={t("leadMagnet.namePlaceholder")}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                    <Input
                      type="text"
                      placeholder={t("leadMagnet.contactPlaceholder")}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                    <Input
                      type="text"
                      placeholder={t("leadMagnet.businessPlaceholder")}
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      {t("portfolioPage.formSubmit")}
                      <ArrowRight size={18} />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {t("portfolioPage.formNote")}
                    </p>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
