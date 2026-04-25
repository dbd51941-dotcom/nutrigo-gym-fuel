import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { FormEvent } from "react";

const Contact = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Demande envoyée ! Notre équipe vous contacte sous 24h.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-14 grain relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-primary text-sm uppercase tracking-[0.3em] font-semibold">— Contact</span>
              <h2 className="font-display text-5xl md:text-6xl uppercase mt-4 leading-none">
                Équipez votre<br />
                <span className="text-primary">salle aujourd'hui.</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Installation gratuite. Aucun frais caché. Devenez partenaire Nutrigo et offrez à vos membres l'expérience nutrition qu'ils méritent.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" /> <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" /> <span>contact@nutrigo.fr</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" /> <span>Disponible partout en France</span>
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <Input required placeholder="Nom de votre salle" className="bg-background border-border h-12" />
              <Input required placeholder="Votre nom" className="bg-background border-border h-12" />
              <Input required type="email" placeholder="Email" className="bg-background border-border h-12" />
              <Input required type="tel" placeholder="Téléphone" className="bg-background border-border h-12" />
              <Textarea placeholder="Votre message (optionnel)" className="bg-background border-border min-h-[100px]" />
              <Button type="submit" size="lg" className="w-full gradient-orange text-primary-foreground font-bold uppercase tracking-wider h-14 hover:scale-[1.02] transition-transform">
                Demander une installation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
