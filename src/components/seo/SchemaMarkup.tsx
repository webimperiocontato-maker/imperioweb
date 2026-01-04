import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SchemaMarkupProps {
  includeFAQ?: boolean;
}

const SchemaMarkup = ({ includeFAQ = false }: SchemaMarkupProps) => {
  const { t, language } = useLanguage();

  // Organization/ProfessionalService Schema - Europe focused
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": "https://imperioweb.eu/#organization",
    name: t("schema.businessName"),
    alternateName: ["Império Web", "ImperioWeb", "Império Web EU", "Imperio Web Portugal"],
    description: t("schema.businessDescription"),
    url: "https://imperioweb.eu",
    logo: "https://imperioweb.eu/android-chrome-512x512.png",
    image: "https://imperioweb.eu/og-image.png",
    telephone: "+351920804088",
    email: "webimperiocontato@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Costa da Caparica",
      addressRegion: "Setúbal",
      addressCountry: "PT",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Portugal",
      },
      {
        "@type": "Continent",
        name: "Europe",
      },
      {
        "@type": "AdministrativeArea",
        name: "European Union",
      },
      {
        "@type": "City",
        name: "Lisbon",
        alternateName: "Lisboa",
      },
      {
        "@type": "City",
        name: "Porto",
      },
      {
        "@type": "City",
        name: "Braga",
      },
      {
        "@type": "City",
        name: "Cascais",
      },
      {
        "@type": "City",
        name: "Sintra",
      },
      {
        "@type": "City",
        name: "Setúbal",
      },
      {
        "@type": "City",
        name: "Braga",
      },
      {
        "@type": "City",
        name: "Coimbra",
      },
    ],
    serviceArea: {
      "@type": "GeoShape",
      name: "Portugal and European Union",
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Bank Transfer, MBWay",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/imperioweb.eu",
      "https://www.facebook.com/imperioweb.eu",
      "https://www.linkedin.com/company/imperioweb",
    ],
    knowsLanguage: ["pt-PT", "en"],
    slogan: language === "pt" ? "Sites que trazem clientes" : "Websites that bring customers",
  };

  // Service Schema - Europe focused
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "ProfessionalService",
      name: "Império Web",
      "@id": "https://imperioweb.eu/#organization",
    },
    areaServed: [
      { "@type": "Country", name: "Portugal" },
      { "@type": "Continent", name: "Europe" },
      { "@type": "AdministrativeArea", name: "European Union" },
      { "@type": "City", name: "Lisbon" },
      { "@type": "City", name: "Porto" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: "Portugal",
      },
      availableLanguage: ["Portuguese", "English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: language === "pt" ? "Serviços de Criação Web" : "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: language === "pt" ? "Criação de Sites" : "Website Creation",
            description: language === "pt" 
              ? "Sites profissionais para empresas em Portugal e Europa" 
              : "Professional websites for businesses in Portugal and Europe",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "200",
            priceCurrency: "EUR",
            minPrice: "200",
          },
          eligibleRegion: ["PT", "EU"],
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Pages",
            description: language === "pt" 
              ? "Páginas de alta conversão para campanhas de anúncios" 
              : "High-conversion pages for ad campaigns",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "200",
            priceCurrency: "EUR",
            minPrice: "200",
          },
          eligibleRegion: ["PT", "EU"],
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: language === "pt" ? "SEO e Google" : "SEO & Google",
            description: language === "pt" 
              ? "Otimização para pesquisas locais e internacionais" 
              : "Optimization for local and international searches",
          },
          eligibleRegion: ["PT", "EU"],
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: language === "pt" ? "Manutenção e Suporte" : "Maintenance & Support",
            description: language === "pt" 
              ? "Atualizações, backups e suporte técnico contínuo" 
              : "Updates, backups, and ongoing technical support",
          },
          eligibleRegion: ["PT", "EU"],
        },
      ],
    },
  };

  // FAQ Schema
  const faqSchema = includeFAQ
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: t("faq.q1"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a1"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q2"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a2"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q3"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a3"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q4"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a4"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q5"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a5"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q6"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a6"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q7"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a7"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q8"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a8"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q9"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a9"),
            },
          },
          {
            "@type": "Question",
            name: t("faq.q10"),
            acceptedAnswer: {
              "@type": "Answer",
              text: t("faq.a10"),
            },
          },
        ],
      }
    : null;

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://imperioweb.eu/#website",
    name: "Império Web",
    alternateName: ["ImperioWeb", "Império Web EU"],
    url: "https://imperioweb.eu",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SchemaMarkup;
