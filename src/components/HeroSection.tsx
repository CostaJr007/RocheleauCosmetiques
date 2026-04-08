import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const videos = ["/videos/hero1.mp4", "/videos/hero2.mp4", "/videos/hero3.mp4"];

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const vid = videoRefs.current[currentVideo];
    if (!vid) return;
    vid.currentTime = 0;
    vid.play().catch(() => {});

    const handleEnd = () => setCurrentVideo((c) => (c + 1) % videos.length);
    vid.addEventListener("ended", handleEnd);
    return () => vid.removeEventListener("ended", handleEnd);
  }, [currentVideo]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Multi-video background with crossfade */}
      {videos.map((src, i) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[i] = el; }}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === currentVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      {/* Video indicator dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentVideo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === currentVideo ? "bg-primary w-6" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Video ${i + 1}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center min-h-screen py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-2xl space-y-6 sm:space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[10px] sm:text-xs font-body font-medium tracking-[0.4em] uppercase text-primary"
            >
              {t("hero.badge")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-light leading-[0.9] tracking-tight text-white"
            >
              Cosmétiques
              <br />
              <span className="font-semibold text-primary">ROCHE</span>{" "}
              <span className="font-light">LEAU</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg sm:text-xl lg:text-2xl font-display italic text-white/70 max-w-lg"
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 sm:w-12 h-px bg-primary" />
              <p className="text-xs sm:text-sm font-body font-medium tracking-wider uppercase text-primary/80">
                {t("hero.exclusive")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
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
                className="text-xs sm:text-sm tracking-wider uppercase font-body px-6 sm:px-10 py-5 sm:py-6 border-white/20 text-white hover:bg-white/10"
                onClick={() => scrollTo("apropos")}
              >
                {t("hero.cta2")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => scrollTo("exclusividade")}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
