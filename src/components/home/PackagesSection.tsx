import { Check, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesSection = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  const packages = [
    {
      name: t("packages.starterName"),
      description: t("packages.starterDesc"),
      price: t("packages.starterPrice"),
      priceNote: t("packages.starterPriceNote"),
      features: [
        t("packages.starterF1"),
        t("packages.starterF2"),
        t("packages.starterF3"),
        t("packages.starterF4"),
        t("packages.starterF5"),
      ],
      highlighted: false,
    },
    {
      name: t("packages.growthName"),
      description: t("packages.growthDesc"),
      price: t("packages.growthPrice"),
      priceNote: t("packages.growthPriceNote"),
      features: [
        t("packages.growthF1"),
        t("packages.growthF2"),
        t("packages.growthF3"),
        t("packages.growthF4"),
        t("packages.growthF5"),
        t("packages.growthF6"),
      ],
      highlighted: true,
    },
    {
      name: t("packages.premiumName"),
      description: t("packages.premiumDesc"),
      price: t("packages.premiumPrice"),
      priceNote: t("packages.premiumPriceNote"),
      features: [
        t("packages.premiumF1"),
        t("packages.premiumF2"),
        t("packages.premiumF3"),
        t("packages.premiumF4"),
        t("packages.premiumF5"),
        t("packages.premiumF6"),
        t("packages.premiumF7"),
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="section-padding" id="pacotes">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("packages.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("packages.headline")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("packages.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-gradient-card border-primary/40 shadow-glow scale-[1.02]"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                  <Sparkles size={12} />
                  {t("packages.popular")}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold font-display text-foreground mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold font-display text-gradient">
                  {pkg.price}
                </span>
                <span className="text-sm text-muted-foreground ml-2">{pkg.priceNote}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button 
                  variant={pkg.highlighted ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="#orcamento">
                    {t("packages.cta")}
                    <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="w-full text-muted-foreground" asChild>
                  <a
                    href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={16} />
                    {t("packages.whatsapp")}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;