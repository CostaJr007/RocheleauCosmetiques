import { motion } from "framer-motion";
import { Lock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import jars from "@/assets/jars.jpg";
import tubes from "@/assets/tubes.jpg";
import lifestyle1 from "@/assets/lifestyle1.png";
import lifestyle2 from "@/assets/lifestyle2.png";

const products = [
  { name: "Crème Hydratante Suprême", price: "€189", image: jars, badge: "Best-seller", desc: "Crème de luxe à l'hydratation intense pour un éclat naturel" },
  { name: "Sérum Éclat Naturel", price: "€159", image: lifestyle1, badge: "Edição Limitada", desc: "Sérum concentré aux actifs naturels pour une peau radieuse" },
  { name: "Kit Multi-usage Couleur", price: "€129", image: tubes, badge: "Best-seller", desc: "Collection de soins multi-usage aux couleurs vibrantes" },
  { name: "Crème Nuit Réparatrice", price: "€199", image: lifestyle2, badge: "Nouveau", desc: "Soin nocturne régénérant pour une peau éclatante au réveil" },
];

const FeaturedProducts = () => (
  <section id="produits" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-16"
      >
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
          Coleção Exclusiva
        </p>
        <h2 className="text-4xl lg:text-5xl font-display font-light">
          Nos Produits <span className="italic">Phares</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto">
          Disponível apenas por indicação e convite
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-primary text-primary-foreground text-[10px] font-body font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-display font-semibold">{p.name}</h3>
              <p className="text-xs font-body text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-lg font-display font-bold text-primary">{p.price}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full text-[10px] tracking-wider uppercase font-body mt-2 gap-2"
                disabled
              >
                <Lock className="w-3 h-3" />
                Ver Produto (Apenas com convite)
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
