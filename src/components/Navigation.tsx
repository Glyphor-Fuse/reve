import { useState, useEffect } from "react";
import { MoveRight, Menu, X, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Wordmark */}
        <a href="/" className="text-2xl font-display font-bold tracking-tighter text-white">
          REVE<span className="text-primary italic">.AR</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#mirror" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
            Try On
          </a>
          <a href="#reviews" className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
            Community
          </a>
          <Button className="bg-white text-black hover:bg-primary hover:text-white rounded-full px-6 font-bold">
            Get Early Access
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          <a href="#features" className="text-lg font-medium text-white/90" onClick={() => setMobileMenuOpen(false)}>
            Features
          </a>
          <a href="#mirror" className="text-lg font-medium text-white/90" onClick={() => setMobileMenuOpen(false)}>
            Virtual Mirror
          </a>
          <a href="#reviews" className="text-lg font-medium text-white/90" onClick={() => setMobileMenuOpen(false)}>
            Reviews
          </a>
          <Button className="w-full bg-primary text-white rounded-full">Download Beta</Button>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              REVE<span className="text-primary italic">.AR</span>
            </h2>
            <p className="text-white/60 mb-6">
              The first digital wardrobe that keeps up with your imagination. 
              Wear the future, today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Stylist AI</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Virtual Mirror</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Brands</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© 2024 Reve Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;
