import { Link } from "react-router-dom";
import { ArrowLeft, Sparkle } from "lucide-react";

const FestivalKoreny = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <Link
            to="/o-nas"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Zpět na O spolku
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
            Festival
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
            Zpátky ke kořenům
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Náš festival, který spojuje hudbu, divadlo a tradice — místo, kde se vracíme
            k tomu, co nás drží pohromadě.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="flex items-start gap-4 rounded-3xl border border-border/60 bg-secondary/40 p-8 shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <Sparkle className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-xl text-primary">Připravujeme</h2>
              <p className="mt-2 text-muted-foreground">
                Podrobnosti o programu, místě konání a vstupenkách brzy doplníme. Pokud
                se chcete dozvědět víc dřív, ozvěte se nám.
              </p>
              <Link
                to="/kontakt"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary/90"
              >
                Napište nám
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FestivalKoreny;
