import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExclusivitySection from "@/components/ExclusivitySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import IngredientsSection from "@/components/IngredientsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ReferralProgram from "@/components/ReferralProgram";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ExclusivitySection />
    <FeaturedProducts />
    <AboutSection />
    <IngredientsSection />
    <SustainabilitySection />
    <BenefitsSection />
    <ReferralProgram />
    <TestimonialsSection />
    <Footer />
  </div>
);

export default Index;
