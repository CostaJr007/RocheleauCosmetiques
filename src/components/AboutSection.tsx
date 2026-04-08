import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import lifestyle from "@/assets/lifestyle1.png";
import jars from "@/assets/jars.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="apropos" className="py-16 sm:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("about.badge")}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light leading-tight">
                {t("about.title1")} <span className="italic">{t("about.title2")}</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm sm:text-base">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
              {[
                { num: "100%", label: t("about.stat1") },
                { num: "50+", label: t("about.stat2") },
                { num: "10K+", label: t("about.stat3") },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-primary">{s.num}</p>
                  <p className="text-[10px] sm:text-xs font-body text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src={lifestyle} alt="Roche Leau skincare" className="rounded-xl sm:rounded-2xl shadow-lg w-full aspect-[3/4] object-cover" loading="lazy" />
              <img src={jars} alt="Roche Leau products" className="rounded-xl sm:rounded-2xl shadow-lg w-full aspect-[3/4] object-cover mt-8 sm:mt-12" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
