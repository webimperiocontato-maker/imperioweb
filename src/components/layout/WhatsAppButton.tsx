import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho um negócio local e gostaria de saber como funciona a criação de um site para gerar mais contactos."
  );

  return (
    <motion.a
      href={`https://wa.me/351910000000?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
      <span className="font-medium font-display hidden sm:inline">Fale Connosco</span>
    </motion.a>
  );
};

export default WhatsAppButton;
