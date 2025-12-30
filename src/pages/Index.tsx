import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import WhatWeDeliverSection from "@/components/home/WhatWeDeliverSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import PackagesSection from "@/components/home/PackagesSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
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
        <meta property="og:title" content={t("seo.homeTitle")} />
        <meta property="og:description" content={t("seo.homeDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === "pt" ? "pt_PT" : "en_US"} />
      </Helmet>
      <Layout>
        <HeroSection />
        <ProblemSection />
        <WhatWeDeliverSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PortfolioSection />
        <PackagesSection />
        <FAQSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;