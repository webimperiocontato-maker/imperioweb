import { Globe, Rocket, Share2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites para negócios locais com integração WhatsApp. Comece a receber contactos em dias.",
    price: "Desde 200€",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "Páginas focadas em conversão para campanhas de anúncios e geração de leads.",
    price: "Projetos Premium",
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Gestão estratégica para aumentar visibilidade e atrair clientes nas redes sociais.",
    price: "Planos Mensais",
  },
  {
    icon: TrendingUp,
    title: "SEO Local",
    description: "Apareça no Google quando clientes procuram serviços na sua área.",
    price: "Consultoria",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ServicesPreview = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho um negócio local e gostaria de saber como funciona a criação de um site para gerar mais contactos."
  );

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
            Soluções para Negócios Locais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
            Sites que <span className="text-gradient">Geram Resultados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Criação de sites na Margem Sul e Lisboa. Transformamos a sua presença digital em contactos reais para o seu negócio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-display mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="text-primary font-medium text-sm">{service.price}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 space-y-4"
        >
          <Button variant="hero" size="lg" asChild>
            <a
              href={`https://wa.me/351910000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com um Especialista Agora
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            ou <Link to="/servicos" className="text-primary hover:underline">ver todos os serviços e preços</Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
