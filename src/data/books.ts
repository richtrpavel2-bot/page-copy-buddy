import splnenaPrani from "@/assets/limonada/splnena-prani.jpg";
import lupinek from "@/assets/limonada/lupinek.jpg";
import nils from "@/assets/limonada/nils.jpg";
import draciSrdce from "@/assets/limonada/draci-srdce.jpg";

export interface Book {
  id: string;
  title: string;
  /** Lidsky čitelné datum, např. "15. srpna 2021" */
  date: string;
  excerpt: string;
  image: string;
  /** Volitelný delší text pro detailní stránku */
  body?: string;
}

export const books: Book[] = [
  {
    id: "obchudek-splnena-prani",
    title: "Obchůdek Splněná přání",
    date: "15. srpna 2021",
    excerpt:
      "Nakupujte kouzelné maličkosti našich známých přátel z říše kouzel a přeneste si trochu té magie i k sobě domů. Knihy, kalendáře a další drobnosti.",
    image: splnenaPrani,
  },
  {
    id: "pohadky-o-skritku-lupinkovi",
    title: "Pohádky o skřítku Lupínkovi",
    date: "21. června 2021",
    excerpt:
      "Audio zpracování půvabných pohádek o maličkém skřítkovi Lupínkovi a jeho všedních i nevšedních starostech. Pohádky byly uvedeny v Radiu Proglas jako nedělní program pro děti, ve skvělé interpretaci Kateřiny.",
    image: lupinek,
  },
  {
    id: "nils",
    title: "Nils aneb Cesta k vlastní velikosti",
    date: "21. června 2021",
    excerpt:
      "S divadelní přestávkou vám nabízíme knihu poezie o transformaci partnerských vztahů a společnosti. Kniha vznikla na motivy stejnojmenné inscenace a prodáváme ji společně s CD nádherných skladeb Kamila Duraje. Cena za knihu a CD je 310 Kč.",
    image: nils,
  },
  {
    id: "posledni-uder-draciho-srdce",
    title: "Poslední úder dračího srdce",
    date: "2. června 2021",
    excerpt:
      "Nakladatelství Limonáda nabízí první vydanou knihu k prodeji. Zatím je v nabídce u nás v Hudebně-dramatickém centru Galimatyáš v Šumperku. Knihu prodáváme ve speciálním balíčku s ručně šitým originálním drakem.",
    image: draciSrdce,
  },
];
