import plakat from "@/assets/sablony/plakat.jpg";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Sablony = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/o-nas"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Zpět na O spolku
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">O spolku</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Projekt Šablony Galimatyáš
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Projekt realizovaný s podporou Národního plánu obnovy a Evropské unie.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-card shadow-card">
            <img
              src={plakat}
              alt="Projekt Šablony Galimatyáš — informační plakát"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sablony;
