export const Services = () => {
  const services = [
    {
      icon: "🏢",
      title: "Gestion Immobilière",
      description:
        "Solutions complètes de gestion immobilière avec suivi en temps réel, gestion des biens et historique détaillé.",
    },
    {
      icon: "💰",
      title: "Conseils Financiers",
      description:
        "Stratégies d'investissement personnalisées et gestion de portefeuille optimisée pour maximiser les rendements.",
    },
    {
      icon: "🎯",
      title: "Stratégie Digitale",
      description:
        "Conseils en transformation numérique, branding et positionnement stratégique pour les entreprises.",
    },
    {
      icon: "⚙️",
      title: "Automatisation Intelligente",
      description:
        "Systèmes d'automatisation des processus métier pour accélérer la croissance et réduire les coûts opérationnels.",
    },
    {
      icon: "🤝",
      title: "Accompagnement d'Investisseurs",
      description:
        "Suivi intégré et support continu pour les investisseurs avec alertes, rapports mensuels et gestion du risque.",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-luxury-black py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Nos services
          </h2>
          <p className="text-luxury-ivory/70 text-lg max-w-2xl">
            Une gamme complète de solutions pour accompagner votre croissance et optimiser vos projets.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-luxury-graphite/40 border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-300 hover:bg-luxury-graphite/60 flex flex-col h-full"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-lg text-luxury-ivory mb-3 font-bold">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-luxury-ivory/60 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-luxury-gold group-hover:w-full transition-all duration-500 mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
