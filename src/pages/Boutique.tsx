import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShoppingBag, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useReferral } from "@/contexts/ReferralContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import jars from "@/assets/jars.jpg";
import tubes from "@/assets/tubes.jpg";
import lifestyle1 from "@/assets/lifestyle1.png";
import lifestyle2 from "@/assets/lifestyle2.png";
import lifestyle3 from "@/assets/lifestyle3.png";

const allProducts = [
  { name: "Crème Hydratante Suprême", price: "€189", image: jars, cat: "Crèmes", badge: "Best-seller", desc: "Crème de luxe à l'hydratation intense" },
  { name: "Sérum Éclat Naturel", price: "€159", image: lifestyle1, cat: "Soins Visage", badge: "Edição Limitada", desc: "Sérum concentré aux actifs naturels" },
  { name: "Kit Tubes Multi-usage", price: "€129", image: tubes, cat: "Tubes", badge: "Best-seller", desc: "Collection de soins multi-usage" },
  { name: "Crème Nuit Réparatrice", price: "€199", image: lifestyle2, cat: "Crèmes", badge: "Nouveau", desc: "Soin nocturne régénérant" },
  { name: "Baume Lèvres Naturel", price: "€49", image: lifestyle3, cat: "Soins Visage", badge: "Exclusif", desc: "Hydratation et protection lèvres" },
  { name: "Lotion Tonique Pure", price: "€89", image: jars, cat: "Soins Visage", badge: "Best-seller", desc: "Lotion purifiante et revitalisante" },
];

const categories = ["Tous", "Crèmes", "Soins Visage", "Tubes"];

const Boutique = () => {
  const { isUnlocked, unlock } = useReferral();
  const [code, setCode] = useState("");
  const [filter, setFilter] = useState("Tous");
  const [codeError, setCodeError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (unlock(code)) {
      toast.success("Bienvenue! Votre accès exclusif est activé.");
      setCodeError(false);
    } else {
      setCodeError(true);
      toast.error("Code invalide. Vérifiez votre code d'invitation.");
    }
  };

  const filtered = filter === "Tous" ? allProducts : allProducts.filter((p) => p.cat === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-4 mb-12"
          >
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
              Accès Réservé aux Membres
            </p>
            <h1 className="text-4xl lg:text-6xl font-display font-light">
              Boutique <span className="italic">Exclusiva</span>
            </h1>
          </motion.div>

          {!isUnlocked ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-lg mx-auto"
            >
              <div className="bg-card rounded-2xl p-10 shadow-lg border border-border/50 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto">
                  <Lock className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-semibold">Acesso Exclusivo</h2>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Esta boutique é exclusiva. Insira seu código de indicação ou solicite seu convite
                  para acessar nossa coleção premium.
                </p>
                <form onSubmit={handleUnlock} className="space-y-4">
                  <Input
                    placeholder="Entrez votre code d'invitation"
                    value={code}
                    onChange={(e) => { setCode(e.target.value); setCodeError(false); }}
                    className={`font-body text-center text-lg tracking-wider uppercase ${codeError ? "border-destructive" : ""}`}
                  />
                  {codeError && (
                    <p className="text-xs font-body text-destructive">Code invalide. Essayez à nouveau.</p>
                  )}
                  <Button type="submit" className="w-full text-sm tracking-wider uppercase font-body py-5">
                    Valider Mon Accès
                  </Button>
                </form>
                <p className="text-xs font-body text-muted-foreground">
                  Pas encore de code?{" "}
                  <a href="/#exclusividade" className="text-primary underline">
                    Solicitar Indicação
                  </a>
                </p>
              </div>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 mb-8 text-primary"
              >
                <Check className="w-4 h-4" />
                <span className="text-sm font-body font-medium">Acesso Exclusivo Ativado</span>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-body font-medium tracking-wider uppercase transition-colors ${
                      filter === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground hover:bg-accent/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                        {p.badge}
                      </span>
                    </div>
                    <div className="p-5 space-y-3">
                      <p className="text-[10px] font-body font-medium tracking-wider uppercase text-muted-foreground">
                        {p.cat}
                      </p>
                      <h3 className="text-lg font-display font-semibold">{p.name}</h3>
                      <p className="text-xs font-body text-muted-foreground">{p.desc}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-display font-bold text-primary">{p.price}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <Button className="w-full text-xs tracking-wider uppercase font-body gap-2">
                        <ShoppingBag className="w-3 h-3" />
                        Ajouter au Panier
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
