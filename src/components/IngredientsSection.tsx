import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, FlaskConical } from "lucide-react";

const ingredients = [
  { icon: Droplets, title: "Eau de Source Pure", desc: "Eau minérale naturelle enrichie en oligo-éléments pour une hydratation profonde" },
  { icon: Leaf, title: "Extraits Botaniques", desc: "Plantes sélectionnées pour leurs propriétés régénérantes et apaisantes" },
  { icon: Sun, title: "Vitamine E Naturelle", desc: "Antioxydant puissant protégeant la peau des agressions extérieures" },
  { icon: FlaskConical, title: "Acide Hyaluronique", desc: "Molécule d'hydratation avancée pour une peau repulpée et éclatante" },
];

const IngredientsSection = () => (
  <section id="ingredients" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-16"
      >
        <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
          Pureté & Science
        </p>
        <h2 className="text-4xl lg:text-5xl font-display font-light">
          Nos <span className="italic">Ingrédients</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ingredients.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all text-center"
          >
            <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-3">{item.title}</h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IngredientsSection;
