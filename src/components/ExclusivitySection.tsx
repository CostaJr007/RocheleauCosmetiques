import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Lock, Sparkles, Crown } from "lucide-react";
import { toast } from "sonner";

const ExclusivitySection = () => {
  const [form, setForm] = useState({ name: "", email: "", source: "", code: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Merci! Votre demande d'invitation a été envoyée. Nous vous contacterons bientôt.");
    setForm({ name: "", email: "", source: "", code: "" });
  };

  return (
    <section id="exclusividade" className="py-24 lg:py-32 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6 mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-5 h-5 text-primary" />
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
              Clube Privado
            </p>
            <Crown className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-light">
            Exclusividade & <span className="italic">Acesso</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Roche Leau é uma marca de luxo com distribuição limitada. Nossos produtos são vendidos
            exclusivamente por indicação. Receba seu convite pessoal e faça parte do nosso círculo
            privado de skincare.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Lock, title: "Acesso Exclusivo", desc: "Produtos disponíveis somente para membros convidados" },
            { icon: Sparkles, title: "Qualidade Premium", desc: "Formulações de luxo com ingredientes naturais raros" },
            { icon: Crown, title: "Experiência VIP", desc: "Atendimento personalizado e benefícios especiais" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
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
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-lg border border-border/50">
            <h3 className="text-2xl font-display font-semibold text-center mb-6">
              Solicitar Indicação
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Votre nom complet"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="font-body"
              />
              <Input
                type="email"
                placeholder="Votre email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="font-body"
              />
              <Textarea
                placeholder="Comment avez-vous connu Roche Leau?"
                value={form.source}
                onChange={(e) => setForm({ ...form, source: e.target.value })}
                className="font-body"
                rows={3}
              />
              <Input
                placeholder="Code de parrainage (optionnel)"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                className="font-body"
              />
              <Button type="submit" className="w-full text-sm tracking-wider uppercase font-body py-5">
                Envoyer ma Demande
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
