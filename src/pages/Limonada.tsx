import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Mail, Phone } from "lucide-react";

type Book = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link?: string;
};

const books: Book[] = [
  {
    id: "obchudek-splnena-prani",
    title: "Obchůdek Splněná přání",
    date: "15. srpna 2021",
    excerpt:
      "Nakupujte kouzelné maličkosti našich známých přátel z říše kouzel a přeneste si trochu té magie i k sobě domů. Knihy, kalendáře a další drobnosti.",
    link: "https://www.spolekgalimatyas.cz/obchudek-splnena-prani-2/",
  },
  {
    id: "pohadky-o-skritku-lupinkovi",
    title: "Pohádky o skřítku Lupínkovi",
    date: "21. června 2021",
    excerpt:
      "Audio zpracování půvabných pohádek o maličkém skřítkovi Lupínkovi a jeho všedních i nevšedních starostech. Pohádky byly uvedeny v Radiu Proglas jako nedělní program pro děti, ve skvělé interpretaci Kateřiny.",
    link: "https://www.spolekgalimatyas.cz/pohadky-o-skritku-lupinkovi/",
  },
  {
    id: "nils",
    title: "Nils aneb Cesta k vlastní velikosti",
    date: "21. června 2021",
    excerpt:
      "S divadelní přestávkou vám nabízíme knihu poezie o transformaci partnerských vztahů a společnosti. Kniha vznikla na motivy stejnojmenné inscenace a prodáváme ji společně s CD nádherných skladeb Kamila Duraje. Cena za knihu a CD je 310 Kč.",
    link: "https://www.spolekgalimatyas.cz/nils-aneb-cesta-k-vlastni-velikosti-2/",
  },
  {
    id: "posledni-uder-draciho-srdce",
    title: "Poslední úder dračího srdce",
    date: "2. června 2021",
    excerpt:
      "Nakladatelství Limonáda nabízí první vydanou knihu k prodeji. Zatím je v nabídce u nás v Hudebně-dramatickém centru Galimatyáš v Šumperku. Knihu prodáváme ve speciálním balíčku s ručně šitým originálním drakem.",
    link: "https://www.spolekgalimatyas.cz/zkouska-aktualita-limonada/",
  },
];

const Limonada = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Naše vlastní knihy a vydavatelská činnost
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Nakladatelství Limonáda
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Vydáváme knihy, audio nahrávky a drobnosti, které vznikají kolem našich
              divadelních inscenací. Objednávky přijímáme mailem nebo telefonicky.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full">
                <a href="mailto:spolek.galimatyas@seznam.cz">
                  <Mail className="mr-2 h-4 w-4" />
                  spolek.galimatyas@seznam.cz
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href="tel:+420732921452">
                  <Phone className="mr-2 h-4 w-4" />
                  732 921 452
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {books.map((book) => (
              <Card
                key={book.id}
                className="flex flex-col border-border/60 p-8 shadow-card transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <BookOpen className="h-6 w-6" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {book.date}
                </p>
                <h3 className="mt-2 font-display text-2xl text-primary">{book.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{book.excerpt}</p>
                {book.link && (
                  <Button
                    asChild
                    variant="link"
                    className="mt-4 self-start px-0 text-accent"
                  >
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Více info →
                    </a>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Limonada;
