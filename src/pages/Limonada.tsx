import { Link } from "react-router-dom";
import { ShoppingBag, ShieldCheck, FileText, ArrowRight, MapPin } from "lucide-react";
import logoOpicka from "@/assets/limonada/drza-opicka-logo.png.asset.json";
import vizualUzBrzy from "@/assets/limonada/drza-opicka-uz-brzy.png.asset.json";

const tiles = [
  {
    icon: ShoppingBag,
    title: "Internetový obchod",
    text: "Připravujeme. Brzy zde najdete naše ručně dělané výrobky, knihy i drobnosti.",
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
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                E-shop
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
                Obchůdek Drzá opička
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Ruční výrobky, hmotná připomínka Galimatyáše i možnost nechat se pohladit a hýčkat.
              </p>
            </div>
            <img
              loading="eager"
              fetchPriority="high"
              width={420}
              height={420}
              decoding="async"
              src={logoOpicka.url}
              alt="Logo obchůdku Drzá opička"
              className="mx-auto w-48 md:w-64"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Drzá opička není jen značkou pro hmotnou připomínku našeho Galimatyáše. Je to i možnost
            nechat se pohladit a hýčkat. Oddat se dotyku kouzelných rukou té, která svou práci miluje
            a může ji prostřednictvím věcí předat až k vám. A právě v tomto spojení vzniká Drzá
            opička.
          </p>
          <p>
            Vstupte tedy směle do našeho malého obchůdku na ulici Starobranská 16 v Šumperku (vchod
            hned vedle našeho divadla) či nakupujte přes E-shop cokoliv, co vás osloví. A buďte s
            námi kdykoliv a kdekoliv.
          </p>
          <p>
            Protože každá jedna věc má v sobě ukrytý příběh. A na vás je ho přečíst. Třeba je tam
            přesně ta zpráva, na kterou jste tak dlouho čekali…
          </p>
          <p className="font-display text-2xl text-primary">Těšíme se na vás.</p>

          <p className="flex items-center gap-2 text-base">
            <MapPin className="h-5 w-5 shrink-0 text-accent" />
            Starobranská 16, Šumperk — vchod hned vedle divadla
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container max-w-4xl">
          <img
            loading="lazy"
            width={1740}
            height={1240}
            decoding="async"
            src={vizualUzBrzy.url}
            alt="Už brzy — obchůdek Drzá opička, Starobranská 16, Šumperk"
            className="w-full rounded-3xl shadow-card"
          />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            E-shop i obchůdek se aktuálně připravují.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {tiles.map(({ icon: Icon, title, text, to }) => {
              const content = (
                <>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-xl text-primary">{title}</h2>
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
