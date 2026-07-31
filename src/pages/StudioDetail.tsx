import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Ticket, Users, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { performances } from "@/data/performances";

const StudioDetail = () => {
  const { slug } = useParams();
  const p = performances.find((item) => item.slug === slug);

  if (!p) {
    return (
      <section className="container py-24">
        <h1 className="font-display text-3xl text-primary">Představení nenalezeno</h1>
        <Link
          to="/studio-my-dve"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Zpět na Komorní divadlo
        </Link>
      </section>
    );
  }

  const d = p.detail;

  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <Link
          to="/studio-my-dve"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Zpět na Komorní divadlo
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_380px] md:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {p.active ? "Aktuální repertoár" : "Z archivu"}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">
              {p.title}
            </h1>
            {p.subtitle && (
              <p className="mt-3 text-lg italic text-muted-foreground">{p.subtitle}</p>
            )}

            {d?.quote && (
              <blockquote className="mt-8 border-l-4 border-accent/60 pl-5 font-display text-xl leading-relaxed text-primary md:text-2xl">
                {d.quote}
              </blockquote>
            )}

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {(d?.paragraphs ?? [p.excerpt]).map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>

            {d?.youtube && (
              <Button asChild variant="outline" className="mt-8 rounded-full px-6">
                <a href={d.youtube} target="_blank" rel="noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Ukázka na YouTube
                </a>
              </Button>
            )}
          </div>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border/60 bg-muted shadow-card">
              <img
                src={p.image}
                alt={p.title}
                className="w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="rounded-3xl border border-border/60 bg-secondary/40 p-6 shadow-card">
              <h2 className="font-display text-lg text-primary">Praktické informace</h2>
              <dl className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold text-foreground">Délka</dt>
                    <dd>{p.duration}</dd>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <div>
                    <dt className="font-semibold text-foreground">Pro koho</dt>
                    <dd>{p.audience}</dd>
                  </div>
                </div>
                {d?.cast && (
                  <div className="flex gap-3">
                    <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <div>
                      <dt className="font-semibold text-foreground">Hrají</dt>
                      <dd>{d.cast}</dd>
                    </div>
                  </div>
                )}
                {d?.place && (
                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <div>
                      <dt className="font-semibold text-foreground">Místo konání</dt>
                      <dd>{d.place}</dd>
                    </div>
                  </div>
                )}
                {d?.price && (
                  <div className="flex gap-3">
                    <Ticket className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <div>
                      <dt className="font-semibold text-foreground">Cena</dt>
                      <dd>{d.price}</dd>
                    </div>
                  </div>
                )}
              </dl>

              {d?.note && <p className="mt-5 text-sm text-muted-foreground">{d.note}</p>}

              {p.active && (
                <Button asChild className="mt-6 w-full rounded-full">
                  <Link to="/kontakt">Objednat představení</Link>
                </Button>
              )}
            </div>
          </aside>
        </div>

        {p.gallery && p.gallery.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl text-primary md:text-3xl">
              Fotogalerie z představení
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {p.gallery.map((src, i) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl border border-border/60 bg-muted shadow-card"
                >
                  <img
                    src={src}
                    alt={`${p.title} – foto ${i + 1}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

    </section>
  );
};

export default StudioDetail;
