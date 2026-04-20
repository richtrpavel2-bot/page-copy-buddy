import { Card } from "@/components/ui/card";
import { Heart, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "S láskou", text: "Vše, co děláme, dává smysl jen tehdy, když to děláme s radostí." },
  { icon: Users, title: "Spolu", text: "Spojujeme generace, profesionály i amatéry, malá města i velká jeviště." },
  { icon: Sparkles, title: "Hravě", text: "Fantazie je naše hlavní suroviny. I vážná témata umíme předat lehce." },
];

const About = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">O spolku</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Kdo je Galimatyáš
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Spolek Galimatyáš je hudebně-dramatické centrum se sídlem v Šumperku. Vznikl
              z přesvědčení, že divadlo a hudba patří do života každého z nás — bez ohledu
              na věk, vzdělání nebo to, kolik nás na představení přijde.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
              Naše poslání
            </h2>
            <p className="mt-5 text-muted-foreground">
              Tvoříme prostor, kde se potkávají profesionální umělci, dobrovolníci, děti
              a publikum. Připravujeme vlastní inscenace, vzdělávací programy a kulturní akce
              šité na míru — pro školy, obce, festivaly i jednotlivce.
            </p>
            <p className="mt-4 text-muted-foreground">
              Věříme, že kultura není luxus. Je to způsob, jak se domluvit, jak si rozumět
              a jak si vážit místa, kde žijeme.
            </p>
          </div>
          <div className="rounded-3xl bg-secondary/60 p-8 md:p-10">
            <h3 className="font-display text-2xl text-primary">V kostce</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-muted-foreground">Sídlo</dt>
                <dd className="font-medium">Šumperk</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-muted-foreground">Forma</dt>
                <dd className="font-medium">Zapsaný spolek</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-muted-foreground">Zaměření</dt>
                <dd className="font-medium">Divadlo · Hudba · Vzdělávání</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Působnost</dt>
                <dd className="font-medium">Olomoucký kraj a okolí</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-semibold text-primary md:text-4xl">
            Hodnoty, kterých se držíme
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-border/60 p-8 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl text-primary">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-border p-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Doplň text
            </p>
            <h2 className="mt-2 font-display text-2xl text-primary">Výroční zpráva</h2>
            <p className="mt-3 text-muted-foreground">
              Sem patří odkaz na PDF výroční zprávy nebo shrnutí roku. (Placeholder
              pro doplnění obsahu copywriterem.)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
