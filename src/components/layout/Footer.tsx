import { Link } from "react-router-dom";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Spolek Galimatyáš"
            className="h-20 w-20 rounded-full"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Hudebně-dramatické centrum v Šumperku. Divadlo, hudba a fantazie pro malé i velké.
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h4 className="mb-3 font-display text-lg font-semibold">Kontakt</h4>
          <p className="flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>Spolek Galimatyáš, Šumperk</span>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 shrink-0 text-accent" />
            <a href="tel:+420000000000" className="hover:text-foreground">
              +420 000 000 000
            </a>
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4 shrink-0 text-accent" />
            <a href="mailto:info@spolekgalimatyas.cz" className="hover:text-foreground">
              info@spolekgalimatyas.cz
            </a>
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-display text-lg font-semibold">Sledujte nás</h4>
          <a
            href="https://www.facebook.com/spolekgalimatyas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </a>
          <nav className="mt-6 flex flex-col gap-1 text-sm">
            <Link to="/aktualne" className="text-muted-foreground hover:text-foreground">Aktuálně</Link>
            <Link to="/o-nas" className="text-muted-foreground hover:text-foreground">O spolku</Link>
            <Link to="/co-nabizime" className="text-muted-foreground hover:text-foreground">Co nabízíme</Link>
            <Link to="/studio-my-dve" className="text-muted-foreground hover:text-foreground">Studio My Dvě</Link>
            <Link to="/kontakt" className="text-muted-foreground hover:text-foreground">Kontakt</Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Spolek Galimatyáš, z. s.</p>
          <p>Vyrobeno s láskou v Šumperku.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
