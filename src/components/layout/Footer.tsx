import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoCrown from "@/assets/logo-crown.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border pb-20 md:pb-0">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoCrown} alt="Império Web" className="w-8 h-8" />
              <span className="text-xl font-bold font-display text-foreground">
                Império <span className="text-gradient">Web</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">{t("footer.linksTitle")}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.link1")}
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.link2")}
              </Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.link4")}
              </Link>
              <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.link5")}
              </Link>
            </nav>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">{t("footer.servicesTitle")}</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.service1")}
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.service2")}
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.service3")}
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.service4")}
              </Link>
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">{t("footer.contactTitle")}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>{t("footer.location")}</p>
                  <p className="text-xs">{t("footer.locationSub")}</p>
                </div>
              </div>
              <a 
                href="mailto:info@imperioweb.pt" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@imperioweb.pt</span>
              </a>
              <a 
                href="https://wa.me/351910000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>+351 910 000 000</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Império Web. {t("common.rightsReserved")}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              {t("common.creationInPortugal")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
