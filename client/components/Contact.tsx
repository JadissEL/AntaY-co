import { useState } from "react";
import { toast } from "sonner";
import { ContactRequest, ContactResponse } from "@shared/api";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    try {
      const payload: ContactRequest = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: ContactResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success(data.message || "Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      toast.error(errorMessage);
      console.error("Contact form submission error:", error);
    } finally {
      setIsLoading(false);
    }
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
          {/* Full Name Field */}
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Nom complet"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-colors ${
                errors.fullName
                  ? "border-red-500 focus:border-red-500"
                  : "border-luxury-gold/30 focus:border-luxury-gold"
              } disabled:opacity-50`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-colors ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-luxury-gold/30 focus:border-luxury-gold"
              } disabled:opacity-50`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-colors ${
                errors.subject
                  ? "border-red-500 focus:border-red-500"
                  : "border-luxury-gold/30 focus:border-luxury-gold"
              } disabled:opacity-50`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              rows={5}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-colors resize-none ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-luxury-gold/30 focus:border-luxury-gold"
              } disabled:opacity-50`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="px-12 py-3 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 font-semibold tracking-wider text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Envoi en cours..." : "Envoyer"}
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
