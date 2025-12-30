import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Criação de Sites em Lisboa e Margem Sul | Desde 200€ | Império Web</title>
        <meta
          name="description"
          content="Criação de sites profissionais para negócios locais em Lisboa e Margem Sul. Sites focados em gerar contactos via WhatsApp. Desde 200€. Resposta em 24h."
        />
        <meta
          name="keywords"
          content="criação de sites margem sul, agência digital lisboa, sites para pequenos negócios portugal, criação de sites portugal, landing pages conversão, sites whatsapp"
        />
        <link rel="canonical" href="https://imperioweb.pt" />
        <meta property="og:title" content="Criação de Sites em Lisboa e Margem Sul | Desde 200€ | Império Web" />
        <meta
          property="og:description"
          content="Sites profissionais para negócios locais focados em gerar contactos via WhatsApp. Desde 200€."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <TestimonialsSection />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
