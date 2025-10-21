import { useState } from "react";

export const Governance = () => {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const leadership = [
    {
      id: "ceo",
      title: "Directeur Général",
      role: "CEO",
      philosophy: "Vision drives architecture",
      description: "Supervision globale de l'écosystème",
    },
    {
      id: "cfo",
      title: "Directeur Financier",
      role: "CFO",
      philosophy: "Data builds legacy",
      description: "Gestion des investissements & revenus",
    },
    {
      id: "cto",
      title: "Responsable Technique",
      role: "CTO",
      philosophy: "Code is poetry",
      description: "Automatisation et sécurité",
    },
    {
      id: "cmo",
      title: "Responsable Marketing",
      role: "CMO",
      philosophy: "Growth is inevitable",
      description: "Stratégies de croissance",
    },
  ];

  const founders = [
    { name: "Jadiss El Antaki", role: "Co-fondateur" },
    { name: "Babil", role: "Co-fondateur" },
    { name: "Youssef", role: "Co-fondateur" },
  ];

  return (
    <section
      id="governance"
      className="relative w-full bg-luxury-graphite py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Structure organisationnelle
          </h2>
          <div className="w-16 h-1 bg-luxury-gold" />
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leadership.map((leader) => (
            <div
              key={leader.id}
              onMouseEnter={() => setHoveredRole(leader.id)}
              onMouseLeave={() => setHoveredRole(null)}
              className="group relative p-8 bg-luxury-black/50 border border-luxury-gold/20 hover:border-luxury-gold/60 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                {/* Role Badge */}
                <div className="text-luxury-gold text-xs font-monument tracking-widest mb-4">
                  {leader.role}
                </div>

                {/* Title */}
                <h3 className="font-playfair text-xl text-luxury-ivory mb-3 font-semibold">
                  {leader.title}
                </h3>

                {/* Description */}
                <p className="text-luxury-ivory/60 text-sm mb-6 h-12">
                  {leader.description}
                </p>

                {/* Philosophy */}
                <div
                  className={`text-luxury-gold/70 italic text-sm pt-4 border-t border-luxury-gold/20 transition-opacity duration-300 ${
                    hoveredRole === leader.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  "{leader.philosophy}"
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founders Section */}
        <div className="bg-luxury-black/30 border border-luxury-gold/20 p-12">
          <h3 className="font-playfair text-2xl text-luxury-ivory mb-8">
            Fondateurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {/* Abstract avatar */}
                <div className="w-16 h-16 border-2 border-luxury-gold/40 flex items-center justify-center bg-luxury-graphite/50">
                  <div className="text-luxury-gold/60 font-playfair text-xl font-bold">
                    {founder.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-luxury-ivory">
                    {founder.name}
                  </h4>
                  <p className="text-luxury-gold/70 text-sm tracking-wider">
                    {founder.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
