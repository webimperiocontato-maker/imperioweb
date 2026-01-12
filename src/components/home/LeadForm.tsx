import { useState, useRef, useCallback } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface LeadFormProps {
  variant?: "default" | "compact";
  className?: string;
}

// Sanitiza input para prevenir XSS e caracteres problemáticos em URLs
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < > para prevenir HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .slice(0, 500); // Limita tamanho para prevenir DoS
};

// Encode seguro para URL do WhatsApp
const encodeWhatsAppText = (text: string): string => {
  return encodeURIComponent(text).replace(/%20/g, '+');
};

const LeadForm = ({ variant = "default", className = "" }: LeadFormProps) => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const lastSubmitRef = useRef<number>(0);
  const COOLDOWN_MS = 3000; // 3 segundos entre submits
  
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    businessType: "",
    objective: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting: previne spam de cliques
    const now = Date.now();
    if (now - lastSubmitRef.current < COOLDOWN_MS) {
      return;
    }
    lastSubmitRef.current = now;
    setIsSubmitting(true);
    
    // Sanitizar todos os inputs
    const safeName = sanitizeInput(formData.name);
    const safeContact = sanitizeInput(formData.contact);
    const safeBusinessType = sanitizeInput(formData.businessType);
    const safeNotes = sanitizeInput(formData.notes);
    const safeObjective = formData.objective || (language === "pt" ? "Não especificado" : "Not specified");
    
    const clientMessage = language === "pt" ? "Gostava de contratar um serviço." : "I would like to hire a service.";
    const notesText = safeNotes ? `\n\n${safeNotes}` : "";
    
    const messageLines = [
      clientMessage,
      notesText,
      "",
      `${language === "pt" ? "Nome" : "Name"}: ${safeName}`,
      `${language === "pt" ? "Contacto" : "Contact"}: ${safeContact}`,
      `${language === "pt" ? "Tipo de negócio" : "Business type"}: ${safeBusinessType}`,
      `${language === "pt" ? "Plano" : "Plan"}: ${safeObjective}`,
    ].join("\n");
    
    const whatsappUrl = `https://wa.me/351920804088?text=${encodeWhatsAppText(messageLines)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    toast({
      title: t("leadForm.toastTitle"),
      description: t("leadForm.toastDescription"),
    });

    setFormData({ name: "", contact: "", businessType: "", objective: "", notes: "" });
    
    // Reset submitting state após cooldown
    setTimeout(() => setIsSubmitting(false), COOLDOWN_MS);
  }, [formData, language, t, toast]);

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
            <option value="">{t("leadForm.planPlaceholder")}</option>
            <option value={t("leadForm.planEssential")}>{t("leadForm.planEssential")}</option>
            <option value={t("leadForm.planProfessional")}>{t("leadForm.planProfessional")}</option>
            <option value={t("leadForm.planPremium")}>{t("leadForm.planPremium")}</option>
          </select>
        </div>
      </div>

      <div>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value.slice(0, 1000) })}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground text-sm resize-none"
          placeholder={t("leadForm.notesPlaceholder")}
          rows={3}
          maxLength={1000}
        />
        <p className="text-xs text-muted-foreground text-right mt-1">
          {formData.notes.length}/1000
        </p>
      </div>

      <Button 
        type="submit" 
        variant="hero" 
        size="lg" 
        className="w-full"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (language === "pt" ? "A enviar..." : "Sending...") : t("leadForm.submitButton")}
        <Send size={18} />
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        {t("leadForm.note")}
      </p>
    </form>
  );
};

export default LeadForm;