import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.testimonial1Quote"),
      author: t("testimonials.testimonial1Author"),
      business: t("testimonials.testimonial1Business"),
      location: t("testimonials.testimonial1Location"),
      result: t("testimonials.testimonial1Result"),
    },
    {
      quote: t("testimonials.testimonial2Quote"),
      author: t("testimonials.testimonial2Author"),
      business: t("testimonials.testimonial2Business"),
      location: t("testimonials.testimonial2Location"),
      result: t("testimonials.testimonial2Result"),
    },
    {
      quote: t("testimonials.testimonial3Quote"),
      author: t("testimonials.testimonial3Author"),
      business: t("testimonials.testimonial3Business"),
      location: t("testimonials.testimonial3Location"),
      result: t("testimonials.testimonial3Result"),
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4">
            {t("testimonials.headline")} <span className="text-gradient">{t("testimonials.headlineHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("testimonials.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border relative"
            >
              <Quote size={28} className="text-primary/20 mb-4" />
              
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.business} • {testimonial.location}
                </p>
                <p className="text-xs text-primary mt-1 font-medium">
                  {testimonial.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;