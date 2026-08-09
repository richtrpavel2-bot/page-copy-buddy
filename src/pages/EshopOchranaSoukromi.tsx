import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EshopOchranaSoukromi = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <Link
            to="/nakladatelstvi-limonada"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Zpět na E-shop Drzá opička
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
            E-shop
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Pravidla ochrany soukromí
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>Obsah pravidel ochrany soukromí brzy doplníme.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EshopOchranaSoukromi;
