import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const AreasServedSection = () => {
  const { language } = useLanguage();

  const areas = [
    { region: "Lisboa", cities: ["Lisboa Centro", "Oeiras", "Cascais", "Sintra", "Amadora", "Loures"] },
    { region: "Margem Sul", cities: ["Almada", "Costa da Caparica", "Seixal", "Barreiro", "Montijo", "Setúbal"] },
    { region: "Norte", cities: ["Porto", "Braga", "Guimarães", "Vila Nova de Gaia", "Matosinhos"] },
    { region: "Centro", cities: ["Coimbra", "Leiria", "Aveiro", "Viseu", "Santarém"] },
  ];

  return (
    <section className="py-12 bg-muted/30">
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
              {language === "pt" ? "Áreas Atendidas em Portugal" : "Areas Served in Portugal"}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            {language === "pt" 
              ? "Servimos negócios em todo Portugal e Europa. Atendimento local na zona de Lisboa e Margem Sul, e serviço remoto para todo o país."
              : "We serve businesses across Portugal and Europe. Local service in the Lisbon area and remote service for the whole country."
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {areas.map((area, index) => (
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          {language === "pt" 
            ? "🌍 Também servimos clientes em toda a Europa via trabalho remoto."
            : "🌍 We also serve clients across Europe via remote work."
          }
        </motion.p>
      </div>
    </section>
  );
};

export default AreasServedSection;