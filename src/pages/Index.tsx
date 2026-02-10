import { Navbar, Footer } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BrandMarquee } from "@/components/BrandMarquee";
import { MagicMirror } from "@/components/MagicMirror";
import { AIStylist } from "@/components/AIStylist";
import { FeaturesBento } from "@/components/FeaturesBento";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";

import Navigation from "@/components/Navigation";
const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <BrandMarquee />
        <MagicMirror />
        <AIStylist />
        <FeaturesBento />
        <Reviews />
        <CTA />
      </main>
      <Footer />
      <Navigation />
    </div>
  );
};

export default Index;
