import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.shop"), href: "/boutique" },
    { label: t("nav.about"), href: "/" },
    { label: t("nav.referral"), href: "/" },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <img src={logo} alt="Cosmétiques ROCHE LEAU" className="h-12 sm:h-14 w-auto rounded bg-background p-1.5" />
            <p className="text-xs sm:text-sm font-body leading-relaxed text-background/60">
              Hydratation Pure. Naturelle. Éclatante.
              <br />
              Cosmétiques Naturels • 100% Écologique
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-body font-semibold tracking-wider uppercase text-background">{t("footer.nav")}</h4>
            <nav className="space-y-2">
              {navLinks.map((item) => (
                <Link key={item.label} to={item.href} className="block text-xs sm:text-sm font-body text-background/50 hover:text-background transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-body font-semibold tracking-wider uppercase text-background">{t("footer.contact")}</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-body text-background/50">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>contact@rocheleau.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-body text-background/50">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-body text-background/50">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-body font-semibold tracking-wider uppercase text-background">{t("footer.exclusivity")}</h4>
            <p className="text-xs sm:text-sm font-body text-background/50 leading-relaxed">
              {t("footer.excl.text")}
            </p>
            <p className="text-[10px] sm:text-xs font-body text-background/30 italic">
              {t("footer.excl.club")}
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] sm:text-xs font-body text-background/40">
            © 2026 Cosmétiques ROCHE LEAU. {t("footer.rights")}
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-[10px] sm:text-xs font-body text-background/40 hover:text-background/60 transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="text-[10px] sm:text-xs font-body text-background/40 hover:text-background/60 transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
