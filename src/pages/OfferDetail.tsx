import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, Mail, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { offer } from "@/data/offer";
import NotFound from "./NotFound";

const OfferDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = offer.find((o) => o.slug === slug);

  if (!item) return <NotFound />;

  return (
    <article className="container py-10 md:py-16">
      <Button
        asChild
        variant="ghost"
        className="mb-6 -ml-3 rounded-full text-muted-foreground"
      >
        <Link to="/co-nabizime">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na Co nabízíme
        </Link>
      </Button>

      <header className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[5fr_6fr] md:gap-12">
        <div className="overflow-hidden rounded-3xl bg-muted aspect-[4/5]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {item.groupLabel}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
            {item.title}
          </h1>

          {item.intro && (
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">
              {item.intro}
            </p>
          )}

          <div className="mt-8 rounded-2xl border border-border/60 bg-secondary/40 p-6">
            <p className="font-display text-lg font-semibold text-foreground">
              Přihlášky a informace
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full">
                <a href="mailto:spolek.galimatyas@seznam.cz">
                  <Mail className="mr-2 h-4 w-4" />
                  spolek.galimatyas@seznam.cz
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="tel:+420732921452">
                  <Phone className="mr-2 h-4 w-4" />
                  732 921 452
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {item.courses && item.courses.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl">
          <h2 className="font-display text-2xl text-primary md:text-3xl">
            Nabízíme
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {item.courses.map((c) => (
              <Card
                key={c.title}
                className="flex flex-col border-border/60 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-primary">{c.title}</h3>
                  {c.full && (
                    <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      Plná
                    </span>
                  )}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  {c.audience && (
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      {c.audience}
                    </span>
                  )}
                  {c.schedule && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {c.schedule}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-base leading-relaxed text-foreground/85">
                  {c.text}
                </p>
              </Card>
            ))}
          </div>
        </section>
      )}

      {item.body && (
        <section className="mx-auto mt-16 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {item.body.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      )}

      <section className="mx-auto mt-20 max-w-3xl rounded-3xl bg-primary p-8 text-center text-primary-foreground md:p-12 shadow-soft">
        <h2 className="font-display text-2xl md:text-3xl">Máte konkrétní představu?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
          Napište nám — připravíme program přímo pro vás.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-6 rounded-full px-8">
          <Link to="/kontakt">Poptat program</Link>
        </Button>
      </section>
    </article>
  );
};

export default OfferDetail;
