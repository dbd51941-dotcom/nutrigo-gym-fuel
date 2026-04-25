import { Button } from "@/components/ui/button";
import heroImg from "@/assets/nutrigo-hero.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden grain">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow blur-3xl" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8 animate-float-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/5">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Distributeur Nouvelle Génération</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
            Refuel.<br />
            <span className="text-primary text-glow">Recover.</span><br />
            Repeat.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            La nutrition sportive premium, disponible 24/7 dans votre salle. Whey aromatisée, créatine, pre-workout — servis en quelques secondes par notre distributeur intelligent.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="gradient-orange text-primary-foreground font-bold uppercase tracking-wider text-base h-14 px-8 hover:scale-105 transition-all animate-pulse-glow">
              <a href="#contact">Équiper ma salle <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border bg-transparent hover:bg-secondary text-foreground font-bold uppercase tracking-wider text-base h-14 px-8">
              <a href="#produits">Voir les produits</a>
            </Button>
          </div>

          <div className="flex gap-8 pt-6 border-t border-border/50">
            <div>
              <div className="font-display text-4xl text-primary">24/7</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Disponibilité</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">15s</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Service</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">100%</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Premium</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 radial-glow blur-2xl scale-90" />
          <img
            src={heroImg}
            alt="Distributeur Nutrigo de protéine whey, créatine et pre-workout"
            className="relative w-full h-auto rounded-lg"
            width={1600}
            height={900}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
