import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lifestyle1 from "@/assets/lifestyle1.png";
import modelRedhead from "@/assets/model-redhead.png";
import modelProducts from "@/assets/model-products.png";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    { text: t("test.t1.text"), name: "Marie Laurent", role: t("test.t1.role"), image: lifestyle1 },
    { text: t("test.t2.text"), name: "Sophie Dubois", role: t("test.t2.role"), image: modelRedhead },
    { text: t("test.t3.text"), name: "Camille Martin", role: t("test.t3.role"), image: modelProducts },
  ];

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12 sm:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("test.badge")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
            <span className="italic">{t("test.title")}</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative">
                <img src={testimonials[current].image} alt={testimonials[current].name} className="rounded-xl sm:rounded-2xl shadow-lg w-full aspect-[3/4] object-cover" />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/30" />
                <p className="text-base sm:text-xl font-display italic leading-relaxed text-foreground/80">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="text-base font-display font-semibold">{testimonials[current].name}</p>
                  <p className="text-sm font-body text-muted-foreground">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8 sm:mt-10">
            <button onClick={prev} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors" aria-label="Previous">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors" aria-label="Next">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
