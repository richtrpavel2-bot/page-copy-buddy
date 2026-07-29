import proDetiImg from "@/assets/offer/nabizime/pro-deti.jpg";
import proDospeleImg from "@/assets/offer/nabizime/pro-dospele.jpg";
import prazdninoveImg from "@/assets/offer/nabizime/prazdninove-akce.jpg";
import zpevImg from "@/assets/offer/nabizime/zpev.jpg";

import proVerejnostImg from "@/assets/offer/nabizime/pro-verejnost.jpg";
import razDvaTriImg from "@/assets/offer/nabizime/raz-dva-tri.jpg";
import kdoSiHrajeImg from "@/assets/offer/nabizime/kdo-si-hraje.jpg";
import kdoHrajeFrajerkaImg from "@/assets/offer/nabizime/kdo-hraje-frajerka.jpg";
import prvohoryImg from "@/assets/offer/nabizime/prvohory.jpg";
import tvarohryImg from "@/assets/offer/nabizime/tvarohry.jpg";
import divadovadidloImg from "@/assets/offer/nabizime/divadovadidlo.jpg";
import divaDivyImg from "@/assets/offer/nabizime/diva-divy.jpg";
import takUvidimeImg from "@/assets/offer/nabizime/tak-uvidime.jpg";
import individualniZpevImg from "@/assets/offer/nabizime/individualni-zpev.jpg";
import zenskySborImg from "@/assets/offer/nabizime/zensky-sbor.jpg";
import tabor2021Vesmir from "@/assets/offer/tabor-2021-vesmir.jpg";
import tabor2021Draci from "@/assets/offer/tabor-2021-draci.jpg";
import tabor2020Vyska from "@/assets/offer/tabor-2020-vyska.jpg";
import tabor2019 from "@/assets/offer/tabor-2019.jpg";
import tabor2018 from "@/assets/offer/tabor-2018.jpg";
import tabor2020Zvirata from "@/assets/offer/tabor-2020-zvirata.jpg";
import taborGalerie1 from "@/assets/offer/tabor-galerie-1.jpg";
import taborGalerie2 from "@/assets/offer/tabor-galerie-2.jpg";
import cloveceNezlobNaNas from "@/assets/offer/clovece-nezlob-na-nas.jpg";
import rybarovaPremiera from "@/assets/predstaveni/rybarova-zena-premiera.jpg";
import rybarovaRepriza from "@/assets/predstaveni/rybarova-zena-repriza.png";
import betlemska from "@/assets/predstaveni/betlemska-hvezda.png";
import domovKoste from "@/assets/predstaveni/domov-koste.jpg";


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

