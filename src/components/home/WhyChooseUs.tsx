import { Check, Zap, Shield, HeartHandshake, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    title: "Sites Prontos em Dias",
    description: "Projetos entregues rapidamente para você começar a receber contactos o mais rápido possível.",
  },
  {
    icon: MessageCircle,
    title: "Integração WhatsApp",
    description: "Botões de contacto direto que facilitam a comunicação com os seus potenciais clientes.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Contínuo",
    description: "Acompanhamento dedicado antes, durante e após a entrega do seu projeto.",
  },
];

const features = [
  "Sites para pequenos negócios em Portugal",
  "Design responsivo para telemóvel",
  "Otimização SEO para Google",
  "Integração com WhatsApp",
  "Sem mensalidades obrigatórias",
  "Suporte em português",
];

const WhyChooseUs = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho um negócio local e gostaria de saber como funciona a criação de um site para gerar mais contactos."
  );

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Agência Digital em Lisboa
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              Porquê Escolher a{" "}
              <span className="text-gradient">Império Web</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Especialistas em criação de sites na Margem Sul e Lisboa. Ajudamos negócios locais a terem presença online profissional e a gerarem mais contactos.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={`https://wa.me/351910000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Receber Proposta para o Meu Negócio
              </a>
            </Button>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display text-lg mb-2 text-foreground">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
