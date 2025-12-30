import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";

interface SchemaMarkupProps {
  includeFAQ?: boolean;
}

const SchemaMarkup = ({ includeFAQ = false }: SchemaMarkupProps) => {
  const { t, language } = useLanguage();

  // Organization/LocalBusiness Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://imperioweb.eu/#organization",
    name: t("schema.businessName"),
    alternateName: ["Império Web", "ImperioWeb", "Império Web EU"],
    description: t("schema.businessDescription"),
    url: "https://imperioweb.eu",
    logo: "https://imperioweb.eu/logo.png",
    image: "https://imperioweb.eu/og-image.jpg",
    telephone: "+351910000000",
    email: "info@imperioweb.eu",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Costa da Caparica",
      addressRegion: "Setúbal",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.6453",
      longitude: "-9.2354",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Portugal",
      },
      {
        "@type": "City",
        name: "Lisboa",
      },
      {
        "@type": "City",
        name: "Almada",
      },
      {
        "@type": "Place",
        name: "Costa da Caparica",
      },
      {
        "@type": "Place",
        name: "Margem Sul",
      },
    ],
    priceRange: "€€",
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
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "LocalBusiness",
      name: "Império Web",
    },
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Criação Web",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Criação de Sites",
            description: "Sites institucionais e comerciais profissionais",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "200",
            priceCurrency: "EUR",
            minPrice: "200",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Pages",
            description: "Páginas de alta conversão para campanhas de anúncios",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "200",
            priceCurrency: "EUR",
            minPrice: "200",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Local",
            description: "Otimização para pesquisas locais e Google My Business",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manutenção e Suporte",
            description: "Atualizações, backups e suporte técnico contínuo",
          },
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
