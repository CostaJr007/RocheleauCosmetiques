import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, FlaskConical } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const IngredientsSection = () => {
  const { t } = useLanguage();

  const ingredients = [
    { icon: Droplets, title: t("ingr.i1.title"), desc: t("ingr.i1.desc") },
    { icon: Leaf, title: t("ingr.i2.title"), desc: t("ingr.i2.desc") },
    { icon: Sun, title: t("ingr.i3.title"), desc: t("ingr.i3.desc") },
    { icon: FlaskConical, title: t("ingr.i4.title"), desc: t("ingr.i4.desc") },
  ];

  return (
    <section id="ingredients" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12 sm:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("ingr.badge")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
            {t("ingr.title1")} <span className="italic">{t("ingr.title2")}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ingredients.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all text-center">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="text-sm sm:text-lg font-display font-semibold mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
