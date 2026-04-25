const steps = [
  { n: "01", t: "Contact", d: "Vous nous contactez et planifions ensemble une visite de votre établissement." },
  { n: "02", t: "Installation", d: "Installation gratuite et clé en main du distributeur Nutrigo en moins de 24h." },
  { n: "03", t: "Approvisionnement", d: "Nous gérons le stock, la maintenance et le réapprovisionnement automatique." },
  { n: "04", t: "Revenus", d: "Vous touchez une commission sur chaque vente. Zéro effort, 100% bénéfice." },
];

const Process = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">— Comment ça marche</span>
          <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-none">
            Simple. <span className="text-primary">Rentable.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group">
              <div className="absolute -inset-px bg-gradient-to-b from-primary/30 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors">
                <div className="font-display text-6xl text-primary mb-4">{s.n}</div>
                <h3 className="font-display text-2xl uppercase mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/40 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
