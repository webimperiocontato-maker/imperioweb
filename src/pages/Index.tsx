import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LeadMagnetSection from "@/components/home/LeadMagnetSection";
import PackagesSection from "@/components/home/PackagesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <html lang={language === "pt" ? "pt-PT" : "en"} />
        <title>{t("seo.homeTitle")}</title>
        <meta name="description" content={t("seo.homeDescription")} />
        <meta name="keywords" content={t("seo.homeKeywords")} />
        <link rel="canonical" href="https://imperioweb.pt" />
        <link rel="alternate" hrefLang="pt-PT" href="https://imperioweb.pt" />
        <link rel="alternate" hrefLang="en" href="https://imperioweb.pt" />
        <link rel="alternate" hrefLang="x-default" href="https://imperioweb.pt" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t("seo.homeTitle")} />
        <meta property="og:description" content={t("seo.homeDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imperioweb.pt" />
        <meta property="og:image" content="https://imperioweb.pt/og-image.jpg" />
        <meta property="og:locale" content={language === "pt" ? "pt_PT" : "en_US"} />
        <meta property="og:site_name" content="Império Web" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.homeTitle")} />
        <meta name="twitter:description" content={t("seo.homeDescription")} />
        <meta name="twitter:image" content="https://imperioweb.pt/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Império Web" />
        <meta name="geo.region" content="PT" />
        <meta name="geo.placename" content="Costa da Caparica" />
      </Helmet>
      
      <SchemaMarkup includeFAQ={true} />
      
      <Layout>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <HowItWorksSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <LeadMagnetSection />
        <PackagesSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
