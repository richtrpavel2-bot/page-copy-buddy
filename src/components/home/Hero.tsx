import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const word = "Galimatyáš";

const Hero = () => {
  return (
    <section className="bg-hero relative overflow-hidden">
      <div className="container py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Hudebně-dramatické centrum · Šumperk
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            {word.split("").map((ch, i) => (
              <span
                key={i}
                className="letter-anim"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Divadlo, hudba a fantazie pro malé i velké. Tvoříme představení, dílny
            a kulturní akce, které spojují generace.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/co-nabizime">
                Co nabízíme <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-7">
              <Link to="/o-nas">O spolku</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-72 w-72 rounded-full bg-accent/15 blur-3xl md:block" />
      <div className="pointer-events-none absolute -left-24 bottom-0 hidden h-72 w-72 rounded-full bg-primary/10 blur-3xl md:block" />
    </section>
  );
};

export default Hero;
