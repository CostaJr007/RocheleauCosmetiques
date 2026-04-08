import { motion } from "framer-motion";
import { Recycle, TreePine, Heart, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SustainabilitySection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Recycle, label: t("sust.s1") },
    { icon: TreePine, label: t("sust.s2") },
    { icon: Heart, label: t("sust.s3") },
    { icon: Shield, label: t("sust.s4") },
  ];

  return (
    <section id="durabilite" className="py-16 sm:py-24 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("sust.badge")}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
                100% <span className="italic">{t("sust.title")}</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed text-sm sm:text-base">{t("sust.desc")}</p>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-card border border-border/50">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-body font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-video">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-xl sm:rounded-2xl">
              <source src="/videos/hero2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-xl sm:rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
