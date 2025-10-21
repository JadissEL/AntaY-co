import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ nom: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-luxury-black py-20 md:py-32 px-6"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Prenez contact
          </h2>
          <p className="text-luxury-ivory/70 text-lg">
            Rejoignez l'écosystème AntaY-co et façonnez l'avenir ensemble.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mt-6 mx-auto" />
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mb-16">
          {/* Name Field */}
          <div>
            <input
              type="text"
              name="nom"
              placeholder="Nom complet"
              value={formData.nom}
              onChange={handleChange}
              required
              className="w-full bg-luxury-graphite/40 border border-luxury-gold/30 text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-luxury-graphite/40 border border-luxury-gold/30 text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors"
            />
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-luxury-graphite/40 border border-luxury-gold/30 text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none focus:border-luxury-gold transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-3 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 font-semibold tracking-wider text-sm md:text-base"
            >
              {submitted ? "Message envoyé ✓" : "Envoyer"}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="border-y border-luxury-gold/20 py-12">
          <p className="text-center text-luxury-gold/80 text-xs font-monument tracking-widest mb-8">
            SUIVEZ-NOUS
          </p>
          <div className="flex justify-center items-center gap-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm font-semibold"
            >
              LinkedIn
            </a>
            <div className="w-px h-4 bg-luxury-gold/20" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm font-semibold"
            >
              YouTube
            </a>
            <div className="w-px h-4 bg-luxury-gold/20" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm font-semibold"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center">
          <p className="text-luxury-ivory/60 text-sm mb-8">
            © 2025 AntaY-co Holding — Intelligence. Structure. Vision.
          </p>

          {/* Return to Top Button */}
          <button
            onClick={() => {
              document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center w-12 h-12 border border-luxury-gold/40 hover:border-luxury-gold text-luxury-gold hover:text-luxury-ivory transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </footer>
      </div>
    </section>
  );
};
