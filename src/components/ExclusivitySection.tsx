import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Sparkles, Crown } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ExclusivitySection = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", source: "", code: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("excl.form.success"));
    setForm({ name: "", email: "", source: "", code: "" });
  };

  const cards = [
    { icon: Lock, title: t("excl.card1.title"), desc: t("excl.card1.desc") },
    { icon: Sparkles, title: t("excl.card2.title"), desc: t("excl.card2.desc") },
    { icon: Crown, title: t("excl.card3.title"), desc: t("excl.card3.desc") },
  ];

  return (
    <section id="exclusividade" className="py-16 sm:py-24 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6 mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-5 h-5 text-primary" />
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
              {t("excl.badge")}
            </p>
            <Crown className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
            {t("excl.title1")} <span className="italic">{t("excl.title2")}</span>
          </h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("excl.desc")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {cards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2">{item.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-border/50">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-center mb-6">
              {t("excl.form.title")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder={t("excl.form.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="font-body py-5" />
              <Input type="email" placeholder={t("excl.form.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="font-body py-5" />
              <Textarea placeholder={t("excl.form.source")} value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} className="font-body" rows={3} />
              <Input placeholder={t("excl.form.code")} value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} className="font-body py-5" />
              <Button type="submit" className="w-full text-sm tracking-wider uppercase font-body py-5">
                {t("excl.form.submit")}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
