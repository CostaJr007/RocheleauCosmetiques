import { motion } from "framer-motion";
import { Leaf, Droplets, Sparkles, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Leaf, title: t("ben.b1.title"), desc: t("ben.b1.desc") },
    { icon: Droplets, title: t("ben.b2.title"), desc: t("ben.b2.desc") },
    { icon: Sparkles, title: t("ben.b3.title"), desc: t("ben.b3.desc") },
    { icon: Crown, title: t("ben.b4.title"), desc: t("ben.b4.desc") },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
            {t("ben.title1")} <span className="italic">{t("ben.title2")}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
              <b.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-primary-foreground/90" />
              <h3 className="text-sm sm:text-lg font-display font-semibold mb-1 sm:mb-2">{b.title}</h3>
              <p className="text-xs sm:text-sm font-body text-primary-foreground/70">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
