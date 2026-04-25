import wheyImg from "@/assets/whey-splash.jpg";
import { Dumbbell, Flame, Zap } from "lucide-react";

const products = [
  {
    icon: Dumbbell,
    name: "Whey Aromatisée",
    tagline: "Construire. Récupérer.",
    desc: "Protéine whey premium aux saveurs intenses : chocolat, vanille, fraise, cookies. 25g de protéines par dose, absorption rapide post-entraînement.",
    flavors: ["Chocolat", "Vanille", "Fraise", "Cookies"],
  },
  {
    icon: Zap,
    name: "Créatine",
    tagline: "Force. Explosivité.",
    desc: "Créatine monohydrate ultra-pure, 5g par dose. Le supplément le plus étudié au monde pour booster votre puissance et votre volume musculaire.",
    flavors: ["Neutre", "Citron", "Fruits rouges"],
  },
  {
    icon: Flame,
    name: "Pre-Workout",
    tagline: "Énergie. Focus.",
    desc: "Formule explosive : caféine, beta-alanine, citrulline. Pour des séances intenses, une concentration maximale et une congestion qui dure.",
    flavors: ["Mojito", "Pastèque", "Mangue"],
  },
];

const Products = () => {
  return (
    <section id="produits" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">— Notre gamme</span>
          <h2 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-none">
            Trois produits.<br />
            <span className="text-primary">Une mission.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Chaque formule est sélectionnée pour répondre aux besoins réels des athlètes : performance, récupération, dépassement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className="group relative bg-card border border-border rounded-lg p-8 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <p.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>

                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">{p.tagline}</div>
                <h3 className="font-display text-4xl uppercase mb-4">{p.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {p.flavors.map((f) => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/80 border border-border">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 relative rounded-2xl overflow-hidden border border-border">
          <img src={wheyImg} alt="Splash de protéine whey aromatisée" className="w-full h-[400px] object-cover" loading="lazy" width={1280} height={400} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent flex items-center">
            <div className="px-12 max-w-xl">
              <h3 className="font-display text-5xl uppercase leading-none">Saveurs <span className="text-primary">intenses.</span></h3>
              <p className="mt-4 text-muted-foreground">Aucun goût artificiel agressif. Juste le plaisir, après l'effort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
