import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { books } from "@/data/books";

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

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => (
              <Link
                key={book.id}
                to={`/nakladatelstvi-limonada/${book.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={book.image}
                    alt={book.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {book.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-primary">
                    {book.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {book.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-accent transition-colors group-hover:text-primary">
                    Více →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Limonada;
