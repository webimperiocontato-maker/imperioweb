import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { MapPin, Mail, Phone, Send, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contacto = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappFormMessage = `${language === "pt" ? "Olá! O meu nome é" : "Hello! My name is"} ${formData.name}.%0A%0A${language === "pt" ? "Serviço de interesse" : "Service of interest"}: ${formData.service || (language === "pt" ? "Não especificado" : "Not specified")}%0A%0A${language === "pt" ? "Mensagem" : "Message"}: ${formData.message}%0A%0A${language === "pt" ? "Contacto" : "Contact"}: ${formData.email} | ${formData.phone}`;
    
    window.open(`https://wa.me/351910000000?text=${whatsappFormMessage}`, "_blank");
    
    toast({
      title: t("contactPage.toastTitle"),
      description: t("contactPage.toastDescription"),
    });
  };

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("contactPage.metaTitle")}</title>
        <meta name="description" content={t("contactPage.metaDescription")} />
        <link rel="canonical" href="https://imperioweb.pt/contacto" />
        <link rel="alternate" hrefLang="pt-PT" href="https://imperioweb.pt/contacto" />
        <link rel="alternate" hrefLang="en" href="https://imperioweb.pt/contacto" />
        <meta property="og:locale" content={language === "pt" ? "pt_PT" : "en_US"} />
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
              <p className="text-lg text-muted-foreground mb-6">
                {t("contactPage.description")}
              </p>
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  {t("contactPage.ctaButton")}
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold font-display mb-4">
                    {t("contactPage.talkTitle")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("contactPage.talkDescription")}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t("contactPage.locationTitle")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("contactPage.locationText")}<br />
                        {t("contactPage.locationSubText")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t("contactPage.emailTitle")}</h3>
                      <a 
                        href="mailto:info@imperioweb.pt" 
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        info@imperioweb.pt
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t("contactPage.whatsappTitle")}</h3>
                      <a 
                        href="https://wa.me/351910000000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        +351 910 000 000
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp CTA */}
                <div className="p-6 rounded-2xl bg-gradient-card border border-primary/30 shadow-glow">
                  <h3 className="font-semibold font-display mb-2">{t("contactPage.quickResponseTitle")}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("contactPage.quickResponseDescription")}
                  </p>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a
                      href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("contactPage.quickResponseCta")}
                      <ArrowRight size={18} />
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3"
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