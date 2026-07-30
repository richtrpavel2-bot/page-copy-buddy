import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import hlavicka from "@/assets/festival/festival-hlavicka.jpg";
import logo from "@/assets/festival/festival-logo.jpg";
import tym from "@/assets/festival/tym-zpatky-ke-korenum.jpg";

const FestivalKoreny = () => {
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

      <section className="pb-20">
        <div className="container max-w-3xl">
          <div className="flex items-start gap-4 rounded-3xl border border-border/60 bg-secondary/40 p-8 shadow-card">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div>
              <h2 className="font-display text-xl text-primary">Program festivalu</h2>
              <p className="mt-2 text-muted-foreground">
                Postupně sem doplníme jednotlivé měsíce, které už proběhly — včetně
                fotografií, plakátů, anotací a programu. Podklady na září dodáme během
                srpna.
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
