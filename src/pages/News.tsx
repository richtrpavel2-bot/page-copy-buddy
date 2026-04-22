import { useMemo } from "react";
import NewsCard from "@/components/news/NewsCard";
import { news } from "@/data/news";

const News = () => {
  const sorted = useMemo(
    () => [...news].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  return (
    <div className="container py-12 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="font-medium uppercase tracking-widest text-accent">
          Aktuálně
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
          Co se u nás právě děje
        </h1>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Přehled nejbližších představení, dílen a novinek ze života spolku.
        </p>
      </header>

      <section className="mt-12 md:mt-16">
        {sorted.length === 0 ? (
          <div className="mx-auto max-w-md rounded-3xl border border-dashed border-border bg-secondary/40 p-10 text-center">
            <p className="font-display text-xl font-semibold">
              Zatím nic nového
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              …ale pracujeme na tom. Mrkni sem zase brzy!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default News;
