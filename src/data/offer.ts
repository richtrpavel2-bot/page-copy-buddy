import proDetiImg from "@/assets/offer/pro-deti.jpg";
import proDospeleImg from "@/assets/offer/pro-dospele.jpg";
import prazdninoveImg from "@/assets/offer/prazdninove-akce.jpg";
import proPedagogyImg from "@/assets/offer/pro-pedagogy.jpg";
import proVerejnostImg from "@/assets/offer/pro-verejnost.jpg";
import tabor2021Vesmir from "@/assets/offer/tabor-2021-vesmir.jpg";
import tabor2021Draci from "@/assets/offer/tabor-2021-draci.jpg";
import tabor2020Vyska from "@/assets/offer/tabor-2020-vyska.jpg";
import tabor2019 from "@/assets/offer/tabor-2019.jpg";
import tabor2018 from "@/assets/offer/tabor-2018.jpg";
import tabor2020Zvirata from "@/assets/offer/tabor-2020-zvirata.jpg";
import taborGalerie1 from "@/assets/offer/tabor-galerie-1.jpg";
import taborGalerie2 from "@/assets/offer/tabor-galerie-2.jpg";
import cloveceNezlobNaNas from "@/assets/offer/clovece-nezlob-na-nas.jpg";
import kdoHraje1 from "@/assets/offer/kdo-hraje-1.jpg";
import kdoHraje2 from "@/assets/offer/kdo-hraje-2.jpg";
import kdoHraje3 from "@/assets/offer/kdo-hraje-3.jpg";
import kdoHraje4 from "@/assets/offer/kdo-hraje-4.jpg";
import deti1 from "@/assets/offer/deti-1.jpg";
import deti2 from "@/assets/offer/deti-2.jpg";
import deti3 from "@/assets/offer/deti-3.jpg";
import deti4 from "@/assets/offer/deti-4.jpg";
import deti5 from "@/assets/offer/deti-5.jpg";
import deti6 from "@/assets/offer/deti-6.jpg";
import deti7 from "@/assets/offer/deti-7.jpg";
import deti8 from "@/assets/offer/deti-8.jpg";
import deti9 from "@/assets/offer/deti-9.jpg";

export type OfferGroup = "volny-cas" | "vzdelavani";

export interface OfferCourse {
  title: string;
  audience?: string;
  schedule?: string;
  text: string;
  full?: boolean;
  /** Volitelná galerie fotek z kurzu. */
  images?: string[];
}

export interface OfferEdition {
  year: string;
  title: string;
  subtitle?: string;
  image?: string;
  youtubeId?: string;
  text: string;
  meta?: string;
}

export interface OfferItem {
  slug: string;
  title: string;
  group: OfferGroup;
  groupLabel: string;
  shortText: string;
  image: string;
  intro?: string;
  /** Volitelná galerie fotek pro celou stránku (zobrazí se pod intro). */
  gallery?: string[];
  courses?: OfferCourse[];
  editions?: OfferEdition[];
  /** Volitelné odstavce na konci stránky. */
  body?: string;
}

