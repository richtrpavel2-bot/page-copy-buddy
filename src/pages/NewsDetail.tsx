import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { news, type NewsCategory } from "@/data/news";
import NotFound from "./NotFound";

const categoryStyles: Record<NewsCategory, string> = {
  "Představení": "bg-primary/15 text-primary",
  "Dílna": "bg-accent/20 text-accent-foreground",
  "Novinka": "bg-secondary text-secondary-foreground",
  "Oznámení": "bg-muted text-muted-foreground",
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = news.find((n) => n.id === slug);

  if (!item) return <NotFound />;

  return (
    <article className="container py-10 md:py-16">
      <Button
        asChild
        variant="ghost"
        className="mb-6 -ml-3 rounded-full text-muted-foreground"
      >
        <Link to="/aktualne">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na Aktuálně
        </Link>
      </Button>

      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[5fr_6fr] md:gap-12">
        <div className="overflow-hidden rounded-3xl bg-muted">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                categoryStyles[item.category],
              )}
            >
              {item.category}
            </span>
            <time
              dateTime={item.date}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {formatDate(item.date)}
            </time>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {item.title}
          </h1>

          {item.location && (
            <p className="mt-4 flex items-center gap-2 text-base text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              {item.location}
            </p>
          )}

          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            {item.excerpt}
          </p>

          {item.body && (
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {item.body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsDetail;
