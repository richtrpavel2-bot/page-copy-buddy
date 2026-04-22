export type NewsCategory = "Představení" | "Dílna" | "Novinka" | "Oznámení";

export interface NewsItem {
  id: string;
  title: string;
  /** ISO datum, např. "2026-05-15" */
  date: string;
  category: NewsCategory;
  location?: string;
  excerpt: string;
  link?: string;
}

/**
 * Aktuality a akce spolku.
 * Pro přidání nové položky stačí zkopírovat jeden objekt a upravit pole.
 * Řazení probíhá automaticky podle data (od nejnovějšího).
 */
export const news: NewsItem[] = [
  {
    id: "primer-predstaveni",
    title: "PŘÍKLAD — Pohádka O ztracené notě",
    date: "2026-05-15",
    category: "Představení",
    location: "Divadlo Šumperk",
    excerpt:
      "Hudebně-dramatická pohádka pro děti od 4 let. Vstupné dobrovolné, rezervace přes Facebook.",
    link: "https://www.facebook.com/spolekgalimatyas",
  },
  {
    id: "primer-dilna",
    title: "PŘÍKLAD — Tvořivá dílna pro rodiče s dětmi",
    date: "2026-04-28",
    category: "Dílna",
    location: "Klubovna spolku, Šumperk",
    excerpt:
      "Společné odpoledne plné hudby, pohybu a fantazie. Pro děti 3–8 let v doprovodu rodiče.",
  },
  {
    id: "primer-novinka",
    title: "PŘÍKLAD — Studio My Dvě uvádí novou inscenaci",
    date: "2026-03-10",
    category: "Novinka",
    excerpt:
      "Připravujeme premiéru nové autorské inscenace pro školy. Termíny budeme postupně zveřejňovat.",
  },
  {
    id: "primer-oznameni",
    title: "PŘÍKLAD — Hledáme dobrovolníky",
    date: "2026-02-01",
    category: "Oznámení",
    excerpt:
      "Baví tě divadlo, hudba nebo práce s dětmi? Přidej se k nám! Napiš nám na info@spolekgalimatyas.cz.",
  },
];