export const offer: OfferItem[] = [
  {
    slug: "pro-deti",
    title: "Pro děti",
    group: "volny-cas",
    groupLabel: "Volnočasové aktivity",
    image: proDetiImg,
    shortText:
      "Hudebně-dramatické a literárně divadelní dílny pro děti od školky po střední školu.",
    intro:
      "Volnočasové aktivity pro děti ve školním roce 2025/2026. Naše dílny vedou děti k radosti z divadla, ke spolupráci v kolektivu a k objevování vlastní fantazie.",
    courses: [
      {
        title: "Připravit k odletu RAZ DVA TŘI! (hudebně-dramatická přípravka)",
        audience: "MŠ a 1.–3. třída (5–9 let)",
        schedule: "Středa 14:00 – 15:30",
        text: "Hudebně-dramatická průprava. Prostřednictvím příběhů ze světa kouzel si děti osvojí základy dramatické výchovy. Budeme si hrát, zpívat, tančit a naučíme se společně fungovat jako kolektiv.",
      },
      {
        title: "KDO HRAJE, JE FRAJER(KA)!",
        audience: "5.–7. třída (9–12 let)",
        schedule: "Čtvrtek 15:00 – 16:30",
        text: "Literárně dramatická průprava. Učitel vede děti prostřednictvím dramatických metod k prožitku, rozvoji fantazie, osobnostnímu růstu. Divadelní představení není v literárně dramatické průpravě hlavním cílem — hlavní je naučit se fungovat ve skupině, spolupracovat s kamarády, respektovat společná pravidla, hrát si. Skupina spolu funguje už několik let a má za sebou krajskou divadelní přehlídku v Olomouci s doporučením do celostátní přehlídky Dětská scéna ve Svitavách.",
        full: true,
        images: [kdoHraje1, kdoHraje2, kdoHraje3, kdoHraje4],
      },
      {
        title: "PRVOH(O)RY",
        audience: "4.–8. třída (9–13 let)",
        schedule: "Středa 16:00 – 17:30",
        text: "Literárně divadelní dílna pro děti s větší či menší zkušeností s dramatickou výchovou. Setkání jsou koncipována jako dlouhá tvůrčí cesta za tvarem, který na jejím konci může být nazván divadelním představením. Skupina vznikla loni — ideální pro nováčky.",
        images: [deti3, deti7],
      },
      {
        title: "TVAROH(R)Y",
        audience: "7.–9. třída (10–14 let)",
        schedule: "Pondělí 16:30 – 18:00",
        text: "Literárně dramatická průprava navazující na předchozí dílny. Cílem je plnohodnotná divadelní inscenace. Skupina patří k nejzkušenějším — má za sebou dva přímé postupy na celostátní přehlídku Dětská scéna. Volné místo po domluvě.",
        full: true,
        images: [deti2, deti9],
      },
      {
        title: "DIVADOVÁDIDLO",
        audience: "SŠ (15–18 let)",
        schedule: "Pátek 16:00 – 17:30",
        text: "Literárně divadelní dílna pro zkušené hráče. Skupina má za sebou mnoho představení a zájezdů po České republice včetně celostátní přehlídky Mladá scéna v Ústí nad Orlicí. Přijetí možné po domluvě a talentové zkoušce.",
        images: [deti1, deti8],
      },
      {
        title: "DIVA DIVY",
        audience: "9. třída ZŠ a SŠ (15–19 let)",
        schedule: "Úterý 16:30 – 18:00",
        text: "Literárně divadelní dílna na principech Divadovádidla. Učitel se zde stává průvodcem a koordinátorem nápadů a tvůrčích pokusů. Skupina spolu funguje osm let; vhodné i jako příprava na talentové zkoušky uměleckých škol.",
        images: [deti4, deti6],
      },
      {
        title: "SÓLOVÝ ZPĚV",
        audience: "děti i dospělí",
        text: "Hodiny zpěvu jednou týdně doplněné o průpravu mluvní i pohybovou. Možné využít jako přípravu na talentové zkoušky či jen tak pro radost.",
        images: [deti5],
      },
    ],
  },
  {
    slug: "pro-dospele",
    title: "Pro dospělé",
    group: "volny-cas",
    groupLabel: "Volnočasové aktivity",
    image: proDospeleImg,
    shortText:
      "Literárně-dramatická dílna pro dospělé — prostor pro hledání, hraní a setkávání.",
    intro:
      "Ve školním roce 2025/2026 nabízíme následující volnočasové aktivity pro dospělé.",
    courses: [
      {
        title: "TAK UVIDÍME!",
        audience: "studenti SŠ a dospělí",
        schedule: "Úterý 18:30 – 20:00",
        text: "Literárně-dramatická dílna. Hledání, objevování, ztrácení, nacházení, hledání, objevování, ztrácení, nacházení, a tak pořád dokola…",
      },
    ],
  },
  {
    slug: "prazdninove-akce",
    title: "Prázdninové akce",
    group: "volny-cas",
    groupLabel: "Volnočasové aktivity",
    image: prazdninoveImg,
    shortText:
      "Letní příměstské i pobytové tábory pro děti — příběhové, dobrodružné, plné fantazie.",
    intro:
      "Naše tábory jsou příběhové — staneme se hlavními hybateli děje na dobrodružné cestě. Jsou koncipované tak, abychom v dětech podporovali jejich fantazii. Pořádáme je každý rok ve spolupráci se SVČ Doris Šumperk.",
    gallery: [taborGalerie1, taborGalerie2],
    editions: [
      {
        year: "2021",
        title: "Cestou necestou s hlavou ve hvězdách",
        subtitle: "Letní příměstský tábor",
        image: tabor2021Vesmir,
        text:
          "Skřítek Jiřin svolává prďolky na pomoc obrovi, který se zasekl někde ve vesmíru. Při úplňku ve střelci a zatmění měsíce se rozevřelo nebe — a od té chvíle je jasné, že ve vesmíru panuje úplně jiný pořádek než na Zemi a čeká nás pořádná jízda. „Mějte se hezky a držte si čepičky! Páčko, Skřítek Jiřin — vrchní vyšetřovatel vesmírného obrova trápení.“",
      },
      {
        year: "2021",
        title: "Cestou necestou do hloubi dračího srdce",
        subtitle: "Letní příměstský tábor",
        image: tabor2021Draci,
        text:
          "Druhý běh příměstského tábora roku 2021 — výprava do hloubi dračího srdce a za tajemstvím, které se v něm ukrývá.",
      },
      {
        year: "2020",
        title: "Cestou necestou po stopách posvátných zvířat",
        subtitle: "Letní příměstský tábor",
        image: tabor2020Zvirata,
        youtubeId: "p4rkfZ6nLMQ",
        text:
          "Kdysi dávno, když ještě neexistovalo nic z toho, co máme jako lidé k dispozici, existovala posvátná zvířata. Po pokroku se ze strachu o své kouzelné schopnosti odebrala do ústraní — a po tisíce let o nich nikdo nevěděl. Až nyní. Po letním slunovratu se odvážila znovu prozkoumat tento svět a naplnit jej dávnou indiánskou magií. Jsi nositelem kouzelné indiánské magie. Jsi předurčen. Přijď a tvůj život nikdy nebude jako dřív.",
      },
      {
        year: "2020",
        title: "Cestou necestou do výšky a zase na zem",
        subtitle: "Příměstský tábor — Andělská Akademie",
        image: tabor2020Vyska,
        youtubeId: "S1E9ImZqk4s",
        text:
          "Pozvánka k zápisu do Andělské Akademie od profesora Tenčase: „Byla jsi vybrána jakožto zástupce lidí k absolvování Andělské Akademie. Je tomu tak poprvé v celé nebeské historii, co se andělé setkají s lidmi na půdě mé školy. Přijď s úžasem v očích a radostí v srdci — protože jen šťastní lidé dosáhnou nebeských výšin.“",
      },
      {
        year: "2019",
        title: "Cestou necestou do světa kouzel",
        subtitle: "Letní pobytový tábor",
        image: tabor2019,
        youtubeId: "O2wB5usc5yg",
        meta:
          "28. 7. – 4. 8. 2019 · TZ Krásné–Hraběšice (SVČ Doris) · max. 30 dětí, 6–12 let · vedoucí: Tereza Karlíková, Lucie Kučerová, Eliška Komárková, Yvona Jurčíková",
        text:
          "Nad světem kouzel už od pradávna visí kletba temných sil. Zůstalo snad v někom něco dobrého? Vždyť je to tak snadné a lákavé škodit ostatním. Co se ale stane, když se Malá čarodějka rozhodne jinak? A co je ukryté v Knize bílé magie?",
      },
      {
        year: "2018",
        title: "Cestou necestou do Země Nezemě",
        subtitle: "Letní pobytový tábor",
        image: tabor2018,
        meta:
          "29. 7. – 4. 8. 2018 · ekologické středisko Švagrov (SVČ Doris) · 7–12 let",
        text:
          "Země Nezemě je v ohrožení. Děti přestaly snít. Vílí prášek se rozpadl v prach. Indiáni nerozumí řeči ptáků a neslyší šeptat stromy. Mořské víly ztratily svůj hlas ukrytý v lastuře a piráti mají strach vyplout zpět na moře… Kdo ovládl Zemi Nezemi? Kdo ukradl dětem snění? Pomozte!",
      },
    ],
    body: "Konkrétní termíny a přihlašování k aktuálnímu ročníku najdete v sekci Aktuálně nebo na vyžádání e-mailem.",
  },
  {
    slug: "pro-pedagogy",
    title: "Pro pedagogické pracovníky",
    group: "vzdelavani",
    groupLabel: "Vzdělávací a kulturní akce",
    image: proPedagogyImg,
    shortText:
      "Akreditované semináře DVPP zaměřené na divadelní a literární výchovu.",
    intro:
      "Hudebně-dramatickému centru Galimatyáš byla udělena akreditace instituce a akreditace v systému DVPP (další vzdělávání pedagogických pracovníků) v těchto kurzech:",
    courses: [
      {
        title: "Divadelní výchova na pozadí současné dětské literatury",
        text: "Akreditovaný kurz DVPP. Jak propojit současnou dětskou literaturu s divadelními metodami ve školní praxi.",
      },
      {
        title: "Archetypy pohádkových postav a divadelní práce s nimi",
        text: "Akreditovaný kurz DVPP. Pohádkové archetypy jako klíč k porozumění příběhu a k práci s dětským kolektivem.",
      },
      {
        title: "Jak vybrat a připravit text na přednesové recitační přehlídky",
        text: "Akreditovaný kurz DVPP. Praktický průvodce výběrem, úpravou a nastudováním textu pro recitační soutěže.",
      },
    ],
    body: "O termíny a podrobnosti k jednotlivým kurzům si napište — kurzy realizujeme po domluvě pro skupiny i jednotlivce.",
  },
  {
    slug: "pro-verejnost",
    title: "Pro veřejnost",
    group: "vzdelavani",
    groupLabel: "Vzdělávací a kulturní akce",
    image: cloveceNezlobNaNas,
    shortText:
      "Divadelní představení, komponované večery a autorská čtení pro širokou veřejnost.",
    intro:
      "Pro veřejnost připravujeme divadelní představení umělecké platformy Galimatyáš, komponované večery hudby a přednesu i autorská čtení. Aktuální termíny najdete v sekci Aktuálně.",
    editions: [
      {
        year: "2025",
        title: "Člověče, nezlob se na nás!",
        subtitle: "Divadelní představení · na motivy světových pohádek",
        image: cloveceNezlobNaNas,
        meta:
          "Sobota 18. 10. 2025 v 17:00 · Starobranská 16, Šumperk · vstupné 200 / 150 Kč",
        text:
          "Galimatyáš — umělecká platforma (divadlo, koncerty, galerie) — vás srdečně zve na divadelní představení Člověče, nezlob se na nás! na motivy světových pohádek. Žal i štěstí, smích i zamyšlení v jednom večeru.",
      },
    ],
    body:
      "Mezi naše opakující se akce patří například Komponovaný večer hudby a přednesu v klášterním kostele v Šumperku, autorské večery k novým knihám nakladatelství LIMONÁDA a doprovodné programy k představením Studia My dvě.\n\n" +
      "Pokud máte zájem o konkrétní program pro vaši obec, knihovnu, školu nebo spolek, ozvěte se nám — připravíme nabídku na míru.",
  },
];

export const offerGroups: { id: OfferGroup; label: string; description: string }[] = [
  {
    id: "volny-cas",
    label: "Volnočasové aktivity",
    description:
      "Pravidelné dílny a tábory pro děti, mládež i dospělé — celoroční program i prázdninové akce.",
  },
  {
    id: "vzdelavani",
    label: "Vzdělávací a kulturní akce",
    description:
      "Akreditované semináře pro pedagogy a kulturní program pro širokou veřejnost.",
  },
];
