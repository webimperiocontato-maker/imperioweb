import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeadFormProps {
  variant?: "default" | "compact";
  className?: string;
}

const LeadForm = ({ variant = "default", className = "" }: LeadFormProps) => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    businessType: "",
    objective: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const objectiveText = formData.objective || (language === "pt" ? "Não especificado" : "Not specified");
    const whatsappFormMessage = `${language === "pt" ? "Olá! Quero pedir um orçamento." : "Hello! I want to request a quote."}%0A%0A${language === "pt" ? "Nome" : "Name"}: ${formData.name}%0A${language === "pt" ? "Contacto" : "Contact"}: ${formData.contact}%0A${language === "pt" ? "Tipo de negócio" : "Business type"}: ${formData.businessType}%0A${language === "pt" ? "Objetivo" : "Objective"}: ${objectiveText}`;
    
    window.open(`https://wa.me/351910000000?text=${whatsappFormMessage}`, "_blank");
    
    toast({
      title: t("leadForm.toastTitle"),
      description: t("leadForm.toastDescription"),
    });

    setFormData({ name: "", contact: "", businessType: "", objective: "" });
  };

  const isCompact = variant === "compact";

  return (
    <form 
      onSubmit={handleSubmit}
      className={`${isCompact ? "space-y-4" : "p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border space-y-5"} ${className}`}
    >
      {!isCompact && (
        <div className="mb-6">
          <h3 className="text-xl font-bold font-display text-foreground mb-1">
            {t("leadForm.title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("leadForm.subtitle")}
          </p>
        </div>
      )}

      <div className={isCompact ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground text-sm"
            placeholder={t("leadForm.namePlaceholder")}
          />
        </div>
        <div>
          <input
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground text-sm"
            placeholder={t("leadForm.contactPlaceholder")}
          />
        </div>
      </div>

      <div className={isCompact ? "grid md:grid-cols-2 gap-4" : "space-y-4"}>
        <div>
          <input
            type="text"
            required
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground text-sm"
            placeholder={t("leadForm.businessPlaceholder")}
          />
        </div>
        <div>
          <select
            value={formData.objective}
            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground text-sm"
            required
          >
            <option value="">{t("leadForm.objectivePlaceholder")}</option>
            <option value={t("leadForm.objectiveLeads")}>{t("leadForm.objectiveLeads")}</option>
            <option value={t("leadForm.objectiveBookings")}>{t("leadForm.objectiveBookings")}</option>
            <option value={t("leadForm.objectiveSales")}>{t("leadForm.objectiveSales")}</option>
          </select>
        </div>
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full">
        {t("leadForm.submitButton")}
        <Send size={18} />
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        {t("leadForm.note")}
      </p>
    </form>
  );
};

export default LeadForm;