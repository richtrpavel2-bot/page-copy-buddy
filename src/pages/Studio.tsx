import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users } from "lucide-react";
import studioHero from "@/assets/studio/studio-hero.jpg";
import { performances } from "@/data/performances";

const Studio = () => {
  const active = performances.filter((p) => p.active);
  const archive = performances.filter((p) => !p.active);

  return (
    <>
      {/* Hero — o studiu */}
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Komorní divadlo Galimatyáš
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
                Komorní divadlo
              </h1>
              <div className="mt-6 space-y-4 text-base text-muted-foreground md:text-lg">
                <p>
                  Divadlo není jen místem, událostí a komunikačním kanálem. Divadlo je
                  mimořádným zážitkem probíhajícím mezi hledištěm a jevištěm. Až v tuto chvíli
                  vzniká skutečné umělecké dílo.
                </p>
                <p>
                  Komorní divadlo Galimatyáš fungující již od roku 2017 je přesně takovým
                  místem. Prostřednictvím příběhu s aktuálním tématem se diváci noří do světa
                  kouzel propracované scény, podmanivé hudby a osobitého hereckého projevu dvou
                  hereček. Ač hrajících převážně pro děti, vždy s jistotou přesahu až k dospělým
                  srdcím, protože něco v nás nestárne a je připraveno se neustále nechat
                  překvapovat.
                </p>
                <p>
                  A tak dorazte k nám na naše představení a přijměte zase na chvíli svět kouzel
                  divadelní iluze. Nebo to není jen iluze?
                </p>
                <p className="font-display text-xl text-primary">
                  Lucie Kučerová a Tereza Karlíková
                </p>
              </div>
              <Button asChild className="mt-8 rounded-full px-7">
                <Link to="/kontakt">Objednat představení</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border/60 shadow-card">
                <img
                  src={studioHero}
                  alt="Tereza Karlíková a Lucie Kučerová — Studio My dvě"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aktuální repertoár */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Aktuální repertoár
            </p>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
              Co právě hrajeme
            </h2>
            <p className="mt-4 text-muted-foreground">
              Komorní inscenace pro mateřské, základní a střední školy. Hrajeme v Šumperku
              i u vás ve škole.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {active.map((p) => (
              <Card
                key={p.slug}
                className="group flex flex-col overflow-hidden border-border/60 shadow-card transition-shadow hover:shadow-lg"
              >
                <Link to={`/studio-my-dve/${p.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      className={`h-full w-full object-cover ${p.focus ?? "object-top"} transition-transform duration-500 group-hover:scale-105`}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-primary">
                    <Link to={`/studio-my-dve/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h3>
                  {p.subtitle && (
                    <p className="mt-1 text-sm italic text-muted-foreground">{p.subtitle}</p>
                  )}
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {p.audience}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {p.duration}
                    </span>
                  </div>
                  <Link
                    to={`/studio-my-dve/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Podrobnosti a termíny <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Archiv */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Z archivu
            </p>
            <h2 className="mt-3 font-display text-3xl text-primary md:text-4xl">
              Inscenace, které jsme hráli
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tituly, které již nejsou na repertoáru — některé z nich můžete zhlédnout online.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {archive.map((p) => (
              <Card
                key={p.slug}
                className="group flex flex-col overflow-hidden border-border/60 bg-card/80 shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`h-full w-full object-cover ${p.focus ?? "object-top"} opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100`}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg leading-tight text-primary">{p.title}</h3>
                  {p.subtitle && (
                    <p className="mt-1 text-xs italic text-muted-foreground">{p.subtitle}</p>
                  )}
                  <p className="mt-3 line-clamp-3 flex-1 text-xs text-muted-foreground">
                    {p.excerpt}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
