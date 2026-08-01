import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { offer, offerGroups } from "@/data/offer";

const Offer = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Co nabízíme
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Pohybem, hlasem, obrazem a vždy s úsměvem…
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Právě se nacházíš v oblasti, která je určená třeba i tobě. Podívej se
              na nabídku volnočasových aktivit zaměřených na divadlo i zpěv. A pokud
              ne jako účastník, staň se našim divákem při divadelních představeních,
              workshopech a jiných kulturních akcích.
            </p>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Těšíme se na tebe, protože divadlo má dvě velmi důležité strany.
              Aktéři a diváci jsou si rovni — bez jejich vzájemného vztahu by to
              kouzelné umělecké dílo nevzniklo.
            </p>
          </div>
        </div>
      </section>

      {offerGroups.map((group) => {
        const items = offer.filter((o) => o.group === group.id);
        return (
          <section key={group.id} className="py-16 md:py-20">
            <div className="container">
              <div className="mx-auto max-w-3xl">
                <h2 className="font-display text-3xl text-primary md:text-4xl">
                  {group.label}
                </h2>
                <p className="mt-3 text-muted-foreground md:text-lg">
                  {group.description}
                </p>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/co-nabizime/${item.slug}`}
                    className="group block focus:outline-none"
                  >
                    <Card className="flex h-full flex-col overflow-hidden border-border/60 p-0 transition-all group-hover:-translate-y-1 group-hover:shadow-soft group-focus-visible:ring-2 group-focus-visible:ring-ring">
                      <div className="aspect-[4/5] overflow-hidden bg-muted">
                        <img
                          width={1200}
                          height={900}
                          decoding="async"
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-2xl text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-3 flex-1 text-muted-foreground">
                          {item.shortText}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          Více
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="pb-20">
        <div className="container">
          <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16 shadow-soft">
            <h2 className="font-display text-3xl md:text-4xl">
              Máte konkrétní představu?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Napište nám, co potřebujete — připravíme nabídku přímo pro vás.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-7 rounded-full px-8">
              <Link to="/kontakt">Poptat program</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
