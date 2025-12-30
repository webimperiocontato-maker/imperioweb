import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-display">I</span>
              </div>
              <span className="text-xl font-bold font-display text-foreground">
                Império <span className="text-gradient">Web</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Agência digital especializada em criação de sites profissionais, landing pages de alta conversão e social media estratégico para negócios em Portugal.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link to="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Serviços</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Criação de Sites</span>
              <span className="text-sm text-muted-foreground">Landing Pages</span>
              <span className="text-sm text-muted-foreground">Social Media</span>
              <span className="text-sm text-muted-foreground">SEO & Marketing</span>
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Lisboa, Portugal</span>
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
            © {new Date().getFullYear()} Império Web. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Criação de Sites em Portugal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
