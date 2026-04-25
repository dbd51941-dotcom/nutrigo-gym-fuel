import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#" className="font-display text-2xl tracking-wider">
          NUTRI<span className="text-primary">GO</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
          <a href="#produits" className="text-muted-foreground hover:text-primary transition-colors">Produits</a>
          
          <a href="#process" className="text-muted-foreground hover:text-primary transition-colors">Comment</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
        <Button asChild className="gradient-orange text-primary-foreground font-bold uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all">
          <a href="#contact">Installer</a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
