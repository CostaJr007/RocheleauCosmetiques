import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import lifestyle from "@/assets/lifestyle3.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
                Cosmétiques Naturels • 100% Écologique
              </p>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-light leading-[0.9] tracking-tight">
              Cosmétiques
              <br />
              <span className="font-semibold text-primary">ROCHE</span>{" "}
              <span className="font-light">LEAU</span>
            </h1>

            <p className="text-xl sm:text-2xl font-display italic text-foreground/70 max-w-lg">
              Hydratation Pure. Naturelle. Éclatante.
            </p>

            <div className="flex items-center gap-3">
              <span className="w-12 h-px bg-primary" />
              <p className="text-sm font-body font-medium tracking-wider uppercase text-primary/80">
                Coleção Exclusiva • Disponível apenas por indicação e convite
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="text-sm tracking-wider uppercase font-body px-10 py-6"
                onClick={() => scrollTo("exclusividade")}
              >
                Solicitar Meu Convite
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-sm tracking-wider uppercase font-body px-10 py-6 border-foreground/20"
                onClick={() => scrollTo("apropos")}
              >
                Conhecer a Marca
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
                alt="Femme utilisant les crèmes Cosmétiques ROCHE LEAU"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
