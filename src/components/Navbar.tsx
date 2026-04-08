import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReferral } from "@/contexts/ReferralContext";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo-alt.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isUnlocked } = useReferral();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "/#accueil" },
    { label: t("nav.shop"), href: "/boutique" },
    { label: t("nav.about"), href: "/#apropos" },
    { label: t("nav.ingredients"), href: "/#ingredients" },
    { label: t("nav.sustainability"), href: "/#durabilite" },
    { label: t("nav.referral"), href: "/#programme" },
    { label: t("nav.contact"), href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const el = document.getElementById(href.replace("/#", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Cosmétiques ROCHE LEAU"
              className="h-9 sm:h-10 lg:h-12 w-auto object-contain"
            />
          </Link>

          <div className="hidden xl:flex items-center gap-5">
            {navItems.map((item) =>
              item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[11px] font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-[11px] font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-body font-semibold tracking-wider uppercase border border-border/60 hover:bg-accent transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "fr" ? "EN" : "FR"}</span>
            </button>
            <button
              className={`p-2 transition-colors ${isUnlocked ? "text-primary" : "text-foreground/30 cursor-not-allowed"}`}
              disabled={!isUnlocked}
              aria-label="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <Button
              size="sm"
              className="hidden lg:inline-flex text-[10px] tracking-wider uppercase font-body px-4"
              onClick={() => handleNavClick("/#exclusividade")}
            >
              {t("nav.requestInvite")}
            </Button>
            <button
              className="xl:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item) =>
              item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-sm font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary py-2.5 border-b border-border/30"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-sm font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary py-2.5 w-full text-left border-b border-border/30"
                >
                  {item.label}
                </button>
              )
            )}
            <Button
              className="w-full text-xs tracking-wider uppercase font-body mt-4 py-5"
              onClick={() => handleNavClick("/#exclusividade")}
            >
              {t("nav.requestInvite")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
