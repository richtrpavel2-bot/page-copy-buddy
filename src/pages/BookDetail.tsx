import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { books } from "@/data/books";
import NotFound from "./NotFound";

const BookDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const book = books.find((b) => b.id === slug);

  if (!book) return <NotFound />;

  return (
    <article className="container py-10 md:py-16">
      <Button
        asChild
        variant="ghost"
        className="mb-6 -ml-3 rounded-full text-muted-foreground"
      >
        <Link to="/nakladatelstvi-limonada">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na Nakladatelství LIMONÁDA
        </Link>
      </Button>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[5fr_6fr] md:gap-12">
        <div className="overflow-hidden rounded-3xl bg-muted">
          <img
            src={book.image}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {book.date}
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
            {book.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            {book.excerpt}
          </p>

          {book.body && (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {book.body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-border/60 bg-secondary/40 p-6">
            <p className="font-display text-lg font-semibold text-foreground">
              Objednávky a informace
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
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
      </div>
    </article>
  );
};

export default BookDetail;
