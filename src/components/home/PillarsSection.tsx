import { Drama, Music, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Drama,
    title: "Divadlo",
    text: "Autorská i klasická představení pro děti, mládež a dospělé. Hrajeme doma i na zájezdech po celé Moravě.",
  },
  {
    icon: Music,
    title: "Hudba & volný čas",
    text: "Kroužky, dílny a tvořivá odpoledne, kde se potkávají zpěv, rytmus a fantazie.",
  },
  {
    icon: BookOpen,
    title: "Vzdělávání",
    text: "Semináře a workshopy pro učitele, lektory i amatérské soubory. Předáváme zkušenosti dál.",
  },
];

const PillarsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-primary md:text-5xl">
            Tři pilíře naší práce
          </h2>
          <p className="mt-4 text-muted-foreground">
            Spolek Galimatyáš stojí na třech nohách — divadle, volnočasových aktivitách a vzdělávání.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Card
              key={title}
              className="group relative overflow-hidden border-border/60 p-8 transition-all hover:-translate-y-1 hover:shadow-soft animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl text-primary">{title}</h3>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
