import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import lifestyle1 from "@/assets/lifestyle1.png";
import lifestyle2 from "@/assets/lifestyle2.png";
import lifestyle3 from "@/assets/lifestyle3.png";

const testimonials = [
  {
    text: "Les produits Roche Leau ont transformé ma peau. Une hydratation incomparable et un éclat naturel que je n'avais jamais atteint auparavant.",
    name: "Marie Laurent",
    role: "Membre VIP depuis 2024",
    image: lifestyle1,
  },
  {
    text: "Faire partie du club privé Roche Leau est une expérience unique. La qualité des produits et le service personnalisé sont exceptionnels.",
    name: "Sophie Dubois",
    role: "Membre Exclusif",
    image: lifestyle2,
  },
  {
    text: "J'ai recommandé Roche Leau à toutes mes amies. Les résultats parlent d'eux-mêmes — une peau radieuse et naturellement belle.",
    name: "Camille Martin",
    role: "Ambassadrice Roche Leau",
    image: lifestyle3,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
            Membres Exclusifs
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-light">
            <span className="italic">Témoignages</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="rounded-2xl shadow-lg w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="space-y-6">
                <Quote className="w-10 h-10 text-primary/30" />
                <p className="text-xl font-display italic leading-relaxed text-foreground/80">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="text-base font-display font-semibold">{testimonials[current].name}</p>
                  <p className="text-sm font-body text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
