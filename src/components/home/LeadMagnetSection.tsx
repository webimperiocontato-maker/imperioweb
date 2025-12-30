import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Check, Search, Zap, Target, ArrowRight } from "lucide-react";

const LeadMagnetSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    business: "",
    objective: "",
  });

  const benefits = [
    { icon: Search, text: t("leadMagnet.benefit1") },
    { icon: Zap, text: t("leadMagnet.benefit2") },
    { icon: Target, text: t("leadMagnet.benefit3") },
  ];

  const objectives = [
    { value: "seo", label: t("leadMagnet.objectiveSeo") },
    { value: "speed", label: t("leadMagnet.objectiveSpeed") },
    { value: "leads", label: t("leadMagnet.objectiveLeads") },
    { value: "redesign", label: t("leadMagnet.objectiveRedesign") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Olá! Quero pedir o diagnóstico gratuito.\n\nNome: ${formData.name}\nContacto: ${formData.contact}\nNegócio: ${formData.business}\nObjetivo: ${formData.objective}`
    );
    
    window.open(`https://wa.me/351910000000?text=${message}`, "_blank");
    
    toast({
      title: t("leadForm.toastTitle"),
      description: t("leadForm.toastDescription"),
    });
    
    setFormData({ name: "", contact: "", business: "", objective: "" });
  };

  return (
    <section id="diagnostico" className="section-padding">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                {t("leadMagnet.badge")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
                {t("leadMagnet.headline")}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("leadMagnet.description")}
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold font-display mb-6">
                {t("leadMagnet.formTitle")}
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

                <div className="grid grid-cols-2 gap-2">
                  {objectives.map((obj) => (
                    <button
                      key={obj.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, objective: obj.label })}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        formData.objective === obj.label
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-background border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {obj.label}
                    </button>
                  ))}
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  {t("leadMagnet.submitButton")}
                  <ArrowRight size={18} />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {t("leadMagnet.privacy")}
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
