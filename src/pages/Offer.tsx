import { Card } from "@/components/ui/card";
import { Drama, Palette, CalendarDays, GraduationCap, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Drama,
    title: "Divadelní představení",
    text: "Vlastní inscenace pro děti i dospělé. Hrajeme v sálech, ve školách, na festivalech i na zámeckých nádvořích.",
  },
  {
    icon: Palette,
    title: "Tvořivé dílny",
    text: "Workshopy zaměřené na herectví, hlas, pohyb a výtvarno. Vhodné pro školy i firmy.",
  },
  {
    icon: CalendarDays,
    title: "Volnočasové aktivity",
    text: "Pravidelné kroužky a kluby pro děti a mládež — divadelní, hudební a výtvarné.",
  },
  {
    icon: GraduationCap,
    title: "Semináře pro lektory",
    text: "Vzdělávací programy pro učitele, vychovatele a vedoucí amatérských souborů.",
  },
  {
    icon: PartyPopper,
    title: "Akce na míru",
    text: "Připravíme kulturní program pro vaši obec, školu, firmu nebo soukromou oslavu.",
  },
];

const Offer = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Co nabízíme</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Od malých dílen po velká představení
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Naše činnost stojí na pěti pilířích. Můžete si u nás objednat jednorázové
              představení, dlouhodobou spolupráci nebo si dát dohromady program podle vlastních
              představ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, i) => (
              <Card
                key={title}
                className="group flex flex-col border-border/60 p-8 transition-all hover:-translate-y-1 hover:shadow-soft"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl text-primary">{title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-dashed border-border p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Doplň text
            </p>
            <p className="mt-2 text-muted-foreground">
              Konkrétní tituly, ceny, fotografie a reference doplníme po předání podkladů.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-16 shadow-soft">
            <h2 className="font-display text-3xl md:text-4xl">Máte konkrétní představu?</h2>
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
