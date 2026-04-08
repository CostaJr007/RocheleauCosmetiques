import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Users, Share2, Copy } from "lucide-react";
import { toast } from "sonner";

const ReferralProgram = () => {
  const [email, setEmail] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "ROCHE" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedLink(`cosmetiquesrocheleau.com/invite/${code}`);
    toast.success("Votre lien de parrainage a été généré!");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    toast.success("Lien copié!");
  };

  return (
    <section id="programme" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">
            Programme Exclusif
          </p>
          <h2 className="text-4xl lg:text-5xl font-display font-light">
            Programme <span className="italic">d'Indication</span>
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Convide uma amiga e ganhe benefícios exclusivos. Cada indicação fortalece nosso círculo
            privado de beleza natural.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Share2, title: "Compartilhe", desc: "Envie seu link exclusivo para amigas que apreciam skincare de luxo", step: "01" },
            { icon: Users, title: "Indique", desc: "Sua amiga recebe um convite especial para acessar nossa boutique privada", step: "02" },
            { icon: Gift, title: "Ganhe", desc: "Ambas recebem benefícios exclusivos e descontos especiais", step: "03" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border/50 text-center"
            >
              <span className="absolute top-4 right-4 text-4xl font-display font-bold text-primary/10">
                {item.step}
              </span>
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
              <p className="text-sm font-body text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-lg border border-border/50"
        >
          <h3 className="text-xl font-display font-semibold text-center mb-6">
            Gerar Meu Link de Indicação
          </h3>
          <form onSubmit={handleGenerate} className="space-y-4">
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="font-body"
            />
            <Button type="submit" className="w-full text-sm tracking-wider uppercase font-body">
              Gerar Link
            </Button>
          </form>
          {generatedLink && (
            <div className="mt-4 p-3 bg-accent rounded-lg flex items-center gap-2">
              <span className="text-xs font-body text-foreground/80 truncate flex-1">{generatedLink}</span>
              <button onClick={copyLink} className="text-primary hover:text-primary/80 transition-colors">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralProgram;
