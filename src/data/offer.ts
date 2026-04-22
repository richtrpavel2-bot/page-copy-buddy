import proDetiImg from "@/assets/offer/pro-deti.jpg";
import proDospeleImg from "@/assets/offer/pro-dospele.jpg";
import prazdninoveImg from "@/assets/offer/prazdninove-akce.jpg";
import proPedagogyImg from "@/assets/offer/pro-pedagogy.jpg";
import proVerejnostImg from "@/assets/offer/pro-verejnost.jpg";

export type OfferGroup = "volny-cas" | "vzdelavani";

export interface OfferCourse {
  title: string;
  audience?: string;
  schedule?: string;
  text: string;
  full?: boolean;
}

export interface OfferItem {
  slug: string;
  title: string;
  group: OfferGroup;
  groupLabel: string;
  shortText: string;
  image: string;
  intro?: string;
  courses?: OfferCourse[];
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
        text: "Literárně dramatická průprava. Učitel vede děti prostřednictvím dramatických metod k prožitku, rozvoji fantazie, osobnostnímu růstu. Skupina spolu funguje už několik let a má za sebou krajskou divadelní přehlídku v Olomouci s doporučením do celostátní přehlídky Dětská scéna ve Svitavách.",
        full: true,
      },
      {
        title: "PRVOH(O)RY",
        audience: "4.–8. třída (9–13 let)",
        schedule: "Středa 16:00 – 17:30",
        text: "Literárně divadelní dílna pro děti s větší či menší zkušeností s dramatickou výchovou. Setkání jsou koncipována jako dlouhá tvůrčí cesta za tvarem, který na jejím konci může být nazván divadelním představením. Skupina vznikla loni — ideální pro nováčky.",
      },
      {
        title: "TVAROH(R)Y",
        audience: "7.–9. třída (10–14 let)",
        schedule: "Pondělí 16:30 – 18:00",
        text: "Literárně dramatická průprava navazující na předchozí dílny. Cílem je plnohodnotná divadelní inscenace. Skupina patří k nejzkušenějším — má za sebou dva přímé postupy na celostátní přehlídku Dětská scéna. Volné místo po domluvě.",
        full: true,
      },
      {
        title: "DIVADOVÁDIDLO",
        audience: "SŠ (15–18 let)",
        schedule: "Pátek 16:00 – 17:30",
        text: "Literárně divadelní dílna pro zkušené hráče. Skupina má za sebou mnoho představení a zájezdů po České republice včetně celostátní přehlídky Mladá scéna v Ústí nad Orlicí. Přijetí možné po domluvě a talentové zkoušce.",
      },
      {
        title: "DIVA DIVY",
        audience: "9. třída ZŠ a SŠ (15–19 let)",
        schedule: "Úterý 16:30 – 18:00",
        text: "Literárně divadelní dílna na principech Divadovádidla. Učitel se zde stává průvodcem a koordinátorem nápadů a tvůrčích pokusů. Skupina spolu funguje osm let; vhodné i jako příprava na talentové zkoušky uměleckých škol.",
      },
      {
        title: "SÓLOVÝ ZPĚV",
        audience: "děti i dospělí",
        text: "Hodiny zpěvu jednou týdně doplněné o průpravu mluvní i pohybovou. Možné využít jako přípravu na talentové zkoušky či jen tak pro radost.",
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
    body:
      "Letní příměstský tábor 2021 – Cestou necestou s hlavou ve hvězdách. Skřítek Jiřin svolává prďolky na pomoc obrovi zaseknutému ve vesmíru.\n\n" +
      "Letní příměstský tábor 2021 – Cestou necestou do hloubi dračího srdce.\n\n" +
      "Letní příměstský tábor 2020 – Cestou necestou po stopách posvátných zvířat. Návrat dávné indiánské magie do světa lidí.\n\n" +
      "Letní pobytový tábor 2019 – Cestou necestou do světa kouzel. Tábor pro 30 dětí ve věku 6–12 let na TZ Krásné – Hraběšice.\n\n" +
      "Letní pobytový tábor 2018 – Cestou necestou do Země Nezemě (Petr Pan), ve spolupráci se SVČ Doris ve Švagrově.\n\n" +
      "Konkrétní termíny a přihlašování k aktuálnímu ročníku najdete v sekci Aktuálně nebo na vyžádání e-mailem.",
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
      "Hudebně-dramatickému centru Galimatyáš byla udělena akreditace instituce a akreditace v systému DVPP (další vzdělávání pedagogických pracovníků).",
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
    image: proVerejnostImg,
    shortText:
      "Komponované večery, autorská čtení a kulturní akce pro širokou veřejnost.",
    intro:
      "Pro veřejnost připravujeme komponované večery hudby a přednesu, autorská čtení a další kulturní akce. Aktuální termíny najdete v sekci Aktuálně.",
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
