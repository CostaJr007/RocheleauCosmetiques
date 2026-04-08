import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-background/80">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <img src={logo} alt="Cosmétiques ROCHE LEAU" className="h-16 w-auto rounded bg-background p-2" />
          <p className="text-sm font-body leading-relaxed text-background/60">
            Hydratation Pure. Naturelle. Éclatante.
            <br />
            Cosmétiques Naturels • 100% Écologique
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-body font-semibold tracking-wider uppercase text-background">Navigation</h4>
          <nav className="space-y-2">
            {["Accueil", "Boutique Exclusiva", "À Propos", "Programme d'Indication"].map((item) => (
              <Link key={item} to="/" className="block text-sm font-body text-background/50 hover:text-background transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-body font-semibold tracking-wider uppercase text-background">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-body text-background/50">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>contact@rocheleau.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-body text-background/50">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-body text-background/50">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Paris, France</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-body font-semibold tracking-wider uppercase text-background">Exclusivité</h4>
          <p className="text-sm font-body text-background/50 leading-relaxed">
            Marca de luxo exclusiva. Produtos disponíveis SOMENTE por indicação e convite.
          </p>
          <p className="text-xs font-body text-background/30 italic">
            Clube Privado Roche Leau
          </p>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-body text-background/40">
          © 2026 Cosmétiques ROCHE LEAU. Tous droits réservés.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-body text-background/40 hover:text-background/60 transition-colors">
            Politique de Confidentialité
          </a>
          <a href="#" className="text-xs font-body text-background/40 hover:text-background/60 transition-colors">
            Conditions Générales
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
