export const Objectives = () => {
  const objectives = [
    {
      phase: "Court terme",
      timeframe: "2025",
      description: "Lancer AntaY-Square (plateforme & investisseurs)",
      items: [
        "Mise en ligne de la plateforme",
        "Onboarding des premiers investisseurs",
        "Beta testing auprès des partenaires",
      ],
    },
    {
      phase: "Moyen terme",
      timeframe: "2025-2026",
      description: "Étendre l'écosystème et renforcer la présence médiatique",
      items: [
        "Lancement d'AntaY-Invest",
        "Expansion du réseau immobilier",
        "Campagnes de notoriété",
      ],
    },
    {
      phase: "Long terme",
      timeframe: "2026+",
      description: "Établir AntaY-co comme une holding internationale automatisée",
      items: [
        "Internationalisation de la plateforme",
        "Automatisation complète des processus",
        "Certifications et conformité globales",
      ],
    },
  ];

  return (
    <section
      id="objectives"
      className="relative w-full bg-luxury-graphite py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Objectifs stratégiques
          </h2>
          <p className="text-luxury-ivory/70 text-lg max-w-2xl">
            Une trajectoire claire guidée par l'ambition et la précision.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-luxury-gold/50 via-luxury-gold/50 to-transparent transform -translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {objectives.map((objective, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 0 ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                }`}
              >
                {/* Content */}
                <div className={`${idx % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="space-y-4">
                    <div>
                      <p className="text-luxury-gold/80 text-xs font-monument tracking-widest mb-2">
                        {objective.timeframe}
                      </p>
                      <h3 className="font-playfair text-3xl text-luxury-ivory font-bold mb-2">
                        {objective.phase}
                      </h3>
                    </div>
                    <p className="text-luxury-ivory/80 text-lg leading-relaxed">
                      {objective.description}
                    </p>
                    <ul className="space-y-2 pt-4">
                      {objective.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className="text-luxury-gold mt-1.5">▸</span>
                          <span className="text-luxury-ivory/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline milestone */}
                <div className="flex justify-center md:justify-center">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Circle */}
                    <div className="absolute inset-0 rounded-full border-2 border-luxury-gold/40 bg-luxury-black/50" />
                    {/* Inner circle */}
                    <div className="absolute inset-4 rounded-full border border-luxury-gold/20" />
                    {/* Number */}
                    <div className="relative z-10 text-center">
                      <p className="text-luxury-gold/80 text-xs font-monument tracking-widest">
                        PHASE
                      </p>
                      <p className="text-luxury-gold text-3xl font-playfair font-bold">
                        {idx + 1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
