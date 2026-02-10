export const BrandMarquee = () => {
  const brands = [
    "OFF-WHITE", "BALENCIAGA", "ACNE STUDIOS", "DIESEL", "MISBHV", "AMBUSH", "HELIOT EMIL", "RICK OWENS"
  ];

  return (
    <section className="bg-black py-10 border-y border-white/5 overflow-hidden">
      <div className="flex gap-16 animate-marquee whitespace-nowrap">
        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <span className="text-2xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/30 to-white/10 group-hover:from-primary group-hover:to-primary/50 transition-all duration-300">
              {brand}
            </span>
            <span className="text-primary/20 text-xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandMarquee;
