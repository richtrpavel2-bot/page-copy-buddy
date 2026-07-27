import { coreTeam, externalTeam } from "@/data/team";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const People = () => {
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
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">Lidé</h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Stojí za vším, co děláme. Dvojice zakladatelek a širší tým kolegů,
              kteří nás dlouhodobě provázejí.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container space-y-20">
          {coreTeam.map((m) => (
            <article key={m.name} className="grid gap-8 md:grid-cols-[280px_1fr] md:gap-12">
              <div className="mx-auto w-full max-w-[280px] md:mx-0">
                <div className="overflow-hidden rounded-3xl bg-secondary/40 shadow-card">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="aspect-[3/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
                  {m.name}
                </h2>
                <ul className="mt-5 space-y-3 text-muted-foreground">
                  {m.bio.map((p, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {m.quote && (
                  <blockquote className="mt-6 border-l-4 border-accent/60 bg-secondary/40 p-5 italic text-foreground/80">
                    „{m.quote}"
                  </blockquote>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-semibold text-primary md:text-4xl">
            Další kolegové
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {externalTeam.map((m) => (
              <Card key={m.name} className="overflow-hidden border-border/60 shadow-card">
                {m.image && (
                  <img
                    src={m.image}
                    alt={m.secondary ? `${m.name} & ${m.secondary.name}` : m.name}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-5">
                  <h3 className="font-display text-base text-primary">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  {m.tagline && (
                    <p className="mt-1 text-sm italic text-accent">{m.tagline}</p>
                  )}
                  {m.secondary && (
                    <div className="mt-4 border-t border-border/60 pt-4">
                      <h3 className="font-display text-base text-primary">{m.secondary.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.secondary.role}</p>
                      {m.secondary.tagline && (
                        <p className="mt-1 text-sm italic text-accent">{m.secondary.tagline}</p>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            …a další dospělí a děti, kteří nejsou tolik vidět, ale jsou s námi :)
          </p>
        </div>
      </section>
    </>
  );
};

export default People;
