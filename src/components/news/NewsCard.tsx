import { ArrowUpRight, MapPin } from "lucide-react";
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
    <article className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-3">
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
          className="text-xs font-medium text-muted-foreground"
        >
          {formatDate(item.date)}
        </time>
      </div>

      <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
        {item.title}
      </h3>

      {item.location && (
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-accent" />
          {item.location}
        </p>
      )}

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {item.excerpt}
      </p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Více info
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </article>
  );
};

export default NewsCard;
