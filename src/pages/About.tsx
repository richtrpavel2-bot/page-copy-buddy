import { Card } from "@/components/ui/card";
import { Feather, Users, Sparkles, Images, ArrowRight, UserCircle2, HandHeart, HeartHandshake, Sparkle, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/o-spolku/o-spolku-hero.jpg";

const subpages = [
  { to: "/o-nas/spolek", title: "Spolek GALIMATYÁŠ", text: "Kdo jsme, co děláme a výroční zpráva ke stažení.", icon: BookMarked },
  { to: "/o-nas/lide", title: "Lidé", text: "Kdo za spolkem stojí — zakladatelky a externí kolegové.", icon: UserCircle2 },
  { to: "/o-nas/podporuji-nas", title: "Podporují nás", text: "Instituce, města a partneři, díky kterým můžeme tvořit.", icon: HandHeart },
  { to: "/o-nas/jak-nas-podporit", title: "Jak nás můžete podpořit", text: "Možnosti, jak nám pomoct — od sdílení po finanční dar.", icon: HeartHandshake },
  { to: "/o-nas/festival-zpatky-ke-korenum", title: "Festival Zpátky ke kořenům", text: "Náš festival, který spojuje hudbu, divadlo a tradice.", icon: Sparkle },
  { to: "/co-nabizime", title: "Co nabízíme", text: "Představení, dílny, vzdělávání a kulturní akce na míru.", icon: Images },
];

const values = [
  { icon: Feather, title: "S lehkostí", text: "Vše, co děláme nám působí radost a pohání nás to dál – k vám i do výšin umělecké tvorby." },
  { icon: Users, title: "Společně", text: "Jsme tým, ve kterém se navzájem obohacujeme. Nezávisle na věku či profesním zaměření. Všichni na jednom krásném velkém jevišti světa." },
  { icon: Sparkles, title: "Hravě", text: "Fantazie nás zavede daleko ve smýšlení i nazírání na vlastní život. Každá velká věc začíná v myšlence. A divadlo je plné těchto myšlenek." },
];

const About = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-5 md:gap-14">
            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">O spolku</p>
              <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
                Kdo je Galimatyáš?
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Jsme uskupení lidí, kteří stále hledají krásu v umění. Divadlo, hudba,
                mluvený projev, obrazy, pohyb, světlo. Prostřednictvím našich kulturních
                akcí nacházíme pospolitost a klid. A s notnou dávkou radosti sdružujeme
                jedny z nejkreativnějších jedinců našeho města Šumperk i okolí.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-3xl shadow-card">
                <img
                  width={1200}
                  height={900}
                  decoding="async"
                  src={heroAbout}
                  alt="Spolek Galimatyáš — divadelní dílna Okolo"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
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
              Tvoříme bezpečný prostor —
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>pro naši divadelní tvorbu a všechny nápady, co přicházejí,</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>pro naše děti i dospělé divadelní i hudební múzou políbené,</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>a pro všechny diváky a další hosty, kteří našemu světu dodávají další rozměr.</span>
              </li>
            </ul>
            <p className="mt-5 text-muted-foreground">
              Věříme, že kultura se neodvíjí jen od velkých měst, není luxusem ani
              nedostupnou zábavou určenou jen intelektuálům, a rozhodně není na ústupu
              před dnešní technologickou a odcizenou dobou. Pro nás je kultura způsobem
              komunikace, souznění, možnosti růstu a nekonečnou vděčností za místo,
              kde žijeme a kde můžeme vytvářet lepší obraz toho našeho světa.
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
          <h2 className="text-center font-display text-3xl font-semibold text-primary md:text-4xl">
            Prozkoumejte další
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
            {subpages.map(({ to, title, text, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-start gap-5 rounded-3xl border border-border/60 bg-secondary/40 p-6 shadow-card transition-shadow hover:shadow-lg md:p-8"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl text-primary">{title}</h3>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
