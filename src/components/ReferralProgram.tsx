import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Users, Share2, Copy } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const ReferralProgram = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "ROCHE" + Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedLink(`cosmetiquesrocheleau.com/invite/${code}`);
    toast.success(t("ref.generate.success"));
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    toast.success(t("ref.generate.copied"));
  };

  const steps = [
    { icon: Share2, title: t("ref.step1.title"), desc: t("ref.step1.desc"), step: "01" },
    { icon: Users, title: t("ref.step2.title"), desc: t("ref.step2.desc"), step: "02" },
    { icon: Gift, title: t("ref.step3.title"), desc: t("ref.step3.desc"), step: "03" },
  ];

  return (
    <section id="programme" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center space-y-4 mb-12 sm:mb-16">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-primary">{t("ref.badge")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light">
            {t("ref.title1")} <span className="italic">{t("ref.title2")}</span>
          </h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto">{t("ref.desc")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border/50 text-center">
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-3xl sm:text-4xl font-display font-bold text-primary/10">{item.step}</span>
              <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-xs sm:text-sm font-body text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-md mx-auto bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
          <h3 className="text-lg sm:text-xl font-display font-semibold text-center mb-6">{t("ref.generate.title")}</h3>
          <form onSubmit={handleGenerate} className="space-y-4">
            <Input type="email" placeholder={t("ref.generate.email")} value={email} onChange={(e) => setEmail(e.target.value)} required className="font-body py-5" />
            <Button type="submit" className="w-full text-sm tracking-wider uppercase font-body py-5">{t("ref.generate.btn")}</Button>
          </form>
          {generatedLink && (
            <div className="mt-4 p-3 bg-accent rounded-lg flex items-center gap-2">
              <span className="text-xs font-body text-foreground/80 truncate flex-1">{generatedLink}</span>
              <button onClick={copyLink} className="text-primary hover:text-primary/80 transition-colors flex-shrink-0">
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
