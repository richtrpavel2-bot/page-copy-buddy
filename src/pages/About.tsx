import { Card } from "@/components/ui/card";
import { Heart, Users, Sparkles, Images, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Link
            to="/fotogalerie"
            className="group mx-auto flex max-w-3xl items-center justify-between gap-6 rounded-3xl border border-border/60 bg-secondary/40 p-8 shadow-card transition-shadow hover:shadow-lg md:p-10"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Images className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-primary">Fotogalerie</h2>
                <p className="mt-2 text-muted-foreground">
                  Představení, dílny, tábory a výstavy — fotky z akcí spolku.
                </p>
              </div>
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
