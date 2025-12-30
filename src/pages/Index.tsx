import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Criação de Sites Profissionais em Portugal | Império Web</title>
        <meta
          name="description"
          content="Agência digital especializada em criação de sites, landing pages e social media para pequenas empresas e negócios locais em Lisboa e Margem Sul."
        />
        <meta
          name="keywords"
          content="criação de sites portugal, agência digital lisboa, sites para negócios locais, landing pages conversão, social media portugal"
        />
        <link rel="canonical" href="https://imperioweb.pt" />
        <meta property="og:title" content="Criação de Sites Profissionais em Portugal | Império Web" />
        <meta
          property="og:description"
          content="Agência digital especializada em criação de sites, landing pages e social media para pequenas empresas e negócios locais."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesPreview />
        <WhyChooseUs />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
