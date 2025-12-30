import { MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileStickyBar = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t("whatsapp.defaultMessage"));

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-border safe-area-bottom">
      <div className="flex gap-2 p-3">
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1"
          asChild
        >
          <a href="#orcamento">
            <FileText size={18} />
            {t("mobileCta.quote")}
          </a>
        </Button>
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="flex-1"
          asChild
        >
          <a 
            href={`https://wa.me/351910000000?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            {t("mobileCta.whatsapp")}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyBar;
