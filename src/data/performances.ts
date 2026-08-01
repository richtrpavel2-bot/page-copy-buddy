import rybarovaZena from "@/assets/studio/rybarova-zena.jpg";
import domovJeTam from "@/assets/studio/domov-je-tam.jpg";
import betlemskaHvezda from "@/assets/studio/betlemska-hvezda.jpg";
import cloveceNezlob from "@/assets/studio/clovece-nezlob.jpg";
import ctyriNohy from "@/assets/studio/ctyri-nohy.jpg";
import naOstriNuzek from "@/assets/studio/na-ostri-nuzek.jpg";
import doSmrti from "@/assets/studio/do-smrti.jpg";
import nils from "@/assets/studio/nils.jpg";
import slecnaBarevna from "@/assets/studio/slecna-barevna.jpg";
import skritekJirin from "@/assets/studio/skritek-jirin.jpg";
import podMorem from "@/assets/studio/pod-morem.jpg";
import zalAStesti from "@/assets/studio/zal-a-stesti.jpg";
import okolo from "@/assets/studio/okolo.jpg";

const galleryDomov = Object.values(
  import.meta.glob("@/assets/studio/galerie/domov-je-tam/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryNuzky = Object.values(
  import.meta.glob("@/assets/studio/galerie/na-ostri-nuzek/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryOkolo = Object.values(
  import.meta.glob("@/assets/studio/galerie/okolo/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryRybarova = Object.values(
  import.meta.glob("@/assets/studio/galerie/rybarova-zena/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryClovece = Object.values(
  import.meta.glob("@/assets/studio/galerie/clovece-nezlob/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryDoSmrti = Object.values(
  import.meta.glob("@/assets/studio/galerie/do-smrti/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryBetlem = Object.values(
  import.meta.glob("@/assets/studio/galerie/betlemska-hvezda/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryPodMorem = Object.values(
  import.meta.glob("@/assets/studio/galerie/pod-morem/*.jpg", { eager: true, import: "default" })
) as string[];
const galleryNils = Object.values(
  import.meta.glob("@/assets/studio/galerie/nils/*.jpg", { eager: true, import: "default" })
) as string[];

export type Performance = {
  slug: string;
  title: string;
  subtitle?: string;
  audience: string;
  duration: string;
  image: string;
  excerpt: string;
  active: boolean;
  /** Tailwind object-position class pro ořez náhledu */
  focus?: string;
  /** Fotogalerie z představení */
  gallery?: string[];
  /** Podrobný popis – zobrazí se na detailu představení */
  detail?: {
    quote?: string;
    paragraphs: string[];
    cast?: string;
    place?: string;
    price?: string;
    note?: string;
    youtube?: string;
  };
};

export const performances: Performance[] = [
  {
    slug: "rybarova-zena",
    title: "Rybářova žena",
    subtitle: "Adaptace lidové pohádky O rybáři a jeho ženě",
    audience: "2.–6. třídy ZŠ",
    duration: "60 minut",
    image: rybarovaZena,
    gallery: galleryRybarova,
    excerpt:
      "Přistěhovat se do hezkého města a začít dělat svět krásnější uměním by mohlo být snadné, kdyby všude nebyla Rybářova žena. Participační představení s divadelní dílnou.",
    active: true,
    detail: {
      quote:
        "„Zlatá rybo, slyš má slova, vylez z vody, zjev se znova. Mám ženu zlou jako šídlo.“ „A co chceš? Pálí ji dobré bydlo?“",
      paragraphs: [
        "Přistěhovat se do hezkého města a začít dělat svět krásnější uměním by mohlo být snadné, kdyby všude nebyla Rybářova žena. Ale kdo to je? Jak to, že ji nikdo nezná? A jak je možné, že je úplně všude? A kde vlastně končí její moc?",
        "Adaptace lidové pohádky známé především v podání Jana Wericha O rybáři a jeho ženě, doplněná autobiografickými prvky obou představitelek. Pojďte s námi vyřešit detektivní případ a zjistit, kdo v našem světě vlastně tahá za pomyslné nitky.",
        "Představení pojednává o hledání a nacházení, ztrátách a vítězstvích, ale především o spravedlnosti. Protože Boží mlýny melou, někdy pomalu, ale vždy jistě…",
        "Divadelní představení je participační. Jeho přímou součástí je tedy i divadelní dílna, protože děti do něj budou aktivně zapojeny. Jedná se o novou formu, kterou jste s námi ještě nezažili, ale věříme, že si ji všichni užijeme.",
      ],
      cast: "Tereza Karlíková a Lucie Kučerová",
      place: "Galimatyáš Šumperk, Starobranská 16, Šumperk 787 01 (bývalá Květinka)",
      price: "100 Kč / dítě",
      note: "Hrajeme vždy ve středu ve dvou časech (8:30 a 10:30). Termíny a rezervace na 605 173 410 (Tereza Karlíková) nebo spolek.galimatyas@seznam.cz.",
      youtube: "https://www.youtube.com/watch?v=ENuKXc4gnjA&t=12s",
    },
  },

  {
    slug: "domov-je-tam-kde-koste-mam",
    title: "Domov je tam, kde koště mám",
    subtitle: "O síle snu a touhy po životě na Zemi",
    audience: "1.–5. třídy ZŠ",
    duration: "50 minut (jen představení, bez dílny)",
    image: domovJeTam,
    gallery: galleryDomov,
    excerpt:
      "Komediální představení o mladé čarodějnici, která se bojí chodit mezi lidi. Pojednává o překonání strachu s jemným dotykem šumperské čarodějné historie.",
    active: true,
    detail: {
      quote:
        "„Půjdu tam na jaře. Ne, na jaře ne. To je úplně nejhorší čas. Půjdu v létě. Ne, v létě ne… Nechám to na jaro…“",
      paragraphs: [
        "Co se stane mladé čarodějnici, která se bojí chodit mezi lidi, když jí přijde dopis? Pomůže jí zjištění, že její hlas je na světě důležitý, v tom, aby překonala svůj strach a překročila hranice, které kolem ní vytvořila sama historie. A jak to bude vypadat, když se do toho všeho vloží Duch místa, který už opravdu cítí, že je čas udělat KROK?",
        "Komediální divadelní představení Domov je tam, kde koště mám pojednává o síle snu a touhy po životě na Zemi s ohledem a jemným dotykem šumperské čarodějné historie.",
      ],
      cast: "Tereza Karlíková a Lucie Kučerová (Spolek Galimatyáš)",
      place:
        "Hudebně-dramatické centrum Galimatyáš, Starobranská 16, Šumperk 787 01",
      price: "100 Kč / dítě",
      note: "V případě preference jiného termínu volejte nebo pište: 605 173 410 (Tereza Karlíková), spolek.galimatyas@seznam.cz. Inscenace vznikla za podpory města Šumperk.",
      youtube: "https://www.youtube.com/watch?v=Sxjx-LohFzg",
    },
  },
  {
    slug: "kam-se-podela-betlemska-hvezda",
    title: "Kam se poděla Betlémská hvězda?",
    subtitle: "Příběh o hledání skutečné podstaty Vánoc",
    audience: "MŠ a ZŠ, družiny a volnočasové kolektivy",
    duration: "cca 45 minut",
    image: betlemskaHvezda,
    gallery: galleryBetlem,
    focus: "object-center",
    excerpt:
      "Předvánoční svět, ve kterém se všechny symboly Vánoc zbláznily. Ryby, co se nechtějí lovit, ozdoby, co se bojí výšek, a zmizelá Betlémská hvězda. Hrajeme v listopadu a prosinci.",
    active: true,
    detail: {
      quote:
        "Ryby, co se nechtějí lovit, ozdoby, co se bojí výšek, dárky, co se nechtějí darovat – a k tomu všemu zmizela Betlémská hvězda a zavládla Tma.",
      paragraphs: [
        "Představte si předvánoční svět, ve kterém se všechny symboly Vánoc zbláznily a odmítají plnit svou funkci tak, jak jsme na to zvyklí. Naštěstí na tuto záchranu nejkrásnějších dnů v roce nebudeme sami. Ale o tom až se uvidíme a užijeme si tento příběh společně.",
        "Vánočně laděný příběh pro rodiče i děti, kteří se chtějí pořádně navnadit na kouzelný vánoční čas. Protože kdy jindy věřit na kouzla než teď. A kdy jindy je začít žít než s námi.",
      ],
      cast: "Hrají a celé vytvořily Tereza Karlíková a Lucie Kučerová",
      place:
        "Starobranská 16, Šumperk 787 01 (1. patro) nebo vaše instituce",
      price: "100 Kč / dítě pro školní kolektivy či dohodou",
      note: "Kontakt: 605 173 410 (Tereza Karlíková), spolek.galimatyas@seznam.cz. Inscenace vznikla za podpory Olomouckého kraje a města Šumperk.",
    },
  },
  {
    slug: "clovece-nezlob-se-na-nas",
    title: "Člověče, nezlob se na nás!",
    subtitle: "Na motivy čtyř pohádek z různých koutů světa",
    audience: "1.–5. třídy ZŠ",
    duration: "50 minut (jen představení, bez dílny)",
    image: cloveceNezlob,
    gallery: galleryClovece,
    excerpt:
      "Pohádky propojené interakcí dvou klaunů Žalu a Štěstí, kteří hrají společenskou hru. Život jako předurčená hra, jejíž pravidla můžeme měnit svým rozhodnutím.",
    active: true,
    detail: {
      paragraphs: [
        "Na motivy čtyř pohádek – O Slunci a Měsíci (indiánská), Okřídlená žena (australská), Kráska s půlměsícem (africká) a Hadač osudu (arabská).",
        "Pohádky jsou propojeny interakcí dvou klaunů Žalu a Štěstí, kteří spolu hrají společenskou hru. Úmyslem autorek je prezentovat život jako předurčenou hru mezi štěstím a žalem, kterou si nevybereme, ale jejíž pravidla můžeme měnit svým rozhodnutím.",
      ],
      cast: "Tereza Karlíková a Lucie Kučerová",
      place: "HuDra centrum Galimatyáš, Starobranská 16, Šumperk",
      price: "100 Kč / dítě",
      note: "Představení je určeno pro jeden třídní kolektiv, je tedy nutná rezervace termínu: 605 173 410 (Tereza Karlíková), spolek.galimatyas@seznam.cz. Inscenace vznikla za finanční podpory Olomouckého kraje a města Šumperk.",
    },
  },
  {
    slug: "ctyri-nohy-dobre-dve-nohy-spatne",
    title: "Čtyři nohy dobré, dvě nohy špatné!",
    subtitle: "Volně na motivy Farmy zvířat a českých dějin 20. století",
    audience: "2. stupeň ZŠ a střední školy",
    duration: "60 minut",
    image: ctyriNohy,
    excerpt:
      "Inscenace o tématu strachu ve společnosti založené na frázích, síle slova a nedostatku pravdivých informací. Ideální jako doplnění hodiny českého jazyka či dějepisu.",
    active: true,
    detail: {
      quote:
        "Dne 11. 3. Čtyři nohy dobré, dvě nohy špatné! Dne 25. 5. Všechny nohy dobré! Dne 10. 9. Dvě nohy dobré, čtyři nohy špatné! A zítra?",
      paragraphs: [
        "Volně na motivy knihy George Orwella Farma zvířat a volně na motivy českých dějin 20. století.",
        "Setrvalý, vyšší, horší, rizikový, povinný, omezený, nedobrý, nejzasaženější, rekordní, avizovaný STRACH…",
        "Divadelní inscenace zpracovává téma strachu ve společnosti založené na zavedených frázích, síle slova a nedostatku pravdivých informací. Na základě komediálního žánru grotesky nahlédneme do hloubky naší lidské existence na pozadí charakterů zvířat a klíčových okamžiků českých dějin 20. století.",
      ],
      cast: "Tereza Karlíková a Lucie Kučerová",
      place:
        "Hudebně-dramatické centrum Galimatyáš, Starobranská 16, Šumperk, nebo vaše instituce",
      price: "100 Kč / dítě (pedagogický doprovod zdarma)",
      note: "Hrajeme středa, čtvrtek, pátek, čas dle dohody. Vždy hrajeme jen pro jeden třídní kolektiv. Kontakt: spolek.galimatyas@seznam.cz, 605 173 410.",
    },
  },

  // Archiv
  {
    slug: "na-ostri-nuzek",
    title: "Na ostří nůžek",
    subtitle: "Příběh z krejčovského salónu U stříbrné Luny",
    audience: "ZŠ a dospělí",
    duration: "50 + 50 minut",
    image: naOstriNuzek,
    gallery: galleryNuzky,
    excerpt:
      "Na motivy pohádky Císařovy nové šaty H. Ch. Andersena. O rozpoznávání skutečného bohatství a hodnot, které se nedají koupit. Derniéra únor 2023.",
    active: false,
  },
  {
    slug: "do-smrti-smrtouci",
    title: "Do smrti smrťoucí a dál…",
    subtitle: "Volně na motivy knihy Ivy Procházkové Myši patří do nebe",
    audience: "MŠ, 1. stupeň ZŠ a další dětské skupiny",
    duration: "60 minut",
    image: doSmrti,
    gallery: galleryDoSmrti,
    excerpt:
      "Myšák Šupito a Liška Bílá tlapka poznávají smrt z jiných úhlů. Téma smrti zpracované s lehkostí a nadhledem. Derniéra srpen 2023.",
    active: false,
  },
  {
    slug: "nils",
    title: "„Nils?“ aneb cesta k vlastní velikosti",
    subtitle: "Premiéra 5. 9. 2020",
    audience: "1.–5. třída ZŠ",
    duration: "60 + 60 minut",
    image: nils,
    gallery: galleryNils,
    excerpt:
      "Příběh chlapečka Nilse, který ze dne na den opustí svůj domov, aby se do něj vrátil o trošičku větší. O překonání strachu, trpělivosti a hranicích. Derniéra únor 2022.",
    active: false,
  },
  {
    slug: "slecna-barevna",
    title: "Slečna Barevná",
    subtitle: "A její narozeninová přání všech vůní a barev",
    audience: "1.–2. třídy ZŠ a děti MŠ",
    duration: "5× 90 minut",
    image: slecnaBarevna,
    excerpt:
      "Cyklus pěti setkání inspirovaných barvami a jejich skrytými významy. Děti se zapojují skrze základní principy dramatické výchovy. Již nehrajeme.",
    active: false,
  },
  {
    slug: "skritek-jirin",
    title: "Skřítek Jiřin",
    subtitle: "Cesty křížem krážem do světa knih a zase ven",
    audience: "MŠ, 1.–2. třídy ZŠ, ŠD",
    duration: "8× 90 minut",
    image: skritekJirin,
    excerpt:
      "Cyklus hudebně-divadelních setkání pro rodiče s dětmi inspirovaný současnou dětskou literaturou. Každé setkání představí jeden příběh. Již nehrajeme.",
    active: false,
  },
  {
    slug: "jak-to-jde-pod-morem",
    title: "Jak to jde pod mořem",
    subtitle: "Na motivy pohádky Malá mořská víla H. Ch. Andersena",
    audience: "Třídní kolektivy",
    duration: "60 + 60 minut",
    image: podMorem,
    gallery: galleryPodMorem,
    excerpt:
      "Co se stane, když se s princem potopí loď? O dávných křivdách a lásce bez hranic. Derniéra únor 2020 — k zhlédnutí online na YouTube.",
    active: false,
  },
  {
    slug: "zal-a-stesti-v-jednom-kufru",
    title: "Žal a Štěstí v jednom kufru",
    subtitle: "Na motivy arabské pohádky Hadač osudu",
    audience: "MŠ a 1. třídy ZŠ",
    duration: "35 + 30 minut",
    image: zalAStesti,
    excerpt:
      "Dva klauni Žal a Štěstí cestují po světě jako nerozluční kamarádi. Co se stane, když se jeden z nich rozhodne vzít osudy lidí jen do vlastních rukou?",
    active: false,
  },
  {
    slug: "okolo",
    title: "Okolo",
    subtitle: "Na motivy knihy „Jak voní týden“ Olgy Masiukové",
    audience: "1.–5. třídy ZŠ",
    duration: "40 + 60 minut",
    image: okolo,
    gallery: galleryOkolo,
    excerpt:
      "Poetický příběh malé Konstantiny, která je od narození nevidomá. Mít hendikep neznamená přestat snít. První inscenace studia (2017–2019), k zhlédnutí online.",
    active: false,
  },
];
