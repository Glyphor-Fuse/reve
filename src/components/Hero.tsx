import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-fashion.jpg"
          alt="Futuristic fashion model"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/30 rounded-full blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="container relative z-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-white/90">V 2.0 Now Live</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter mb-6 drop-shadow-xl">
          WEAR THE <br />
          <span className="text-white italic">FUTURE</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your closet is infinite. The first AI-powered digital wardrobe that lets you try, style, and flex in AR. No shipping required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-[0_0_20px_-5px_rgba(255,0,255,0.5)] transition-all hover:scale-105">
            Download App
          </Button>
          <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/40">
            View Lookbook <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
