import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />

      {/* Parallax overlay elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Architectural texture lines */}
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="hsl(var(--luxury-gold))"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-luxury-ivory mb-6 tracking-tight">
          ANTAY-CO<br />HOLDING
        </h1>

        {/* Subheading */}
        <p className="text-luxury-gold font-monument text-xl md:text-2xl tracking-widest mb-8 font-semibold">
          ÉCOSYSTÈME MULTI-MARQUES
        </p>

        {/* Description */}
        <div className="space-y-4 mb-12">
          <p className="text-luxury-ivory/80 text-lg md:text-xl font-light tracking-wide">
            IMMOBILIER • FINTECH • TECHNOLOGIE • MÉDIA
          </p>
          <p className="text-luxury-gold/70 text-base md:text-lg italic font-light">
            La structure, l'automatisation, et la vision réunies sous une seule entité.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="px-8 py-3 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 font-semibold tracking-wider text-sm md:text-base">
            Découvrir
          </button>
          <button className="px-8 py-3 text-luxury-ivory border-b-2 border-luxury-ivory hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 font-semibold tracking-wider text-sm md:text-base bg-transparent">
            Contact
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2">
          <p className="text-luxury-gold/50 text-xs tracking-widest">DÉFILER</p>
          <div className="w-px h-8 bg-gradient-to-b from-luxury-gold/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
