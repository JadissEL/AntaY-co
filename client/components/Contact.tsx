import { useState, useRef } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    "bot-field": "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle",
  );

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

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    if (
      formData.subject.trim().length > 0 &&
      formData.subject.trim().length < 3
    ) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

    if (formData["bot-field"]) {
      console.warn("Bot detection triggered");
      return;
    }

    setIsLoading(true);
    setSubmitState("idle");

    try {
      const formDataToSend = new FormData(formRef.current!);

      const response = await fetch("https://formspree.io/f/xdkwrwwg", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formDataToSend,
      });

      console.log("Formspree raw response status:", response.status);
      console.log("Formspree response headers:", response.headers);

      let data;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        try {
          data = await response.json();
          console.log("Formspree JSON response:", data);
        } catch (e) {
          console.error("Failed to parse JSON:", e);
          throw new Error("Invalid JSON response from server");
        }
      } else {
        console.log("Response is not JSON, checking status code only");
        data = { ok: response.ok };
      }

      if (
        data.ok === true ||
        response.status === 200 ||
        response.status === 201
      ) {
        setSubmitState("success");
        toast.success("✅ Thank you! Your message has been sent successfully.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          "bot-field": "",
        });
        setErrors({});

        setTimeout(() => {
          setSubmitState("idle");
        }, 5000);
      } else {
        throw new Error(
          data.error || data.message || `Server error: ${response.status}`,
        );
      }
    } catch (error) {
      setSubmitState("error");
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      toast.error("⚠️ Something went wrong. Please try again later.");
      console.error("Contact form submission error:", errorMessage, error);

      setTimeout(() => {
        setSubmitState("idle");
      }, 5000);
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
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Prenez contact
          </h2>
          <p className="text-luxury-ivory/70 text-lg">
            Rejoignez l'écosystème AntaY-co et façonnez l'avenir ensemble.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mt-6 mx-auto" />
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`space-y-6 mb-16 transition-all duration-300 ${
            submitState === "success"
              ? "opacity-60 pointer-events-none"
              : "opacity-100"
          }`}
        >
          {/* Honeypot Field - Hidden from Users */}
          <input
            type="hidden"
            name="bot-field"
            value={formData["bot-field"]}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          {/* Full Name Field */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
            <label className="block text-luxury-ivory/80 text-sm font-semibold mb-2">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Jean Dupont"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-all duration-200 rounded-lg backdrop-blur-sm ${
                errors.fullName
                  ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : "border-luxury-gold/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.fullName && (
              <p className="text-red-500/80 text-sm mt-2 flex items-center gap-1">
                <span>⚠️</span> {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            <label className="block text-luxury-ivory/80 text-sm font-semibold mb-2">
              Adresse email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="jean@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-all duration-200 rounded-lg backdrop-blur-sm ${
                errors.email
                  ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : "border-luxury-gold/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.email && (
              <p className="text-red-500/80 text-sm mt-2 flex items-center gap-1">
                <span>⚠️</span> {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field (Optional) */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <label className="block text-luxury-ivory/80 text-sm font-semibold mb-2">
              Téléphone{" "}
              <span className="text-luxury-ivory/50 text-xs">(optionnel)</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+33 6 12 34 56 78"
              value={formData.phone}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border border-luxury-gold/30 text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-all duration-200 rounded-lg backdrop-blur-sm focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20 disabled:opacity-50 disabled:cursor-not-allowed`}
            />
          </div>

          {/* Subject Field (Optional) */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <label className="block text-luxury-ivory/80 text-sm font-semibold mb-2">
              Sujet{" "}
              <span className="text-luxury-ivory/50 text-xs">(optionnel)</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Partenariat, Investissement, Autre..."
              value={formData.subject}
              onChange={handleChange}
              disabled={isLoading}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-all duration-200 rounded-lg backdrop-blur-sm ${
                errors.subject
                  ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : "border-luxury-gold/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.subject && (
              <p className="text-red-500/80 text-sm mt-2 flex items-center gap-1">
                <span>⚠️</span> {errors.subject}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
            <label className="block text-luxury-ivory/80 text-sm font-semibold mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Votre message (minimum 10 caractères)..."
              value={formData.message}
              onChange={handleChange}
              disabled={isLoading}
              rows={5}
              className={`w-full bg-luxury-graphite/40 border text-luxury-ivory placeholder-luxury-ivory/40 px-6 py-4 focus:outline-none transition-all duration-200 rounded-lg backdrop-blur-sm resize-none ${
                errors.message
                  ? "border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                  : "border-luxury-gold/30 focus:border-luxury-gold focus:ring-2 focus:ring-luxury-gold/20"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.message && (
              <p className="text-red-500/80 text-sm mt-2 flex items-center gap-1">
                <span>⚠️</span> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div
            className="flex justify-center pt-4 animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              type="submit"
              disabled={isLoading}
              className="relative px-12 py-4 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 font-semibold tracking-wider text-sm md:text-base rounded-lg disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-all" />
            </button>
          </div>
        </form>

        {/* Success State */}
        {submitState === "success" && (
          <div className="mb-16 animate-fadeIn">
            <div className="bg-luxury-graphite/40 border border-green-500/30 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-5xl">✅</div>
              <h3 className="text-2xl font-playfair text-luxury-ivory mb-3">
                Message envoyé avec succès!
              </h3>
              <p className="text-luxury-ivory/70">
                Merci de nous avoir contactés. Nous vous répondrons très
                bientôt.
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {submitState === "error" && (
          <div className="mb-16 animate-fadeIn">
            <div className="bg-luxury-graphite/40 border border-red-500/30 rounded-lg p-8 text-center backdrop-blur-sm">
              <div className="mb-4 text-5xl">⚠️</div>
              <h3 className="text-2xl font-playfair text-luxury-ivory mb-3">
                Une erreur est survenue
              </h3>
              <p className="text-luxury-ivory/70">
                Veuillez réessayer ultérieurement.
              </p>
            </div>
          </div>
        )}

        {/* Google Business Verification Link */}
        <div className="border-y border-luxury-gold/20 py-12 animate-fadeIn">
          <p className="text-center text-luxury-gold/80 text-xs font-monument tracking-widest mb-6">
            🌍 VÉRIFICATION & CONFIANCE
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="https://share.google/ObhiWEucZToMxZMbI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-graphite/40 border border-luxury-gold/30 rounded-lg text-luxury-gold hover:text-luxury-ivory hover:bg-luxury-gold/10 hover:border-luxury-gold transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <span className="font-semibold">Profil Google Vérifié</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>

            <div className="hidden sm:block w-px h-8 bg-luxury-gold/20" />

            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p className="text-luxury-ivory/70 text-sm">
                ✉️ antayco.info@gmail.com
              </p>
              <p className="text-luxury-ivory/70 text-sm">
                📍 Casablanca, Maroc
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-12 animate-fadeIn">
          <p className="text-center text-luxury-gold/80 text-xs font-monument tracking-widest mb-8">
            SUIVEZ-NOUS
          </p>
          <div className="flex justify-center items-center gap-8">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm font-semibold hover:scale-110 transform transition-transform"
            >
              LinkedIn
            </a>
            <div className="w-px h-4 bg-luxury-gold/20" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm font-semibold hover:scale-110 transform transition-transform"
            >
              YouTube
            </a>
            <div className="w-px h-4 bg-luxury-gold/20" />
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-ivory hover:text-luxury-gold transition-colors text-sm font-semibold hover:scale-110 transform transition-transform"
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
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center w-12 h-12 border border-luxury-gold/40 hover:border-luxury-gold text-luxury-gold hover:text-luxury-ivory transition-all duration-300 group rounded-lg"
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

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};
