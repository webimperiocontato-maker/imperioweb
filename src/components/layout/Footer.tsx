import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
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
            {/* NAP - Name, Address, Phone */}
            <address className="not-italic text-xs text-muted-foreground space-y-1">
              <p className="font-medium text-foreground">Império Web</p>
              <p>Costa da Caparica, Portugal</p>
              <p>Email: info@imperioweb.eu</p>
              <p>Tel: +351 910 000 000</p>
            </address>
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
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.link3")}
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("common.about")}
              </Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {t("footer.link4")}
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

          {/* Contacto + Áreas Atendidas */}
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
                href="mailto:info@imperioweb.eu" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@imperioweb.eu</span>
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
            
            {/* Áreas Atendidas - SEO Local + Europa */}
            <div className="pt-2 border-t border-border/50">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Globe size={12} className="text-primary" />
                <span className="font-medium">Áreas Atendidas:</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Lisboa, Porto, Braga, Coimbra, Almada, Cascais, Sintra, Setúbal e todo Portugal. Serviço remoto para empresas na União Europeia.
              </p>
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
            <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("common.privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
