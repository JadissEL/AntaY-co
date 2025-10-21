import { useState } from "react";

export const Divisions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const divisions = [
    {
      id: "square",
      name: "AntaY-Square",
      subtitle: "Immobilier",
      description:
        "Plateforme immobilière gratuite connectant propriétaires, acheteurs et investisseurs.",
      features: [
        "Gestion complète des biens",
        "Historique et traçabilité",
        "Tableaux de bord automatisés",
        "Suivi des investisseurs",
      ],
      accent: "gold",
      theme: "white-gold",
    },
    {
      id: "invest",
      name: "AntaY-Invest",
      subtitle: "Fintech",
      description:
        "Système intelligent pour suivre, automatiser et sécuriser les placements liés à l'immobilier.",
      features: [
        "Comptes investisseurs",
        "Suivi des gains mensuels",
        "Alertes en temps réel",
        "Gestion du risque intégrée",
      ],
      accent: "gold",
      theme: "dark-gold",
    },
    {
      id: "media",
      name: "AntaY-Media",
      subtitle: "Production & Stratégie Digitale",
      description:
        "Pôle média créatif et stratégique : production vidéo, design web, campagnes de notoriété.",
      features: [
        "Production vidéo professionnelle",
        "Design et branding",
        "Campagnes de notoriété",
        "Consulting PME & startups",
      ],
      accent: "gold",
      theme: "cinematic",
    },
  ];

  return (
    <section
      id="divisions"
      className="relative w-full bg-luxury-black py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            L'écosystème multi-marques
          </h2>
          <p className="text-luxury-ivory/70 text-lg max-w-2xl">
            Trois divisions stratégiques unissant l'immobilier, la fintech et les médias sous une vision commune.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mt-6" />
        </div>

        {/* Divisions Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {divisions.map((division, idx) => (
            <button
              key={division.id}
              onClick={() => setActiveTab(idx)}
              className={`p-6 text-left transition-all duration-300 border ${
                activeTab === idx
                  ? "bg-luxury-gold/10 border-luxury-gold/60"
                  : "bg-luxury-graphite/30 border-luxury-gold/20 hover:border-luxury-gold/40"
              }`}
            >
              <p className="text-luxury-gold/80 text-xs font-monument tracking-widest mb-2">
                {division.subtitle}
              </p>
              <h3 className="font-playfair text-2xl text-luxury-ivory font-bold">
                {division.name}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Division Details */}
        <div className="bg-luxury-graphite/40 border border-luxury-gold/20 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left content */}
            <div>
              <h3 className="font-playfair text-3xl text-luxury-ivory mb-6 font-bold">
                {divisions[activeTab].name}
              </h3>
              <p className="text-luxury-ivory/80 text-lg leading-relaxed mb-8">
                {divisions[activeTab].description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <p className="text-luxury-gold/80 text-sm font-monument tracking-widest mb-4">
                  FONCTIONNALITÉS
                </p>
                {divisions[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-luxury-gold mt-2 flex-shrink-0" />
                    <p className="text-luxury-ivory/70">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80">
                {divisions[activeTab].id === "square" && (
                  <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <pattern id="blueprint" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--luxury-gold))" strokeWidth="0.5" opacity="0.3" />
                      </pattern>
                    </defs>
                    <rect width="300" height="300" fill="url(#blueprint)" />
                    <rect x="50" y="50" width="200" height="200" fill="none" stroke="hsl(var(--luxury-gold))" strokeWidth="2" />
                    <circle cx="150" cy="150" r="60" fill="none" stroke="hsl(var(--luxury-gold))" strokeWidth="1.5" opacity="0.5" />
                    <line x1="100" y1="100" x2="200" y2="200" stroke="hsl(var(--luxury-gold))" strokeWidth="1" opacity="0.4" />
                    <line x1="200" y1="100" x2="100" y2="200" stroke="hsl(var(--luxury-gold))" strokeWidth="1" opacity="0.4" />
                  </svg>
                )}
                {divisions[activeTab].id === "invest" && (
                  <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--luxury-gold))" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="hsl(var(--luxury-gold))" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <circle cx="150" cy="150" r="100" fill="none" stroke="url(#dataFlow)" strokeWidth="2" />
                    <circle cx="150" cy="150" r="70" fill="none" stroke="hsl(var(--luxury-gold))" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="150" cy="150" r="40" fill="none" stroke="hsl(var(--luxury-gold))" strokeWidth="1" opacity="0.3" />
                    {[0, 90, 180, 270].map((angle) => {
                      const rad = (angle * Math.PI) / 180;
                      const x = 150 + 80 * Math.cos(rad);
                      const y = 150 + 80 * Math.sin(rad);
                      return (
                        <circle key={angle} cx={x} cy={y} r="4" fill="hsl(var(--luxury-gold))" opacity="0.7" />
                      );
                    })}
                  </svg>
                )}
                {divisions[activeTab].id === "media" && (
                  <svg className="w-full h-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="light" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--luxury-gold))" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="hsl(var(--luxury-graphite))" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <rect x="60" y="60" width="180" height="180" fill="none" stroke="url(#light)" strokeWidth="2" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                      const rad = (angle * Math.PI) / 180;
                      const x1 = 150;
                      const y1 = 150;
                      const x2 = 150 + 100 * Math.cos(rad);
                      const y2 = 150 + 100 * Math.sin(rad);
                      return (
                        <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--luxury-gold))" strokeWidth="0.8" opacity="0.3" />
                      );
                    })}
                    <circle cx="150" cy="150" r="30" fill="hsl(var(--luxury-gold))" opacity="0.2" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Future Projects */}
        <div className="mt-16 p-8 bg-luxury-gold/5 border border-luxury-gold/20">
          <h3 className="font-playfair text-2xl text-luxury-ivory mb-6">
            Projets futurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Shop The Barber", "PinkyDrive", "Plateforme événementielle", "Livraison B2B"].map((project, idx) => (
              <div key={idx} className="p-4 bg-luxury-black/40 border border-luxury-gold/20 text-center">
                <p className="text-luxury-ivory/80 font-semibold">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
