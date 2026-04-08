import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lifestyle from "@/assets/lifestyle3.png";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/30 lg:to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-[10px] sm:text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
              {t("hero.badge")}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-light leading-[0.9] tracking-tight">
              Cosmétiques
              <br />
              <span className="font-semibold text-primary">ROCHE</span>{" "}
              <span className="font-light">LEAU</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl font-display italic text-foreground/70 max-w-lg">
              {t("hero.tagline")}
            </p>

            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-12 h-px bg-primary" />
              <p className="text-xs sm:text-sm font-body font-medium tracking-wider uppercase text-primary/80">
                {t("hero.exclusive")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                className="text-xs sm:text-sm tracking-wider uppercase font-body px-6 sm:px-10 py-5 sm:py-6"
                onClick={() => scrollTo("exclusividade")}
              >
                {t("hero.cta1")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-xs sm:text-sm tracking-wider uppercase font-body px-6 sm:px-10 py-5 sm:py-6 border-foreground/20"
                onClick={() => scrollTo("apropos")}
              >
                {t("hero.cta2")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl" />
              <img
                src={lifestyle}
                alt="Cosmétiques ROCHE LEAU skincare"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto object-cover aspect-[3/4]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollTo("exclusividade")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
