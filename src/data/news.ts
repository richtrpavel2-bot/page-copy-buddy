import komponovanyVecer from "@/assets/news/komponovany-vecer.jpg";
import vyletSedlo from "@/assets/news/vylet-sedlo.jpg";
import branyJeseniku from "@/assets/news/brany-jeseniku.jpg";
import zpatkyKeKorenum from "@/assets/news/zpatky-ke-korenum.jpg";
import patyDen from "@/assets/news/paty-den.jpg";
import ctvrtyDen from "@/assets/news/ctvrty-den.jpg";
import tretiDen from "@/assets/news/treti-den.jpg";
import staleDruhyDen from "@/assets/news/stale-druhy-den.jpg";
import druhyDen from "@/assets/news/druhy-den.png";
import prvniDen from "@/assets/news/prvni-den.jpg";

export type NewsCategory = "Představení" | "Dílna" | "Novinka" | "Oznámení";

export interface NewsItem {
  id: string;
  title: string;
  /** ISO datum, např. "2026-05-15" */
  date: string;
  category: NewsCategory;
  location?: string;
  excerpt: string;
  image: string;
  /** Volitelný delší text pro detailní stránku (Markdown / prostý text). Když chybí, zobrazí se jen excerpt. */
  body?: string;
}

/**
 * Aktuality a akce spolku.
 * Pro přidání nové položky stačí zkopírovat jeden objekt a upravit pole.
 * Řazení probíhá automaticky podle data (od nejnovějšího).
 */
export const news: NewsItem[] = [
  {
    id: "komponovany-vecer-hudby-a-prednesu",
    title: "Komponovaný večer hudby a přednesu",
    date: "2026-01-30",
    category: "Představení",
    location: "klášterní kostel, Šumperk",
    excerpt:
      "A na závěr našeho putování Jeseníky vás túrou pěveckých a přednesových čísel provede skupina Kdo hraje, je frajerka. Těšíme se na Vás v klášterním kostele.",
    image: komponovanyVecer,
  },
  {
    id: "vylet-po-stopach-alfreda-schonberga",
    title: "Náš první společný výlet po stopách Alfréda Schönberga",
    date: "2026-01-17",
    category: "Představení",
    excerpt:
      "V rámci nově vznikajícího festivalu se vydáme navštívit Horskou službu. Buďte s námi 🙂",
    image: vyletSedlo,
  },
  {
    id: "brany-jeseniku-se-oteviraji",
    title: "Brány Jeseníků se otevírají",
    date: "2026-01-10",
    category: "Představení",
    excerpt:
      "Nevšední pohledy z ptačí perspektivy a všední pohledy horskoslužebníků v Jeseníkách jsou první a zahajovací akcí celoročního festivalu. Nesmíte na ní tedy chybět, ať vám nic neunikne 🙂",
    image: branyJeseniku,
  },
  {
    id: "zpatky-ke-korenum",
    title: "Zpátky ke kořenům aneb Jeseníky – Ráj na Zemi",
    date: "2026-01-03",
    category: "Novinka",
    excerpt:
      "Je nám velkou ctí, že se naše prostory propůjčí projektu Alfréda Schönberga, patrona a mecenáše města Šumperk, a že zde úderem lednových měsíců vznikne celoroční festival Zpátky ke kořenům, který spojuje město s jeho historií a navrací mu sílu proudící pod povrchem jeho ulic.",
    image: zpatkyKeKorenum,
  },
  {
    id: "paty-divadelni-vanocni-den",
    title: "Pátý divadelní vánoční den",
    date: "2025-12-31",
    category: "Představení",
    excerpt:
      "A vše zakončíme skupinou Divadovádidlo a jejich prvními monology v doprovodu dospělých zpěváků 🙂",
    image: patyDen,
  },
  {
    id: "ctvrty-divadelni-vanocni-den",
    title: "Čtvrtý divadelní vánoční den",
    date: "2025-12-30",
    category: "Představení",
    excerpt:
      "Ve čtvrtém dnu naše oblíbené Kdo hraje, je frajerka a jejich první divadlo poezie 🙂",
    image: ctvrtyDen,
  },
  {
    id: "treti-divadelni-vanocni-den",
    title: "Třetí divadelní vánoční den",
    date: "2025-12-29",
    category: "Představení",
    excerpt:
      "A ve středu je prostor pro naše nejmenší, však divadelně již velmi zkušené. Připravit k odletu raz dva tři a jejich František Hrubín 🙂",
    image: tretiDen,
  },
  {
    id: "stale-druhy-divadelni-vanocni-den",
    title: "Stále druhý divadelní vánoční den",
    date: "2025-12-28",
    category: "Představení",
    excerpt:
      "A v druhé půlce tohoto našlapaného dne uvidíte Tak uvidíme ženy a jejich vánoční ohlédnutí za partnerskými vztahy 🙂",
    image: staleDruhyDen,
  },
  {
    id: "druhy-divadelni-vanocni-den",
    title: "Druhý divadelní vánoční den",
    date: "2025-12-28",
    category: "Představení",
    excerpt:
      "V první části našeho druhého dne se vám představí skupina Prvohory a skupina Diva Divy 🙂",
    image: druhyDen,
  },
  {
    id: "prvni-divadelni-vanocni-den",
    title: "První divadelní vánoční den",
    date: "2025-12-27",
    category: "Představení",
    excerpt:
      "V prvním dnu se vám představí skupina Tvarohry a dětská část zpěváků ❤️",
    image: prvniDen,
  },
];
