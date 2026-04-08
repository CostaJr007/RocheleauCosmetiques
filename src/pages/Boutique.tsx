import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShoppingBag, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReferral } from "@/contexts/ReferralContext";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import jars from "@/assets/jars.jpg";
import tubes from "@/assets/tubes.jpg";
import lifestyle1 from "@/assets/lifestyle1.png";
import lifestyle2 from "@/assets/lifestyle2.png";
import lifestyle3 from "@/assets/lifestyle3.png";

const Boutique = () => {
  const { isUnlocked, unlock } = useReferral();
  const { t } = useLanguage();
  const [code, setCode] = useState("");
  const [filter, setFilter] = useState("all");
  const [codeError, setCodeError] = useState(false);

  const allProducts = [
    { name: t("prod.p1.name"), price: "€189", image: jars, cat: "creams", badge: t("prod.bestseller"), desc: t("prod.p1.desc") },
    { name: t("prod.p2.name"), price: "€159", image: lifestyle1, cat: "face", badge: t("prod.limited"), desc: t("prod.p2.desc") },
    { name: t("prod.p3.name"), price: "€129", image: tubes, cat: "tubes", badge: t("prod.bestseller"), desc: t("prod.p3.desc") },
    { name: t("prod.p4.name"), price: "€199", image: lifestyle2, cat: "creams", badge: t("prod.new"), desc: t("prod.p4.desc") },
    { name: t("shop.p5.name"), price: "€49", image: lifestyle3, cat: "face", badge: t("shop.exclusive"), desc: t("shop.p5.desc") },
    { name: t("shop.p6.name"), price: "€89", image: jars, cat: "face", badge: t("prod.bestseller"), desc: t("shop.p6.desc") },
  ];

  const categories = [
    { key: "all", label: t("shop.all") },
    { key: "creams", label: t("shop.creams") },
    { key: "face", label: t("shop.faceCare") },
    { key: "tubes", label: t("shop.tubes") },
  ];

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlock(code)) {
      toast.success(t("shop.unlocked.successToast"));
      setCodeError(false);
    } else {
      setCodeError(true);
      toast.error(t("shop.locked.errorToast"));
    }
  };

  const filtered = filter === "all" ? allProducts : allProducts.filter((p) => p.cat === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4 mb-10 sm:mb-12">
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("shop.badge")}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-light">
              {t("shop.title1")} <span className="italic">{t("shop.title2")}</span>
            </h1>
          </motion.div>

          {!isUnlocked ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg mx-auto">
              <div className="bg-card rounded-2xl p-8 sm:p-10 shadow-lg border border-border/50 text-center space-y-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                  <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-semibold">{t("shop.locked.title")}</h2>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{t("shop.locked.desc")}</p>
                <form onSubmit={handleUnlock} className="space-y-4">
                  <Input
                    placeholder={t("shop.locked.input")}
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setCodeError(false); }}
                    className={`font-body text-center text-base sm:text-lg tracking-wider uppercase py-5 ${codeError ? "border-destructive" : ""}`}
                  />
                  {codeError && <p className="text-xs font-body text-destructive">{t("shop.locked.error")}</p>}
                  <Button type="submit" className="w-full text-sm tracking-wider uppercase font-body py-5">{t("shop.locked.btn")}</Button>
                </form>
                <p className="text-xs font-body text-muted-foreground">
                  {t("shop.locked.nocode")}{" "}
                  <a href="/#exclusividade" className="text-primary underline">{t("shop.locked.request")}</a>
                </p>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 mb-6 sm:mb-8 text-primary">
                <Check className="w-4 h-4" />
                <span className="text-sm font-body font-medium">{t("shop.unlocked.badge")}</span>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setFilter(cat.key)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-body font-medium tracking-wider uppercase transition-colors ${
                      filter === cat.key ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-accent/80"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((p, i) => (
                  <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all">
                    <div className="relative aspect-square overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-primary-foreground text-[8px] sm:text-[10px] font-body font-semibold tracking-wider uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">{p.badge}</span>
                    </div>
                    <div className="p-3 sm:p-5 space-y-2 sm:space-y-3">
                      <h3 className="text-sm sm:text-lg font-display font-semibold leading-tight">{p.name}</h3>
                      <p className="text-[10px] sm:text-xs font-body text-muted-foreground hidden sm:block">{p.desc}</p>
                      <div className="flex items-center justify-between pt-1 sm:pt-2">
                        <span className="text-sm sm:text-lg font-display font-bold text-primary">{p.price}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => <Star key={j} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary text-primary" />)}
                        </div>
                      </div>
                      <Button className="w-full text-[9px] sm:text-xs tracking-wider uppercase font-body gap-1 sm:gap-2 py-2 sm:py-2.5">
                        <ShoppingBag className="w-3 h-3" />
                        {t("shop.addToCart")}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Boutique;
