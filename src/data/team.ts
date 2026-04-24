import tereza from "@/assets/lide/tereza.jpg";
import lucie from "@/assets/lide/lucie.jpg";
import slavomira from "@/assets/lide/slavomira.jpg";
import franta from "@/assets/lide/franta.jpg";
import jirina from "@/assets/lide/jirina.jpg";
import vlastimil from "@/assets/lide/vlastimil.jpg";
import marta from "@/assets/lide/marta.jpg";
import uklizecka from "@/assets/lide/uklizecka.jpg";
import muriela from "@/assets/lide/muriela.jpg";
import karel from "@/assets/lide/karel.jpg";

export interface CoreMember {
  name: string;
  image: string;
  bio: string[];
  quote?: string;
}

export interface ExternalMember {
  name: string;
  image?: string;
  role: string;
}

export const coreTeam: CoreMember[] = [
  {
    name: "Mgr. et Mgr. Tereza Karlíková",
    image: tereza,
    bio: [
      "Vystudovala Gymnázium Jana Nerudy v Praze (hudební sekce — obor zobcová a příčná flétna), FF UP v Olomouci obor Muzikologie, PdF UP v Olomouci obor ČJ – AJ pro II. stupeň ZŠ a v rámci celoživotního vzdělávání dramatickou výchovu na DAMU v Praze.",
      "V rámci studia absolvovala semestrální pobyt na University College of Worcester ve Velké Británii.",
      "Je laureátkou Mezinárodní soutěže Zdeňka Fibicha v interpretaci koncertního melodramu.",
      "Zakladatelka, herečka, scénografka a režisérka Studia My Dvě, které se specializuje na tvorbu inscenací pro děti a mládež; lektorka divadelních dílen a vedoucí volnočasových kroužků — duše celého projektu.",
    ],
    quote:
      "Když provázím děti v literárně-dramatických a divadelních dílnách, je to jako když ležím na kameni uprostřed lesa a dívám se do nebe. Hledám znamení svého vlastního uvědomění a počítám listy, které vidím v letu. Konečně unikám společnosti dospělých a jsem sama sebou. Klaním se hoře těsně pod vrcholem a čekám. Zbytek nechávám skrytý. Je to stejné jako vnímat moře na pobřeží a vlny nechat rackům. Slunce mě líbá a strakapoud vyťukává zprávu, že jednou to přijde, že není důvod cítit se ztracena, i když je to mnohdy tak těžké.",
  },
  {
    name: "MgA. Lucie Kučerová",
    image: lucie,
    bio: [
      "Vystudovala dramatickou výchovu na JAMU v Brně na ateliéru Divadlo a výchova; v rámci studia strávila semestr na divadelní fakultě v anglickém Winchesteru, kde se věnovala divadelní i pedagogické tvorbě.",
      "Vedle divadla se věnuje také zpěvu ve všech jeho žánrech; podílela se na realizaci několika dětských táborů a má bohaté lektorské zkušenosti s vedením divadelních a hudebních dílen (mezi ně patří Loutkářská Chrudim nebo ostravský festival Léto s pimprlaty).",
      "Ve spolku působí jako lektorka divadelních dílen, učitelka divadelní výchovy a především jako zakladatelka, herečka, dramaturgyně a režisérka divadelního Studia My Dvě, které se specializuje na tvorbu inscenací pro děti a mládež — tělo celého projektu.",
    ],
    quote:
      "Když hrajeme pro děti, je to jako by se celý život inscenace vznášel pod vodou na jednom provazu s diváky. A každý smích, každé zachvění, každé ticho drží provaz tak pevně, jak to dokáží jen děti. A poté se objevují korály, barevné rybky i podmořský poklad. Divadlo zastřené kouzlem komunikace, hlavně té, co není vidět. Nádech, výdech, vyplouváme s perlou v dlani…",
  },
];

export const externalTeam: ExternalMember[] = [
  { name: "Ing. Slavomíra Vydusilová", image: slavomira, role: "PR manažerka" },
  { name: "Franta (B)obr", image: franta, role: "technik – zvukař" },
  { name: "Karel Hlučný", image: karel, role: "technik – osvětlovač" },
  {
    name: "Bc. et Mgr. et doc. et JUDr. et prof. Jiřina Tlampačová Porybná CSc.",
    image: jirina,
    role: "projektová manažerka",
  },
  { name: "Vlastimil Duchman", image: vlastimil, role: "spolkový psycholog a poradce" },
  { name: "Rampepurda a Karlička", image: uklizecka, role: "uklízečky" },
  { name: "Mgr. Marta Krákavá PhD.", image: marta, role: "pedagogický dozor" },
  { name: "Muriela", image: muriela, role: "fotografka spolku" },
];
