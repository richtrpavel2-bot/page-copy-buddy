import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { NewsCategory, NewsItem } from "@/data/news";

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

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <Link
      to={`/aktualne/${item.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm",
            categoryStyles[item.category],
          )}
        >
          {item.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={item.date}
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          {formatDate(item.date)}
        </time>

        <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-foreground">
          {item.title}
        </h3>

        {item.location && (
          <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-accent" />
            {item.location}
          </p>
        )}

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>

        <span className="mt-4 inline-flex items-center text-sm font-medium text-accent transition-colors group-hover:text-primary">
          Více →
        </span>
      </div>
    </Link>
  );
};

export default NewsCard;
