import { Check } from "lucide-react";

export const AIStylist = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-block p-2 rounded-lg bg-accent/10 mb-6">
                <span className="text-accent font-bold tracking-wider text-xs uppercase">Powered by Gemini Ultra</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Meet your new <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Digital Stylist.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Not sure what to wear? Just ask. Our AI analyzes your calendar, the weather, and your mood to generate the perfect digital fit for your content.
            </p>
            
            <ul className="space-y-4">
              {[
                "Context-aware outfit generation",
                "Instant texture rendering",
                "Social trend matching"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Content - Phone Mockup */}
          <div className="flex-1 order-1 md:order-2 flex justify-center">
            <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-zinc-800 shadow-2xl overflow-hidden group hover:border-zinc-700 transition-colors">
                <img 
                    src="/images/app-ui.jpg" 
                    alt="App Interface" 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Chat Bubble Overlays */}
                <div className="absolute bottom-32 right-4 max-w-[80%] bg-primary p-4 rounded-2xl rounded-tr-sm shadow-lg animate-in slide-in-from-bottom-10 fade-in duration-700 delay-300">
                    <p className="text-white text-sm font-medium">How about this chrome-plated jacket for the rave tonight?</p>
                </div>
                <div className="absolute bottom-12 left-4 max-w-[80%] bg-zinc-800 backdrop-blur-md p-4 rounded-2xl rounded-tl-sm border border-white/10 shadow-lg animate-in slide-in-from-bottom-10 fade-in duration-700 delay-700">
                    <p className="text-white text-sm">Perfect. Add the neon kicks.</p>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
