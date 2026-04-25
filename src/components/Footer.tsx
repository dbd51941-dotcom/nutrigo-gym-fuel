const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-display text-2xl tracking-wider">NUTRI<span className="text-primary">GO</span></div>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">Votre énergie. Notre mission.</p>
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Nutrigo. Tous droits réservés.</div>
      </div>
    </footer>
  );
};

export default Footer;
