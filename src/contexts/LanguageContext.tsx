import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "fr" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Nav
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.shop": { fr: "Boutique Exclusive", en: "Exclusive Boutique" },
  "nav.about": { fr: "À Propos", en: "About" },
  "nav.ingredients": { fr: "Ingrédients", en: "Ingredients" },
  "nav.sustainability": { fr: "Durabilité", en: "Sustainability" },
  "nav.referral": { fr: "Programme de Parrainage", en: "Referral Program" },
  "nav.contact": { fr: "Contact", en: "Contact" },
  "nav.requestInvite": { fr: "Demander une Invitation", en: "Request Invitation" },

  // Hero
  "hero.badge": { fr: "Cosmétiques Naturels • 100% Écologique", en: "Natural Cosmetics • 100% Ecological" },
  "hero.tagline": { fr: "Hydratation Pure. Naturelle. Éclatante.", en: "Pure. Natural. Radiant Hydration." },
  "hero.exclusive": { fr: "Collection Exclusive • Disponible uniquement sur invitation", en: "Exclusive Collection • Available by invitation only" },
  "hero.cta1": { fr: "Demander Mon Invitation", en: "Request My Invitation" },
  "hero.cta2": { fr: "Découvrir la Marque", en: "Discover the Brand" },

  // Exclusivity
  "excl.badge": { fr: "Club Privé", en: "Private Club" },
  "excl.title1": { fr: "Exclusivité &", en: "Exclusivity &" },
  "excl.title2": { fr: "Accès", en: "Access" },
  "excl.desc": {
    fr: "Roche Leau est une marque de luxe à distribution limitée. Nos produits sont vendus exclusivement sur recommandation. Recevez votre invitation personnelle et rejoignez notre cercle privé de soins.",
    en: "Roche Leau is a luxury brand with limited distribution. Our products are sold exclusively by referral. Receive your personal invitation and join our private skincare circle."
  },
  "excl.card1.title": { fr: "Accès Exclusif", en: "Exclusive Access" },
  "excl.card1.desc": { fr: "Produits disponibles uniquement pour les membres invités", en: "Products available only for invited members" },
  "excl.card2.title": { fr: "Qualité Premium", en: "Premium Quality" },
  "excl.card2.desc": { fr: "Formulations de luxe avec des ingrédients naturels rares", en: "Luxury formulations with rare natural ingredients" },
  "excl.card3.title": { fr: "Expérience VIP", en: "VIP Experience" },
  "excl.card3.desc": { fr: "Service personnalisé et avantages exclusifs", en: "Personalized service and exclusive benefits" },
  "excl.form.title": { fr: "Demander une Invitation", en: "Request an Invitation" },
  "excl.form.name": { fr: "Votre nom complet", en: "Your full name" },
  "excl.form.email": { fr: "Votre email", en: "Your email" },
  "excl.form.source": { fr: "Comment avez-vous connu Roche Leau ?", en: "How did you hear about Roche Leau?" },
  "excl.form.code": { fr: "Code de parrainage (optionnel)", en: "Referral code (optional)" },
  "excl.form.submit": { fr: "Envoyer ma Demande", en: "Send My Request" },
  "excl.form.success": { fr: "Merci ! Votre demande d'invitation a été envoyée. Nous vous contacterons bientôt.", en: "Thank you! Your invitation request has been sent. We will contact you soon." },

  // Featured Products
  "prod.badge": { fr: "Collection Exclusive", en: "Exclusive Collection" },
  "prod.title1": { fr: "Nos Produits", en: "Our Featured" },
  "prod.title2": { fr: "Phares", en: "Products" },
  "prod.subtitle": { fr: "Disponible uniquement sur invitation", en: "Available by invitation only" },
  "prod.viewBtn": { fr: "Voir le Produit (Sur invitation)", en: "View Product (Invitation only)" },
  "prod.bestseller": { fr: "Best-seller", en: "Best-seller" },
  "prod.limited": { fr: "Édition Limitée", en: "Limited Edition" },
  "prod.new": { fr: "Nouveau", en: "New" },
  "prod.p1.name": { fr: "Crème Hydratante Suprême", en: "Supreme Moisturizing Cream" },
  "prod.p1.desc": { fr: "Crème de luxe à l'hydratation intense pour un éclat naturel", en: "Luxury cream with intense hydration for a natural glow" },
  "prod.p2.name": { fr: "Sérum Éclat Naturel", en: "Natural Radiance Serum" },
  "prod.p2.desc": { fr: "Sérum concentré aux actifs naturels pour une peau radieuse", en: "Concentrated serum with natural actives for radiant skin" },
  "prod.p3.name": { fr: "Kit Multi-usage Couleur", en: "Multi-use Color Kit" },
  "prod.p3.desc": { fr: "Collection de soins multi-usage aux couleurs vibrantes", en: "Multi-use skincare collection in vibrant colors" },
  "prod.p4.name": { fr: "Crème Nuit Réparatrice", en: "Restorative Night Cream" },
  "prod.p4.desc": { fr: "Soin nocturne régénérant pour une peau éclatante au réveil", en: "Regenerating night care for radiant skin upon waking" },

  // About
  "about.badge": { fr: "À Propos de Nous", en: "About Us" },
  "about.title1": { fr: "L'Art de la", en: "The Art of" },
  "about.title2": { fr: "Beauté Naturelle", en: "Natural Beauty" },
  "about.p1": {
    fr: "Roche Leau est une marque française de cosmétiques naturels de luxe dédiée à l'hydratation pure et à l'éclat naturel de la peau. Formulés avec des ingrédients écologiques et vendus exclusivement sur recommandation.",
    en: "Roche Leau is a French luxury natural cosmetics brand dedicated to pure hydration and natural skin radiance. Formulated with ecological ingredients and sold exclusively by referral."
  },
  "about.p2": {
    fr: "Chaque produit est le fruit d'une recherche approfondie, alliant les bienfaits de la nature à l'innovation scientifique pour offrir une expérience de soin incomparable.",
    en: "Each product is the result of extensive research, combining the benefits of nature with scientific innovation to offer an unparalleled skincare experience."
  },
  "about.p3": {
    fr: "Notre engagement envers l'excellence se reflète dans chaque détail — de la sélection des ingrédients les plus purs à nos emballages éco-responsables.",
    en: "Our commitment to excellence is reflected in every detail — from selecting the purest ingredients to our eco-responsible packaging."
  },
  "about.stat1": { fr: "Écologique", en: "Ecological" },
  "about.stat2": { fr: "Ingrédients Naturels", en: "Natural Ingredients" },
  "about.stat3": { fr: "Membres VIP", en: "VIP Members" },

  // Ingredients
  "ingr.badge": { fr: "Pureté & Science", en: "Purity & Science" },
  "ingr.title1": { fr: "Nos", en: "Our" },
  "ingr.title2": { fr: "Ingrédients", en: "Ingredients" },
  "ingr.i1.title": { fr: "Eau de Source Pure", en: "Pure Spring Water" },
  "ingr.i1.desc": { fr: "Eau minérale naturelle enrichie en oligo-éléments pour une hydratation profonde", en: "Natural mineral water enriched with trace elements for deep hydration" },
  "ingr.i2.title": { fr: "Extraits Botaniques", en: "Botanical Extracts" },
  "ingr.i2.desc": { fr: "Plantes sélectionnées pour leurs propriétés régénérantes et apaisantes", en: "Plants selected for their regenerating and soothing properties" },
  "ingr.i3.title": { fr: "Vitamine E Naturelle", en: "Natural Vitamin E" },
  "ingr.i3.desc": { fr: "Antioxydant puissant protégeant la peau des agressions extérieures", en: "Powerful antioxidant protecting the skin from external aggressions" },
  "ingr.i4.title": { fr: "Acide Hyaluronique", en: "Hyaluronic Acid" },
  "ingr.i4.desc": { fr: "Molécule d'hydratation avancée pour une peau repulpée et éclatante", en: "Advanced hydration molecule for plumped and radiant skin" },

  // Sustainability
  "sust.badge": { fr: "Notre Engagement", en: "Our Commitment" },
  "sust.title": { fr: "Écologique", en: "Ecological" },
  "sust.desc": {
    fr: "Chez Roche Leau, chaque décision est guidée par notre respect profond pour la nature. Des ingrédients durables aux emballages recyclables, nous nous engageons à préserver la beauté de notre planète.",
    en: "At Roche Leau, every decision is guided by our deep respect for nature. From sustainable ingredients to recyclable packaging, we are committed to preserving the beauty of our planet."
  },
  "sust.s1": { fr: "Emballages Recyclables", en: "Recyclable Packaging" },
  "sust.s2": { fr: "Ingrédients Durables", en: "Sustainable Ingredients" },
  "sust.s3": { fr: "Sans Tests Animaux", en: "Cruelty Free" },
  "sust.s4": { fr: "Sans Parabènes", en: "Paraben Free" },

  // Benefits
  "ben.title1": { fr: "Pourquoi Choisir", en: "Why Choose" },
  "ben.title2": { fr: "Roche Leau", en: "Roche Leau" },
  "ben.b1.title": { fr: "100% Écologique", en: "100% Ecological" },
  "ben.b1.desc": { fr: "Ingrédients naturels, emballages durables, zéro impact environnemental", en: "Natural ingredients, sustainable packaging, zero environmental impact" },
  "ben.b2.title": { fr: "Hydratation Pure", en: "Pure Hydration" },
  "ben.b2.desc": { fr: "Formulations avancées pour une hydratation profonde et durable", en: "Advanced formulations for deep and lasting hydration" },
  "ben.b3.title": { fr: "Ingrédients Naturels", en: "Natural Ingredients" },
  "ben.b3.desc": { fr: "Uniquement les ingrédients les plus purs et efficaces de la nature", en: "Only the purest and most effective ingredients from nature" },
  "ben.b4.title": { fr: "Expérience Exclusive", en: "Exclusive Experience" },
  "ben.b4.desc": { fr: "Service VIP et accès à des produits en édition limitée", en: "VIP service and access to limited edition products" },

  // Referral Program
  "ref.badge": { fr: "Programme Exclusif", en: "Exclusive Program" },
  "ref.title1": { fr: "Programme de", en: "Referral" },
  "ref.title2": { fr: "Parrainage", en: "Program" },
  "ref.desc": {
    fr: "Invitez une amie et recevez des avantages exclusifs. Chaque parrainage renforce notre cercle privé de beauté naturelle.",
    en: "Invite a friend and receive exclusive benefits. Each referral strengthens our private circle of natural beauty."
  },
  "ref.step1.title": { fr: "Partagez", en: "Share" },
  "ref.step1.desc": { fr: "Envoyez votre lien exclusif à des amies qui apprécient le skincare de luxe", en: "Send your exclusive link to friends who appreciate luxury skincare" },
  "ref.step2.title": { fr: "Invitez", en: "Invite" },
  "ref.step2.desc": { fr: "Votre amie reçoit une invitation spéciale pour accéder à notre boutique privée", en: "Your friend receives a special invitation to access our private boutique" },
  "ref.step3.title": { fr: "Gagnez", en: "Earn" },
  "ref.step3.desc": { fr: "Vous recevez toutes les deux des avantages exclusifs et des remises spéciales", en: "You both receive exclusive benefits and special discounts" },
  "ref.generate.title": { fr: "Générer Mon Lien de Parrainage", en: "Generate My Referral Link" },
  "ref.generate.email": { fr: "Votre email", en: "Your email" },
  "ref.generate.btn": { fr: "Générer le Lien", en: "Generate Link" },
  "ref.generate.success": { fr: "Votre lien de parrainage a été généré !", en: "Your referral link has been generated!" },
  "ref.generate.copied": { fr: "Lien copié !", en: "Link copied!" },

  // Testimonials
  "test.badge": { fr: "Membres Exclusifs", en: "Exclusive Members" },
  "test.title": { fr: "Témoignages", en: "Testimonials" },
  "test.t1.text": { fr: "Les produits Roche Leau ont transformé ma peau. Une hydratation incomparable et un éclat naturel que je n'avais jamais atteint auparavant.", en: "Roche Leau products have transformed my skin. Incomparable hydration and a natural glow I had never achieved before." },
  "test.t1.role": { fr: "Membre VIP depuis 2024", en: "VIP Member since 2024" },
  "test.t2.text": { fr: "Faire partie du club privé Roche Leau est une expérience unique. La qualité des produits et le service personnalisé sont exceptionnels.", en: "Being part of the Roche Leau private club is a unique experience. The product quality and personalized service are exceptional." },
  "test.t2.role": { fr: "Membre Exclusif", en: "Exclusive Member" },
  "test.t3.text": { fr: "J'ai recommandé Roche Leau à toutes mes amies. Les résultats parlent d'eux-mêmes — une peau radieuse et naturellement belle.", en: "I've recommended Roche Leau to all my friends. The results speak for themselves — radiant and naturally beautiful skin." },
  "test.t3.role": { fr: "Ambassadrice Roche Leau", en: "Roche Leau Ambassador" },

  // Footer
  "footer.nav": { fr: "Navigation", en: "Navigation" },
  "footer.contact": { fr: "Contact", en: "Contact" },
  "footer.exclusivity": { fr: "Exclusivité", en: "Exclusivity" },
  "footer.excl.text": { fr: "Marque de luxe exclusive. Produits disponibles UNIQUEMENT sur invitation et parrainage.", en: "Exclusive luxury brand. Products available ONLY by invitation and referral." },
  "footer.excl.club": { fr: "Club Privé Roche Leau", en: "Roche Leau Private Club" },
  "footer.rights": { fr: "Tous droits réservés.", en: "All rights reserved." },
  "footer.privacy": { fr: "Politique de Confidentialité", en: "Privacy Policy" },
  "footer.terms": { fr: "Conditions Générales", en: "Terms & Conditions" },

  // Boutique
  "shop.badge": { fr: "Accès Réservé aux Membres", en: "Members Only Access" },
  "shop.title1": { fr: "Boutique", en: "Boutique" },
  "shop.title2": { fr: "Exclusive", en: "Exclusive" },
  "shop.locked.title": { fr: "Accès Exclusif", en: "Exclusive Access" },
  "shop.locked.desc": { fr: "Cette boutique est exclusive. Entrez votre code d'invitation ou demandez votre invitation pour accéder à notre collection premium.", en: "This boutique is exclusive. Enter your invitation code or request your invitation to access our premium collection." },
  "shop.locked.input": { fr: "Entrez votre code d'invitation", en: "Enter your invitation code" },
  "shop.locked.btn": { fr: "Valider Mon Accès", en: "Validate My Access" },
  "shop.locked.nocode": { fr: "Pas encore de code ?", en: "No code yet?" },
  "shop.locked.request": { fr: "Demander une Invitation", en: "Request an Invitation" },
  "shop.locked.error": { fr: "Code invalide. Essayez à nouveau.", en: "Invalid code. Try again." },
  "shop.locked.errorToast": { fr: "Code invalide. Vérifiez votre code d'invitation.", en: "Invalid code. Please verify your invitation code." },
  "shop.unlocked.badge": { fr: "Accès Exclusif Activé", en: "Exclusive Access Activated" },
  "shop.unlocked.successToast": { fr: "Bienvenue ! Votre accès exclusif est activé.", en: "Welcome! Your exclusive access is activated." },
  "shop.addToCart": { fr: "Ajouter au Panier", en: "Add to Cart" },
  "shop.all": { fr: "Tous", en: "All" },
  "shop.creams": { fr: "Crèmes", en: "Creams" },
  "shop.faceCare": { fr: "Soins Visage", en: "Face Care" },
  "shop.tubes": { fr: "Tubes", en: "Tubes" },
  "shop.exclusive": { fr: "Exclusif", en: "Exclusive" },
  "shop.p5.name": { fr: "Baume Lèvres Naturel", en: "Natural Lip Balm" },
  "shop.p5.desc": { fr: "Hydratation et protection lèvres", en: "Lip hydration and protection" },
  "shop.p6.name": { fr: "Lotion Tonique Pure", en: "Pure Tonic Lotion" },
  "shop.p6.desc": { fr: "Lotion purifiante et revitalisante", en: "Purifying and revitalizing lotion" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: (key) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
