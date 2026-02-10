import { Layers, Share2, Star, Zap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesBento = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Inside the Engine</h2>
          <p className="text-white/50">Everything you need to redefine your digital identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto h-auto md:h-[600px]">
          {/* Large Card Left */}
          <Card className="md:col-span-2 md:row-span-2 bg-zinc-900/50 border-white/10 overflow-hidden group relative">
            <div className="absolute inset-0">
                <img src="/images/bento-cloth.jpg" alt="Cloth physics" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            </div>
            <CardContent className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 backdrop-blur-md">
                    <Layers />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Hyper-Real Physics</h3>
                <p className="text-white/60">Our cloth simulation engine handles 100,000+ polygons in real-time. Silk flows like silk. Leather creases like leather. It's not a filter, it's a simulation.</p>
            </CardContent>
          </Card>

          {/* Small Card Top Right */}
          <Card className="bg-zinc-900/50 border-white/10 overflow-hidden group relative min-h-[250px]">
             <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <CardContent className="h-full flex flex-col justify-end p-6 relative z-10">
                <Zap className="text-accent mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold text-white">Instant Render</h3>
                <p className="text-sm text-white/50 mt-2">Zero latency tracking at 60fps on all modern devices.</p>
             </CardContent>
          </Card>

          {/* Small Card Middle Right */}
          <Card className="bg-zinc-900/50 border-white/10 overflow-hidden group relative min-h-[250px]">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <CardContent className="h-full flex flex-col justify-end p-6 relative z-10">
                <Share2 className="text-primary mb-4 w-8 h-8" />
                <h3 className="text-xl font-bold text-white">Social Export</h3>
                <p className="text-sm text-white/50 mt-2">Direct export to TikTok and Instagram Reels in 4K.</p>
             </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBento;
