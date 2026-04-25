const items = ["Whey Isolate", "Créatine Monohydrate", "Pre-Workout", "BCAA", "Vegan Protein", "Glutamine", "Mass Gainer", "Recovery"];

const Marquee = () => {
  return (
    <div className="border-y border-border/60 bg-secondary/30 overflow-hidden py-6">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12">
            <span className="font-display text-3xl uppercase tracking-wider text-foreground/80">{item}</span>
            <span className="text-primary text-2xl">●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
