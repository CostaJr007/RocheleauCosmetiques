import { motion } from "framer-motion";
import { Recycle, TreePine, Heart, Shield } from "lucide-react";

const SustainabilitySection = () => (
  <section id="durabilite" className="py-24 lg:py-32 bg-accent/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
              Notre Engagement
            </p>
            <h2 className="text-4xl lg:text-5xl font-display font-light">
              100% <span className="italic">Écologique</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-body leading-relaxed">
            Chez Roche Leau, chaque décision est guidée par notre respect profond pour la nature.
            Des ingrédients durables aux emballages recyclables, nous nous engageons à préserver
            la beauté de notre planète.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Recycle, label: "Emballages Recyclables" },
              { icon: TreePine, label: "Ingrédients Durables" },
              { icon: Heart, label: "Sans Tests Animaux" },
              { icon: Shield, label: "Sans Parabènes" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-body font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden aspect-video"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src="/videos/hero2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default SustainabilitySection;
