import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">
          READY TO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">UPGRADE?</span>
        </h2>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Join 500,000+ creators defining the future of digital fashion.
            <br />Available on iOS and Android.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-gray-200 font-bold w-full sm:w-auto">
                Download for iOS
            </Button>
            <Button className="h-16 px-10 text-xl rounded-full bg-transparent border border-white/20 text-white hover:bg-white/10 font-bold w-full sm:w-auto">
                Download for Android
            </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
