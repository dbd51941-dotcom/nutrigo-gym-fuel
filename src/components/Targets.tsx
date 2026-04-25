import athleteImg from "@/assets/athlete.jpg";

const targets = [
  { name: "Salles de Musculation", desc: "Augmentez la satisfaction de vos membres avec une offre nutrition haut de gamme accessible 24h/24." },
  { name: "Box CrossFit", desc: "Récupération optimale après les WODs les plus intenses. Whey et BCAA à portée de main." },
  { name: "Clubs de MMA & Boxe", desc: "Pre-workout pour le focus du combat, créatine pour la puissance, whey pour la récup." },
  { name: "Centres de Fitness", desc: "Diversifiez vos revenus passifs sans gestion de stock — nous nous occupons de tout." },
];

const Targets = () => {
  return (
    <section id="cibles" className="relative py-32 bg-secondary/20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 radial-glow blur-3xl scale-75" />
          <img src={athleteImg} alt="Athlète MMA en entraînement" className="relative rounded-lg w-full h-auto border border-border" loading="lazy" width={1080} height={1600} />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">— Pour qui</span>
            <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-none">
              Conçu pour<br />
              <span className="text-primary">les guerriers.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {targets.map((t, i) => (
              <div key={t.name} className="group flex gap-4 p-5 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
                <div className="font-display text-3xl text-primary/40 group-hover:text-primary transition-colors w-12">0{i + 1}</div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide">{t.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Targets;
