import { motion } from "framer-motion";
import lifestyle from "@/assets/lifestyle1.png";
import jars from "@/assets/jars.jpg";

const AboutSection = () => (
  <section id="apropos" className="py-24 lg:py-32 bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
              À Propos de Nous
            </p>
            <h2 className="text-4xl lg:text-5xl font-display font-light leading-tight">
              L'Art de la <span className="italic">Beauté Naturelle</span>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
            <p>
              Roche Leau é uma marca francesa de cosméticos naturais de luxo dedicada à hidratação pura
              e ao brilho natural da pele. Formulados com ingredientes ecológicos e vendidos exclusivamente
              por indicação.
            </p>
            <p>
              Chaque produit est le fruit d'une recherche approfondie, alliant les bienfaits de la nature
              à l'innovation scientifique pour offrir une expérience de soin incomparable.
            </p>
            <p>
              Notre engagement envers l'excellence se reflète dans chaque détail — de la sélection des
              ingrédients les plus purs à nos emballages éco-responsables.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { num: "100%", label: "Écologique" },
              { num: "50+", label: "Ingrédients Naturels" },
              { num: "10K+", label: "Membres VIP" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl lg:text-3xl font-display font-bold text-primary">{s.num}</p>
                <p className="text-xs font-body text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <img
              src={lifestyle}
              alt="Application du soin Roche Leau"
              className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <img
              src={jars}
              alt="Produits Cosmétiques Roche Leau"
              className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover mt-12"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
