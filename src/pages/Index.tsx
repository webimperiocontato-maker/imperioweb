import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PackagesSection from "@/components/home/PackagesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import MiniCasesSection from "@/components/home/MiniCasesSection";
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
        <link rel="canonical" href="https://imperioweb.eu/" />
        <link rel="alternate" hrefLang="pt-PT" href="https://imperioweb.eu/" />
        <link rel="alternate" hrefLang="en" href="https://imperioweb.eu/" />
        <link rel="alternate" hrefLang="x-default" href="https://imperioweb.eu/" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="Império Web" />
        <meta property="og:title" content={t("seo.homeTitle")} />
        <meta property="og:description" content={t("seo.homeDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imperioweb.eu/" />
        <meta property="og:image" content="https://imperioweb.eu/og-image.png" />
        <meta property="og:locale" content={language === "pt" ? "pt_PT" : "en_US"} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.homeTitle")} />
        <meta name="twitter:description" content={t("seo.homeDescription")} />
        <meta name="twitter:image" content="https://imperioweb.eu/og-image.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Império Web" />
        <meta name="geo.region" content="PT" />
        <meta name="geo.placename" content="Portugal" />
      </Helmet>
      
      <SchemaMarkup includeFAQ={true} />
      
      <Layout>
        <HeroSection />
        <PackagesSection />
        <HowItWorksSection />
        <MiniCasesSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
