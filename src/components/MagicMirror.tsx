import { useState, useRef, useEffect } from "react";
import { Star } from 'lucide-react';

export const MagicMirror = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="mirror" className="bg-black py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Signature Tech</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Magic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Mirror</span>
          </h2>
          <p className="text-white/60 text-lg">
            Drag the slider to see how Reve transforms a standard selfie into a digital masterpiece. Our AR engine maps fabric physics to your body in real-time.
          </p>
        </div>

        {/* Comparison Component */}
        <div 
            ref={containerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[3/4] md:aspect-[16/9] rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_50px_-10px_rgba(255,0,255,0.15)] select-none cursor-ew-resize"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
        >
            {/* Image 2 (After/Reve) - Underneath but full width */}
            <div className="absolute inset-0">
                <img 
                    src="/images/mirror-after.jpg" 
                    alt="After Transformation" 
                    className="w-full h-full object-cover"
                    draggable={false}
                />
                <div className="absolute top-6 right-6 bg-primary/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    Reve Mode
                </div>
            </div>

            {/* Image 1 (Before/Standard) - On Top, clipped by width */}
            <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <img 
                    src="/images/mirror-before.jpg" 
                    alt="Before Transformation" 
                    className="absolute inset-0 w-full h-full object-cover max-w-none" 
                    // max-w-none is CRITICAL to keep the image from squishing
                    draggable={false}
                />
                <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    Original
                </div>
            </div>

            {/* Slider Handle */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
                    <Star size={20} />
                </div>
            </div>
        </div>
        
        <div className="mt-8 flex justify-center text-white/40 text-sm animate-pulse">
            <Star className="mr-2" size={16} /> Drag slider to compare
        </div>
      </div>
    </section>
  );
};

export default MagicMirror;
