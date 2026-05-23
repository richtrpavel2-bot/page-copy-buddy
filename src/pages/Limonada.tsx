import { Link } from "react-router-dom";
import { ShoppingBag, ShieldCheck, FileText, ArrowRight } from "lucide-react";

const tiles = [
  {
    icon: ShoppingBag,
    title: "Internetový obchod",
    text: "Připravujeme. Brzy zde najdete naše knihy, nahrávky a drobnosti.",
    to: null as string | null,
  },
  {
    icon: ShieldCheck,
    title: "Pravidla ochrany soukromí",
    text: "Jak nakládáme s vašimi osobními údaji.",
    to: "/nakladatelstvi-limonada/ochrana-soukromi",
  },
  {
    icon: FileText,
    title: "Obchodní podmínky",
    text: "Podmínky nákupu, dodání a reklamace.",
    to: "/nakladatelstvi-limonada/obchodni-podminky",
  },
];

const Limonada = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Knihy, nahrávky a drobnosti od Galimatyáše
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              E-shop
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {tiles.map(({ icon: Icon, title, text, to }) => {
              const content = (
                <>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl text-primary">{title}</h3>
                    {to && (
                      <ArrowRight className="h-5 w-5 flex-shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </>
              );

              if (!to) {
                return (
                  <div
                    key={title}
                    className="rounded-3xl border border-border/60 bg-secondary/40 p-6 shadow-card md:p-8"
                  >
                    {content}
                  </div>
                );
              }

              return (
                <Link
                  key={title}
                  to={to}
                  className="group rounded-3xl border border-border/60 bg-secondary/40 p-6 shadow-card transition-shadow hover:shadow-lg md:p-8"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Limonada;
