import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReferral } from "@/contexts/ReferralContext";
import logo from "@/assets/logo-alt.jpg";

const navItems = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Boutique Exclusiva", href: "/boutique" },
  { label: "À Propos", href: "/#apropos" },
  { label: "Ingrédients", href: "/#ingredients" },
  { label: "Durabilité", href: "/#durabilite" },
  { label: "Programme d'Indication", href: "/#programme" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isUnlocked } = useReferral();
  const location = useLocation();

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
            <img src={logo} alt="Cosmétiques ROCHE LEAU" className="h-10 lg:h-14 w-auto" />
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xs font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-foreground/60 hover:text-foreground transition-colors" aria-label="Language">
              <Globe className="w-4 h-4" />
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
              className="hidden lg:inline-flex text-xs tracking-wider uppercase font-body"
              onClick={() => handleNavClick("/#exclusividade")}
            >
              Solicitar Indicação
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
        <div className="xl:hidden bg-background/98 backdrop-blur-lg border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-sm font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="block text-sm font-body font-medium tracking-wider uppercase text-foreground/80 hover:text-primary py-2 w-full text-left"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button className="w-full text-xs tracking-wider uppercase font-body mt-4" onClick={() => handleNavClick("/#exclusividade")}>
              Solicitar Indicação
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
