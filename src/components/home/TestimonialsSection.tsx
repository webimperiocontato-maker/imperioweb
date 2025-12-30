import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: t("testimonials.testimonial1Quote"),
      author: t("testimonials.testimonial1Author"),
      role: t("testimonials.testimonial1Role"),
      location: t("testimonials.testimonial1Location"),
    },
    {
      quote: t("testimonials.testimonial2Quote"),
      author: t("testimonials.testimonial2Author"),
      role: t("testimonials.testimonial2Role"),
      location: t("testimonials.testimonial2Location"),
    },
    {
      quote: t("testimonials.testimonial3Quote"),
      author: t("testimonials.testimonial3Author"),
      role: t("testimonials.testimonial3Role"),
      location: t("testimonials.testimonial3Location"),
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t("testimonials.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            {t("testimonials.headline")}{" "}
            <span className="text-gradient">{t("testimonials.headlineHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("testimonials.description")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border"
            >
              <Quote size={32} className="text-primary/30 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future testimonials placeholder */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          {t("testimonials.ctaText")}
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;