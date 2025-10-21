export const Vision = () => {
  return (
    <section
      id="vision"
      className="relative w-full bg-luxury-black py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent mb-16" />

        {/* Heading */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-luxury-ivory mb-6">
            Créer, structurer et faire évoluer<br />les projets de demain.
          </h2>
          <div className="w-16 h-1 bg-luxury-gold" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Mission */}
          <div className="space-y-6">
            <p className="text-lg text-luxury-ivory/80 leading-relaxed font-light">
              AntaY-co est une holding conçue comme un écosystème multi-marques, unissant l'immobilier, la fintech et la technologie sous une seule vision : rendre la croissance accessible, mesurable et pérenne.
            </p>
            <p className="text-base text-luxury-ivory/60 leading-relaxed">
              Notre approche repose sur trois piliers fondamentaux : une structure organisationnelle robuste, une automatisation intelligente des processus, et une vision stratégique partagée par tous nos partenaires.
            </p>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-64 md:h-80">
              {/* Geometric wireframe animation */}
              <svg
                className="w-full h-full"
                viewBox="0 0 300 300"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--luxury-gold))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--luxury-gold))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Central circle */}
                <circle cx="150" cy="150" r="80" fill="none" stroke="url(#goldGrad)" strokeWidth="2" />
                {/* Rotating triangles */}
                <polygon
                  points="150,70 220,200 80,200"
                  fill="none"
                  stroke="hsl(var(--luxury-gold))"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                {/* Grid pattern */}
                <line x1="70" y1="150" x2="230" y2="150" stroke="hsl(var(--luxury-gold))" strokeWidth="1" opacity="0.3" />
                <line x1="150" y1="70" x2="150" y2="230" stroke="hsl(var(--luxury-gold))" strokeWidth="1" opacity="0.3" />
                {/* Corner accents */}
                <circle cx="150" cy="70" r="4" fill="hsl(var(--luxury-gold))" opacity="0.7" />
                <circle cx="220" cy="200" r="4" fill="hsl(var(--luxury-gold))" opacity="0.7" />
                <circle cx="80" cy="200" r="4" fill="hsl(var(--luxury-gold))" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="p-8 border border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors">
            <div className="text-luxury-gold text-4xl font-playfair mb-4">01</div>
            <h3 className="font-playfair text-xl text-luxury-ivory mb-3">Structure</h3>
            <p className="text-luxury-ivory/60 text-sm">
              Une organisation claire et flexible, adaptée à la croissance.
            </p>
          </div>
          <div className="p-8 border border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors">
            <div className="text-luxury-gold text-4xl font-playfair mb-4">02</div>
            <h3 className="font-playfair text-xl text-luxury-ivory mb-3">Automatisation</h3>
            <p className="text-luxury-ivory/60 text-sm">
              Des processus intelligents qui libèrent le potentiel humain.
            </p>
          </div>
          <div className="p-8 border border-luxury-gold/20 hover:border-luxury-gold/50 transition-colors">
            <div className="text-luxury-gold text-4xl font-playfair mb-4">03</div>
            <h3 className="font-playfair text-xl text-luxury-ivory mb-3">Vision</h3>
            <p className="text-luxury-ivory/60 text-sm">
              Une direction commune guidant tous les projets futurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
