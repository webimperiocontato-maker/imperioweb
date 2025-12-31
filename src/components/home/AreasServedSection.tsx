import { MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AreasServedSection = () => {
  const { language } = useLanguage();

  const areasPortugal = [
    { 
      region: "Lisboa", 
      cities: ["Lisboa Centro", "Oeiras", "Cascais", "Sintra", "Amadora", "Loures", "Almada", "Seixal"] 
    },
    { 
      region: "Porto", 
      cities: ["Porto Centro", "Vila Nova de Gaia", "Matosinhos", "Maia", "Gondomar", "Braga"] 
    },
    { 
      region: "Centro", 
      cities: ["Coimbra", "Leiria", "Aveiro", "Viseu", "Santarém", "Setúbal"] 
    },
    { 
      region: language === "pt" ? "Todo Portugal" : "All Portugal", 
      cities: language === "pt" 
        ? ["Norte", "Centro", "Lisboa", "Alentejo", "Algarve", "Ilhas"] 
        : ["North", "Center", "Lisbon", "Alentejo", "Algarve", "Islands"]
    },
  ];

  const europeService = {
    title: language === "pt" ? "Serviço Remoto — Europa" : "Remote Service — Europe",
    description: language === "pt" 
      ? "Atendemos empresas em toda a União Europeia através de trabalho remoto. Comunicação em Português e Inglês."
      : "We serve businesses across the European Union through remote work. Communication in Portuguese and English.",
    countries: language === "pt"
      ? ["Espanha", "França", "Alemanha", "Países Baixos", "Bélgica", "Itália", "Irlanda", "Reino Unido"]
      : ["Spain", "France", "Germany", "Netherlands", "Belgium", "Italy", "Ireland", "United Kingdom"],
  };

  return (
    <section className="py-12 bg-muted/30" id="areas-atendidas">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={20} className="text-primary" />
            <h2 className="text-xl md:text-2xl font-bold font-display">
              {language === "pt" 
                ? "Criação de Sites em Lisboa, Porto e toda a Europa" 
                : "Website Creation in Lisbon, Porto and across Europe"}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {language === "pt" 
              ? "Atendemos negócios em Portugal e na União Europeia. Serviço presencial na zona de Lisboa e Porto, remoto para toda a Europa."
              : "We serve businesses in Portugal and the European Union. On-site service in the Lisbon and Porto areas, remote for all of Europe."
            }
          </p>
        </motion.div>

        {/* Portugal Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {areasPortugal.map((area, index) => (
            <div key={index} className="text-center">
              <h3 className="font-semibold text-foreground mb-2">{area.region}</h3>
              <ul className="space-y-1">
                {area.cities.map((city, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground">{city}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Europe Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe size={18} className="text-primary" />
            <h3 className="font-semibold text-foreground">{europeService.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
            {europeService.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {europeService.countries.map((country, idx) => (
              <span 
                key={idx} 
                className="text-xs bg-background border border-border rounded-full px-3 py-1 text-muted-foreground"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          {language === "pt" 
            ? "🌍 Web design para empresas em Portugal e União Europeia. Comunicação em PT e EN."
            : "🌍 Web design for businesses in Portugal and the European Union. Communication in PT and EN."
          }
        </motion.p>
      </div>
    </section>
  );
};

export default AreasServedSection;