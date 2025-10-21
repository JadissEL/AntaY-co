export const Differentiators = () => {
  const differentiators = [
    {
      icon: "◆",
      title: "Structure multi-marques",
      description: "Une organisation flexible et scalable, adaptée à la croissance exponentielle.",
    },
    {
      icon: "◈",
      title: "Suivi intégré",
      description: "Gestion des investissements centralisée et transparente dans un seul écosystème.",
    },
    {
      icon: "▲",
      title: "Écosystème gratuit",
      description: "Solutions accessibles et transparentes pour tous les partenaires.",
    },
    {
      icon: "◀",
      title: "Solutions sécurisées",
      description: "Investissements automatisés avec gestion du risque intégrée.",
    },
  ];

  return (
    <section
      id="differentiators"
      className="relative w-full bg-luxury-black py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Nos différenciateurs
          </h2>
          <p className="text-luxury-ivory/70 text-lg max-w-2xl">
            Ce qui rend AntaY-co unique et incontournable.
          </p>
          <div className="w-16 h-1 bg-luxury-gold mt-6" />
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-luxury-graphite/40 border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-300 hover:bg-luxury-graphite/60"
            >
              {/* Icon */}
              <div className="text-luxury-gold text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {diff.icon}
              </div>

              {/* Content */}
              <h3 className="font-playfair text-lg text-luxury-ivory mb-3 font-bold">
                {diff.title}
              </h3>
              <p className="text-luxury-ivory/60 text-sm leading-relaxed">
                {diff.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-luxury-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center py-12 border-t border-b border-luxury-gold/20">
          <p className="text-luxury-ivory/70 text-lg leading-relaxed max-w-3xl mx-auto">
            Chaque élément de notre structure est conçu pour maximiser la valeur, minimiser le risque, et créer une fondation durable pour la croissance future.
          </p>
        </div>
      </div>
    </section>
  );
};
