import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useRef, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

// Sanitiza input para prevenir XSS
const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .slice(0, 500);
};

const encodeWhatsAppText = (text: string): string => {
  return encodeURIComponent(text).replace(/%20/g, '+');
};

const Contacto = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const lastSubmitRef = useRef<number>(0);
  const COOLDOWN_MS = 3000;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting
    const now = Date.now();
    if (now - lastSubmitRef.current < COOLDOWN_MS) {
      return;
    }
    lastSubmitRef.current = now;
    setIsSubmitting(true);
    
    // Sanitizar inputs
    const safeName = sanitizeInput(formData.name);
    const safeEmail = sanitizeInput(formData.email);
    const safePhone = sanitizeInput(formData.phone);
    const safeService = formData.service || (language === "pt" ? "Não especificado" : "Not specified");
    const safeMessage = sanitizeInput(formData.message);
    
    const messageLines = [
      `${language === "pt" ? "Olá! O meu nome é" : "Hello! My name is"} ${safeName}.`,
      "",
      `${language === "pt" ? "Serviço de interesse" : "Service of interest"}: ${safeService}`,
      "",
      `${language === "pt" ? "Mensagem" : "Message"}: ${safeMessage}`,
      "",
      `${language === "pt" ? "Contacto" : "Contact"}: ${safeEmail} | ${safePhone}`,
    ].join("\n");
    
    window.open(`https://wa.me/351920804088?text=${encodeWhatsAppText(messageLines)}`, "_blank", "noopener,noreferrer");
    
    toast({
      title: t("contactPage.toastTitle"),
      description: t("contactPage.toastDescription"),
    });
    
    setTimeout(() => setIsSubmitting(false), COOLDOWN_MS);
  }, [formData, language, t, toast]);

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("contactPage.metaTitle")}</title>
        <meta name="description" content={t("contactPage.metaDescription")} />
        <link rel="canonical" href="https://imperioweb.eu/contacto" />
        <link rel="alternate" hrefLang="pt-PT" href="https://imperioweb.eu/contacto" />
        <link rel="alternate" hrefLang="en" href="https://imperioweb.eu/contacto" />
        <link rel="alternate" hrefLang="x-default" href="https://imperioweb.eu/contacto" />
        <meta property="og:title" content={t("contactPage.metaTitle")} />
        <meta property="og:description" content={t("contactPage.metaDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imperioweb.eu/contacto" />
        <meta property="og:image" content="https://imperioweb.eu/og-image.jpg" />
        <meta property="og:locale" content={language === "pt" ? "pt_PT" : "en_US"} />
        <meta property="og:site_name" content="Império Web" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("contactPage.metaTitle")} />
        <meta name="twitter:description" content={t("contactPage.metaDescription")} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-40" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                {t("contactPage.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                {t("contactPage.headline")}{" "}
                <span className="text-gradient">{t("contactPage.headlineHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("contactPage.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form 
                  onSubmit={handleSubmit}
                  className="p-8 rounded-3xl bg-gradient-card border border-border"
                >
                  <h2 className="text-2xl font-bold font-display mb-2">
                    {t("contactPage.formTitle")}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    {t("contactPage.formDescription")}
                  </p>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          {t("contactPage.labelName")} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground"
                          placeholder={t("contactPage.placeholderName")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          {t("contactPage.labelEmail")} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground"
                          placeholder={t("contactPage.placeholderEmail")}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          {t("contactPage.labelPhone")}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground"
                          placeholder={t("contactPage.placeholderPhone")}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          {t("contactPage.labelService")}
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground"
                        >
                          <option value="">{t("contactPage.selectOption")}</option>
                          <option value={t("contactPage.optionSite")}>{t("contactPage.optionSite")}</option>
                          <option value={t("contactPage.optionLanding")}>{t("contactPage.optionLanding")}</option>
                          <option value={t("contactPage.optionSocial")}>{t("contactPage.optionSocial")}</option>
                          <option value={t("contactPage.optionSeo")}>{t("contactPage.optionSeo")}</option>
                          <option value={t("contactPage.optionOther")}>{t("contactPage.optionOther")}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        {t("contactPage.labelMessage")} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none text-foreground placeholder:text-muted-foreground resize-none"
                        placeholder={t("contactPage.placeholderMessage")}
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      {t("contactPage.submitButton")}
                      <Send size={20} />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {t("contactPage.submitNote")}
                    </p>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contacto;