const kontakty =
  "Přihlášky a informace: spolek.galimatyas@seznam.cz, tel. 732 921 452 (Lucie) nebo 605 173 410 (Tereza).";

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
      "Umělecké vzdělávání divadlem není jen pro extroverty. Pro děti, které se rády předvádějí, mluví nahlas a nebojí se. U nás najde místo každý, kdo chce objevovat svět kolem i sám sebe jinak než se to děje doma či ve škole. Jsme místem, kde se tvoří příběhy od počátku. Místem přátelství a divadelních úspěchů. Některé skupiny si více hrají, jiné více hrají pro někoho. To vše záleží na tobě a domluvě s námi.",
    courses: [
      {
        title: "Připravit k odletu RAZ DVA TŘI! (hudebně-dramatická přípravka)",
        audience: "MŠ a 1.–2. třída (5–8 let)",
        schedule: "Den a čas bude upřesněn",
        text: "Hudebně-dramatická průprava. Prostřednictvím příběhů ze světa kouzel si děti osvojí základy dramatické výchovy. Budeme si hrát, zpívat, tančit a naučíme se společně fungovat jako kolektiv. To vše na pozadí příběhu, který nás bude celý rok provázet. A na konci roku výstup v Divadle Šumperk na velkém jevišti jako ta největší odměna pro malé začínající herce.",
      },
      {
        title: "KDO (SI) HRAJE, NEZLOBÍ!",
        audience: "3.–5. třída ZŠ (8–10 let)",
        schedule: "Den a čas bude upřesněn",
        text: "Tato divadelní skupina navazuje na přípravné oddělení. Děti již pracují samostatně a prostřednictvím divadelních metod, rytmiky a práce s hlasem se připravují na divadelní představení stejně jako starší děti. V letošním roce s příslibem divadelní soutěže. Tak uvidíme…:) Skupina je vhodná pro nováčky, kteří doplní malé zkušené herečky.",
      },
      {
        title: "KDO HRAJE, JE FRAJER(KA)!",
        audience: "7.–9. třída (11–15 let)",
        schedule: "Čtvrtek 15:00 – 16:30",
        text: "Literárně dramatická průprava. Učitel vede děti prostřednictvím dramatických metod k prožitku, rozvoji fantazie, osobnostnímu růstu. Divadelní představení není v literárně dramatické průpravě hlavním cílem — hlavní je naučit se fungovat ve skupině, spolupracovat s kamarády, respektovat společná pravidla, hrát si. Skupina spolu funguje už několik let a má za sebou krajskou divadelní přehlídku v Olomouci s doporučením do celostátní přehlídky Dětská scéna ve Svitavách. A to již dvakrát za sebou. Skupina nyní nedobírá nové členy, jen na individuální domluvu.",
        full: true,
        images: [kdoHraje1, kdoHraje2, kdoHraje3, kdoHraje4],
      },
      {
        title: "PRVOH(O)RY",
        audience: "6.–9. třída (10–15 let)",
        schedule: "Den a čas bude upřesněn",
        text: "Literárně divadelní dílna pro děti s větší či menší zkušeností s dramatickou výchovou. Setkání jsou koncipována jako dlouhá tvůrčí cesta za tvarem, který na jejím konci může být nazván divadelním představením. Skupina je ideální pro nováčky. Budeme začínat úplně od tvůrčího bodu nula.",
        images: [deti3, deti7],
      },
      {
        title: "TVAROH(R)Y",
        audience: "7.–9. třída ZŠ a 1. ročník SŠ (13–16 let)",
        schedule: "Pondělí 16:30 – 18:00",
        text: "Literárně dramatická průprava navazující na předchozí dílny. Cílem je plnohodnotná divadelní inscenace. Skupina patří k nejzkušenějším — má za sebou tři přímé postupy na celostátní přehlídku Dětská scéna. Volné místo po domluvě a následné talentové zkoušce. V letošním roce se však dobírá o nové šikovné členy, kterým by nevadilo skočit do toho po hlavě a rovnou do divadelních soutěží.",
        images: [deti2, deti9],
      },
      {
        title: "DIVADOVÁDIDLO",
        audience: "SŠ (15–18 let)",
        schedule: "Pátek 16:00 – 17:30",
        text: "Literárně divadelní dílna pro zkušené hráče. Skupina má za sebou mnoho představení a zájezdů po České republice včetně celostátní přehlídky Mladá scéna v Ústí nad Orlicí a v letošním roce vítězství na přehlídce Nonverbálního divadla Kolín Otevřeno 2026 s následným postupem na Jiráskův Hronov. Jedná se o uzavřenou skupinu. Je však velkou inspirací pro všechny, co vytrvají stejně jako tyto děti.",
        full: true,
        images: [deti1, deti8],
      },
      {
        title: "DIVA DIVY",
        audience: "9. třída ZŠ a SŠ (15–19 let)",
        schedule: "Úterý 16:30 – 18:00",
        text: "Literárně divadelní dílna na principech Divadovádidla. Učitel se zde stává průvodcem a koordinátorem nápadů a tvůrčích pokusů. Skupina spolu funguje osm let, každoročně se však obnovuje a obměňuje. V letošním roce to opět vypadá na velmi zajímavou tvůrčí partu; vhodné i jako příprava na talentové zkoušky uměleckých škol. Pokud tedy rosteš a s tebou stále touha zkusit si divadelní proces, je tato skupina ideálním odrazovým můstkem.",
        images: [deti4, deti6],
      },
    ],
    body: kontakty,
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
        text: "Literárně-dramatická dílna. Hledání, objevování, ztrácení, nacházení, hledání, objevování, ztrácení, nacházení, a tak pořád dokola… Skupina je tvořena pevným základem žen, co docházejí již několik let. Není však problém se k nim přidat. Každá změna obohacuje a vytrhává nás ze stereotypu. A o to v umění jde.",
      },
    ],
    body: kontakty,
  },
  {
    slug: "zpev",
    title: "Zpěv",
    group: "volny-cas",
    groupLabel: "Volnočasové aktivity",
    image: deti5,
    shortText:
      "Individuální hodiny zpěvu a ženský sbor ŠuŠuŽEŠ — pro všechny, kdo chtějí, aby jejich hlas zazněl.",
    intro:
      "Co je to hlas? Je to jen prostředek k vyjádření? Je to jen součást našeho projevu? V jiných kulturách je hlas prostředníkem k naší podstatě. Je to něco, co o nás vypovídá více než to, jak vypadáme. Zdravý hlas značí zdravou sebedůvěru a úctu k tomu, že se můžeme projevit. A tak jako dříve se zpívalo při každé práci či rodinném rituálu, dnes máme strach, že nejsme dostatečně dobří zpěváci na to, abychom vůbec začali.",
    courses: [
      {
        title: "(NA)HLAS — individuální výuka",
        audience: "pro děti i dospělé",
        schedule: "Po jednom či v malých skupinách, den a čas dle domluvy",
        text: "Srdečně vás zvu na roční hlasovou dílnu, ve které se seznámíme se základními technikami práce s hlasem. Budeme zpívat, mluvit, pohybovat se. Vše tak, aby nezůstal jediný sval v těle napjatý. Společnost nás příliš dlouho svazovala, je čas nechat náš hlas znít. Dílna je určená pro všechny bez rozdílu věku a předchozích zkušeností. Všichni jsme zpěváci. Netřeba se omezovat tím, co nám někdo řekl nebo jsme si řekli sami.",
      },
      {
        title: "Ženský sbor ŠuŠuŽEŠ",
        audience: "určeno pro ženy",
        schedule: "Středa 18:00 – 19:00",
        text: "Ženské hlasy měly od pradávna velkou sílu. Léčily, hladily na duši, konejšily neklidnou krajinu, předvídaly, uchovávaly vzpomínky. A když zaznívají společně, o to větší mají moc. Přidej se k nám. Zpívat budeme různý repertoár — lidové písně, gospely, spirituály i populární skladby. To vše pro nás ženy a naše krásné muže. Není nutná předchozí zkušenost ani talent…:)",
      },
    ],
    body: kontakty,
  },
  {
    slug: "prazdninove-akce",
    title: "Prázdninové akce",
    group: "volny-cas",
    groupLabel: "Volnočasové aktivity",
    image: prazdninoveImg,
    shortText:
      "V současné době tábory nepořádáme — zde jen vzpomínka na příběhy, kterými jsme s dětmi prošly.",
    intro:
      "V současné době tábory nepořádáme. Zde naleznete jen malou vzpomínku na všechny ty krásné příběhy, kterými jsme s dětmi prošly.",
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
          "Kdysi dávno, když ještě neexistovalo nic z toho, co máme jako lidé k dispozici, existovala posvátná zvířata. Po pokroku se ze strachu o své kouzelné schopnosti odebrala do ústraní — a po tisíce let o nich nikdo nevěděl. Až nyní. Po letním slunovratu se odvážila znovu prozkoumat tento svět a naplnit jej dávnou indiánskou magií.",
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
  },
  {
    slug: "pro-verejnost",
    title: "Pro veřejnost",
    group: "vzdelavani",
    groupLabel: "Divadelní představení a další akce pro veřejnost",
    image: cloveceNezlobNaNas,
    shortText:
      "Divadelní představení, komponované večery a autorská čtení pro širokou veřejnost.",
    intro:
      "Pro veřejnost připravujeme divadelní představení umělecké platformy Galimatyáš, komponované večery hudby a přednesu i autorská čtení. Aktuální termíny najdete v sekci Aktuálně nebo také v záložce Zpátky ke kořenům či Komorní divadlo.",
    editions: [
      {
        year: "2025",
        title: "Rybářova žena",
        subtitle: "Premiéra · sezóna 2025/2026",
        image: rybarovaPremiera,
        meta: "27. 9. 2025",
        text:
          "Srdečně zveme na premiéru nového divadelního představení na sezónu 2025/2026. Tentokrát s přičichnutím k tomu dospělému světu, na který bychom neměli být pyšní a o kterém psal už pan Werich…",
      },
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
      {
        year: "2025",
        title: "Rybářova žena",
        subtitle: "Repríza",
        image: rybarovaRepriza,
        meta: "22. 11. 2025",
        text:
          "Pro všechny ty, co už o rybářově ženě slyšely, ale chtějí to zažít na vlastní kůži.",
      },
      {
        year: "2025",
        title: "Kam se poděla betlémská hvězda?",
        subtitle: "Vánoční představení o skutečných hodnotách Vánoc",
        image: betlemska,
        meta: "Neděle 14. 12. 2025 v 15:00 · Starobranská 16, Šumperk · vstupné 200 / 150 Kč",
        text:
          "Představení o tom, jak je důležité věřit na kouzla a zaměřovat se na ty správné hodnoty, které nejdou sice vidět, ale cítíme je.",
      },
      {
        year: "2026",
        title: "Domov je tam, kde koště mám",
        subtitle: "Divadelní představení pro děti i dospělé",
        image: domovKoste,
        meta: "Sobota 7. 3. 2026 v 15:00 · Starobranská 16, Šumperk · v rámci festivalu Zpátky ke kořenům",
        text:
          "Představení o jedné malé bláznivé čarodějce, která se bojí udělat krok mezi lidi. Proč? Protože vnitřní boje jsou vždy nejtěžší. Krok, který je velkým nejen pro ni, ale pro celé lidstvo. Hrají: Lucie Kučerová a Tereza Karlíková.",
      },
    ],
    body:
      "Pokud máte zájem o konkrétní program pro vaši obec, knihovnu, školu nebo spolek, ozvěte se nám — připravíme nabídku na míru.",
  },
];

export const offerGroups: { id: OfferGroup; label: string; description: string }[] = [
  {
    id: "volny-cas",
    label: "Volnočasové aktivity",
    description:
      "Divadelní dílny a zpěv pro děti, mládež i dospělé — celoroční program i vzpomínka na tábory.",
  },
  {
    id: "vzdelavani",
    label: "Divadelní představení a další akce pro veřejnost",
    description:
      "Divadelní představení umělecké platformy Galimatyáš, komponované večery hudby a přednesu i autorská čtení.",
  },
];
