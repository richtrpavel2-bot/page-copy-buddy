import tereza from "@/assets/lide/tereza.jpg";
import lucie from "@/assets/lide/lucie.jpg";
import sonaAsset from "@/assets/lide-new/sona_vavrova.jpg.asset.json";
import zuzanaAsset from "@/assets/lide-new/zuzana_hoskova.jpg.asset.json";
import janaPavelAsset from "@/assets/lide-new/jana_hrochova_pavel_skyva.jpg.asset.json";
import evaAsset from "@/assets/lide-new/eva_psencikova.jpg.asset.json";
import annaAsset from "@/assets/lide-new/anna_muratidisova.jpg.asset.json";
import stanislavAsset from "@/assets/lide-new/stanislav_kucera.jpg.asset.json";
import veronikaAsset from "@/assets/lide-new/veronika_subrtova_2.jpg.asset.json";
import alfredAsset from "@/assets/lide-new/alfred_scchonberg.jpg.asset.json";

export interface CoreMember {
  name: string;
  image: string;
  bio: string[];
  quote?: string;
}

export interface ExternalPerson {
  name: string;
  role: string;
  tagline?: string;
}

export interface ExternalMember extends ExternalPerson {
  image?: string;
  secondary?: ExternalPerson;
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
  {
    name: "Soňa Vávrová",
    role: "organizátorka festivalu Zpátky ke kořenům",
    tagline: "hnací síla Galimatyáše",
    image: sonaAsset.url,
  },
  {
    name: "Zuzana Hošková",
    role: "propagace, finanční záležitosti",
    tagline: "vlídná tvář Galimatyáše",
    image: zuzanaAsset.url,
  },
  {
    name: "Jana Hrochová",
    role: "technická spolupráce",
    tagline: "selský rozum Galimatyáše",
    image: janaPavelAsset.url,
    secondary: {
      name: "Pavel Skyva",
      role: "mistr technik",
      tagline: "vždy rychlá záchrana Galimatyáše",
    },
  },
  {
    name: "Eva Pšenčíková",
    role: "kreativní sektor",
    tagline: "tichá a klidná náruč Galimatyáše",
    image: evaAsset.url,
  },
  {
    name: "Anna Muratidisová",
    role: "kreativní sektor",
    tagline: "humor a spříznění Galimatyáše",
    image: annaAsset.url,
  },
  {
    name: "Stanislav Kučera",
    role: "technická spolupráce",
    tagline: "pole zkušeností Galimatyáše",
    image: stanislavAsset.url,
  },
  {
    name: "Veronika Šubrtová",
    role: "kreativní sektor",
    tagline: "krásná tvář Galimatyáše",
    image: veronikaAsset.url,
  },
  {
    name: "Alfréd Schönberg",
    role: "mecenáš a podporovatel festivalu Zpátky ke kořenům",
    image: alfredAsset.url,
  },
];
