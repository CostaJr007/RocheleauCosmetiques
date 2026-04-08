import { motion } from "framer-motion";
import { Leaf, Droplets, Sparkles, Crown } from "lucide-react";

const benefits = [
  { icon: Leaf, title: "100% Écologique", desc: "Ingredients naturais, embalagens sustentáveis, zero impacto ambiental" },
  { icon: Droplets, title: "Hydratation Pure", desc: "Formulações avançadas para hidratação profunda e duradoura" },
  { icon: Sparkles, title: "Ingrédients Naturels", desc: "Apenas os ingredientes mais puros e eficazes da natureza" },
  { icon: Crown, title: "Experiência Exclusiva", desc: "Atendimento VIP e acesso a produtos de edição limitada" },
];

const BenefitsSection = () => (
  <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-display font-light">
          Pourquoi Choisir <span className="italic">Roche Leau</span>
        </h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10"
          >
            <b.icon className="w-8 h-8 mx-auto mb-4 text-primary-foreground/90" />
            <h3 className="text-lg font-display font-semibold mb-2">{b.title}</h3>
            <p className="text-sm font-body text-primary-foreground/70">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
