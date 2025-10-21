import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-luxury-black/95 backdrop-blur-sm border-b border-luxury-graphite/20"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="text-luxury-ivory font-playfair text-xl font-bold hover:text-luxury-gold transition-colors"
        >
          ANTAY-CO
        </button>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm tracking-wider"
            >
              Vision
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("governance")}
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm tracking-wider"
            >
              Gouvernance
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("divisions")}
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm tracking-wider"
            >
              Divisions
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("services")}
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm tracking-wider"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm tracking-wider"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 text-sm font-semibold tracking-wider"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
