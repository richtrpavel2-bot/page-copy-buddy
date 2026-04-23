import { Link } from "react-router-dom";
import { galleries } from "@/data/galleries";

const Gallery = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Fotogalerie
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Ze života spolku
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Představení, dílny, tábory a výstavy — fotky z akcí Galimatyáše
              od roku 2017.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleries.map((g) => (
              <Link
                key={g.slug}
                to={`/fotogalerie/${g.slug}`}
                className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={g.cover}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-xl text-primary">{g.title}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {g.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-accent">
                    {g.images.length} {g.images.length === 1 ? "fotka" : g.images.length < 5 ? "fotky" : "fotek"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
