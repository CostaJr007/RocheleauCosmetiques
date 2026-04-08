import { motion } from "framer-motion";
import { Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import jars from "@/assets/jars.jpg";
import tubes from "@/assets/tubes.jpg";
import lifestyle1 from "@/assets/lifestyle1.png";
import lifestyle2 from "@/assets/lifestyle2.png";

const FeaturedProducts = () => {
  const { t } = useLanguage();

  const products = [
    { name: t("prod.p1.name"), price: "€189", image: jars, badge: t("prod.bestseller"), desc: t("prod.p1.desc") },
    { name: t("prod.p2.name"), price: "€159", image: lifestyle1, badge: t("prod.limited"), desc: t("prod.p2.desc") },
    { name: t("prod.p3.name"), price: "€129", image: tubes, badge: t("prod.bestseller"), desc: t("prod.p3.desc") },
    { name: t("prod.p4.name"), price: "€199", image: lifestyle2, badge: t("prod.new"), desc: t("prod.p4.desc") },
  ];

  return (
    <section id="produits" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12 sm:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("prod.badge")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
            {t("prod.title1")} <span className="italic">{t("prod.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">{t("prod.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500">
              <div className="relative aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-primary-foreground text-[8px] sm:text-[10px] font-body font-semibold tracking-wider uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  {p.badge}
                </span>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-lg font-display font-semibold leading-tight">{p.name}</h3>
                <p className="text-[10px] sm:text-xs font-body text-muted-foreground leading-relaxed hidden sm:block">{p.desc}</p>
                <div className="flex items-center justify-between pt-1 sm:pt-2">
                  <span className="text-sm sm:text-lg font-display font-bold text-primary">{p.price}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full text-[8px] sm:text-[10px] tracking-wider uppercase font-body mt-1 sm:mt-2 gap-1 sm:gap-2 py-2 sm:py-2.5" disabled>
                  <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="hidden sm:inline">{t("prod.viewBtn")}</span>
                  <span className="sm:hidden">🔒</span>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
