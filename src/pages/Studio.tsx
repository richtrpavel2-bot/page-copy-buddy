import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { School, Sun, Theater } from "lucide-react";

const features = [
  { icon: Sun, title: "Dopolední termíny", text: "Hrajeme v dopoledních hodinách, abychom se vešli do rozvrhu škol." },
  { icon: School, title: "Pro MŠ, ZŠ i SŠ", text: "Repertoár máme rozdělený podle věku — od pohádek po témata pro teenagery." },
  { icon: Theater, title: "Mobilní jeviště", text: "Přijedeme za vámi i bez velkého technického zázemí." },
];

const Studio = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Naše divadelní studio</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Studio My Dvě
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Komorní divadelní studio v rámci spolku Galimatyáš, které se specializuje na
              dopolední představení pro mateřské, základní a střední školy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-border/60 p-8 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-dashed border-border p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Doplň text
            </p>
            <h2 className="mt-2 font-display text-2xl text-primary">Repertoár & ceny</h2>
            <p className="mt-3 text-muted-foreground">
              Sem doplníme přehled aktuálních titulů, věkové doporučení, délku představení
              a cenovou nabídku pro školy.
            </p>
            <Button asChild className="mt-6 rounded-full px-7">
              <Link to="/kontakt">Objednat představení</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Studio;
