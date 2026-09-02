import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhotoLightbox from "@/components/PhotoLightbox";
import hlavicka from "@/assets/festival/festival-hlavicka.jpg";
import logo from "@/assets/festival/festival-logo.jpg";
import tym from "@/assets/festival/tym-zpatky-ke-korenum.jpg";
import { festivalMonths } from "@/data/festival";


const FestivalKoreny = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{ monthId: string; index: number } | null>(null);
  const selectedMonth = festivalMonths.find((month) => month.id === selectedPhoto?.monthId);
  const selectedMonthPhotos = selectedMonth
    ? [
        { src: selectedMonth.program, alt: `Program festivalu – ${selectedMonth.month}` },
        ...selectedMonth.posters,
        ...selectedMonth.gallery,
      ]
    : [];

  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-20">
          <Link
            to="/o-nas"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Zpět na O spolku
          </Link>

          <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 shadow-card">
            <img
              loading="eager"
              fetchPriority="high"
              width={1600}
              height={600}
              decoding="async"
              src={hlavicka}
              alt="Noviny Alfréda Schönberga – Festival kulturních akcí Zpátky ke kořenům"
              className="w-full object-cover"
            />
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-accent">
            Festival
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
            Zpátky ke kořenům
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Festival, který nás propojuje s místem, kde žijeme. Divadlo, koncerty, debaty
            s hosty. Ulice Starobranská naplněná kouzlem lidské pospolitosti a spřízněnosti.
            Zpátky ke kořenům a vzhůru do oblak. To jsme my.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-[1fr_260px] md:items-start">
            <div className="max-w-3xl space-y-5 text-muted-foreground md:text-lg">
              <h2 className="font-display text-3xl text-primary md:text-4xl">O festivalu</h2>
              <p>
                Festival Zpátky ke kořenům vznikl jako reakce na dobu, která nás odcizuje.
                Odcizuje od tradic, od komunikace, od nás samých. Na počátku jsme byly dvě
                a jeden vypsaný grant na ministerstvo kultury. Teď je nás mnoho a ač bez
                grantu tvoříme pro vás kouzelný prostor pro vzájemné sdílení.
              </p>
              <p>
                Jsme odhodlaná společnost lidí, které sdružuje mnoho vysokých cílů a hodnot.
                A tak jako rytíři kulatého stolu bráníme kulturu a vše s ní spojené a
                pořádáme takové akce, které mají osobní a osobitý ráz. V čele s naším
                mecenášem a patronem Alfrédem Schönbergem. Ten nás povolal zpět, aby toto
                krásné město znovu povstalo a stalo se kulturním od samotných základů.
              </p>
              <p>
                Proto je první ročník zaměřen na kořeny. Vracíme se k historickým tématům
                našeho města. Oživujeme je prostřednictvím toho nejkrásnějšího, co máme.
                Prostřednictvím našich dětí, hudby, divadla, mluveného projevu a
                prostřednictvím vás – lidí, co zde žijí a chtějí být šťastní.
              </p>
              <p>
                A tak vítejte. Vítejte v našem světě. Nechte se hýčkat a přijměte pozvání na
                kteroukoliv naši akci. Těšíme se na vás.
              </p>
              <p className="font-display text-xl text-primary">
                Tým Galimatyáš a Alfréd Schönberg
              </p>
            </div>

            <aside className="rounded-3xl border border-border/60 bg-secondary/40 p-6 text-center shadow-card">
              <img
                width={400}
                height={400}
                decoding="async"
                src={logo}
                alt="Logo festivalu Zpátky ke kořenům – Alfréd Schönberg"
                className="mx-auto w-40 rounded-2xl"
                loading="lazy"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                Nositel řádu <span className="font-semibold text-primary">Genius loci</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Hlavní organizátor celoročního festivalu: Spolek Galimatyáš, IČO 22764224,
                Starobranská 16, Šumperk
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <h2 className="font-display text-3xl text-primary md:text-4xl">Náš tvůrčí tým</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border/60 shadow-card">
            <img
              width={1400}
              height={900}
              decoding="async"
              src={tym}
              alt="Tvůrčí tým festivalu Zpátky ke kořenům"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            Program festivalu
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Měsíc po měsíci — téma, program, plakáty jednotlivých akcí a fotografie.
          </p>

          <div className="mt-10 space-y-16">
            {festivalMonths.map((m) => (
              <article key={m.id} className="border-t border-border/60 pt-10">
                <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
                  <Button
                    type="button"
                    variant="ghost"
                    aria-label={`Zvětšit program festivalu – ${m.month}`}
                    onClick={() => setSelectedPhoto({ monthId: m.id, index: 0 })}
                    className="h-auto overflow-hidden rounded-3xl border border-border/60 bg-muted p-0 shadow-card"
                  >
                    <img
                      width={1000}
                      height={1414}
                      decoding="async"
                      src={m.program}
                      alt={`Program festivalu – ${m.month}`}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                  </Button>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {m.month}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-primary md:text-3xl">
                      {m.theme}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-foreground/85">
                      {m.annotation}
                    </p>

                    {m.posters.length > 0 && (
                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {m.posters.map((p, index) => (
                           <Button
                             type="button"
                             variant="ghost"
                            key={p.src}
                             className="h-auto overflow-hidden rounded-2xl border border-border/60 bg-muted p-0"
                             aria-label={`Zvětšit: ${p.alt}`}
                             onClick={() => setSelectedPhoto({ monthId: m.id, index })}
                          >
                            <img
                              width={1200}
                              height={900}
                              decoding="async"
                              src={p.src}
                              alt={p.alt}
                              loading="lazy"
                              className="w-full object-cover"
                            />
                           </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {m.gallery.length > 0 && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {m.gallery.map((g, index) => (
                       <Button
                         type="button"
                         variant="ghost"
                        key={g.src}
                         className="h-auto min-h-44 overflow-hidden rounded-2xl bg-muted p-0"
                         aria-label={`Zvětšit: ${g.alt}`}
                         onClick={() => setSelectedPhoto({
                           monthId: m.id,
                           index: m.posters.length + index,
                         })}
                      >
                        <img
                          width={1200}
                          height={900}
                          decoding="async"
                          src={g.src}
                          alt={g.alt}
                          loading="lazy"
                          className="h-56 w-full object-contain"
                        />
                       </Button>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="mt-14 flex items-start gap-4 rounded-3xl border border-border/60 bg-secondary/40 p-8 shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl text-primary">Další měsíce</h3>
              <p className="mt-2 text-muted-foreground">
                Zbývající měsíce doplníme, jakmile dorazí podklady — fotografie,
                plakáty, anotace a program.
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

      <PhotoLightbox
        photos={selectedMonthPhotos}
        currentIndex={selectedPhoto?.index ?? null}
        onChange={(index) => {
          if (index === null || !selectedPhoto) {
            setSelectedPhoto(null);
            return;
          }
          setSelectedPhoto({ ...selectedPhoto, index });
        }}
      />

    </>
  );
};

export default FestivalKoreny;
