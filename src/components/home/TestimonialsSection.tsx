import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finalmente tenho um site profissional que me traz contactos todos os dias via WhatsApp. Vale cada euro investido!",
    author: "Carlos M.",
    role: "Dono de Restaurante",
    location: "Almada",
  },
  {
    quote: "A equipa da Império Web entendeu exatamente o que precisava. O site ficou pronto em menos de uma semana.",
    author: "Ana S.",
    role: "Cabeleireira",
    location: "Lisboa",
  },
  {
    quote: "Profissionais, rápidos e com preços justos. Recomendo a qualquer negócio local que queira crescer online.",
    author: "Miguel R.",
    role: "Canalizador",
    location: "Seixal",
  },
];

const TestimonialsSection = () => {
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
            O Que Dizem os Nossos Clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Negócios que{" "}
            <span className="text-gradient">Cresceram Connosco</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja como ajudamos negócios locais em Lisboa e Margem Sul a terem mais presença online.
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
          Quer ver o seu negócio aqui? Fale connosco e seja o próximo caso de sucesso.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
