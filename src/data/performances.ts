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

export type Performance = {
  slug: string;
  title: string;
  subtitle?: string;
  audience: string;
  duration: string;
  image: string;
  excerpt: string;
  active: boolean;
};

export const performances: Performance[] = [
  {
    slug: "rybarova-zena",
    title: "Rybářova žena",
    subtitle: "Adaptace lidové pohádky O rybáři a jeho ženě",
    audience: "2.–6. třídy ZŠ",
    duration: "60 minut",
    image: rybarovaZena,
    excerpt:
      "Přistěhovat se do hezkého města a začít dělat svět krásnější uměním by mohlo být snadné, kdyby všude nebyla Rybářova žena. Participační představení s divadelní dílnou.",
    active: true,
  },
  {
    slug: "domov-je-tam-kde-koste-mam",
    title: "Domov je tam, kde koště mám",
    subtitle: "O síle snu a touhy po životě na Zemi",
    audience: "1.–5. třídy ZŠ",
    duration: "50 + 50 minut (představení + dílna)",
    image: domovJeTam,
    excerpt:
      "Komediální představení o mladé čarodějnici, která se bojí chodit mezi lidi. Pojednává o překonání strachu s jemným dotykem šumperské čarodějné historie.",
    active: true,
  },
  {
    slug: "kam-se-podela-betlemska-hvezda",
    title: "Kam se poděla Betlémská hvězda?",
    subtitle: "Příběh o hledání skutečné podstaty Vánoc",
    audience: "MŠ a ZŠ, družiny a volnočasové kolektivy",
    duration: "cca 45 minut",
    image: betlemskaHvezda,
    excerpt:
      "Předvánoční svět, ve kterém se všechny symboly Vánoc zbláznily. Ryby, co se nechtějí lovit, ozdoby, co se bojí výšek, a zmizelá Betlémská hvězda. Hrajeme v listopadu a prosinci.",
    active: true,
  },
  {
    slug: "clovece-nezlob-se-na-nas",
    title: "Člověče, nezlob se na nás!",
    subtitle: "Na motivy čtyř pohádek z různých koutů světa",
    audience: "1.–5. třídy ZŠ",
    duration: "60 + 60 minut (představení + dílna)",
    image: cloveceNezlob,
    excerpt:
      "Pohádky propojené interakcí dvou klaunů Žalu a Štěstí, kteří hrají společenskou hru. Život jako předurčená hra, jejíž pravidla můžeme měnit svým rozhodnutím.",
    active: true,
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
  },
  // Archiv
  {
    slug: "na-ostri-nuzek",
    title: "Na ostří nůžek",
    subtitle: "Příběh z krejčovského salónu U stříbrné Luny",
    audience: "ZŠ a dospělí",
    duration: "50 + 50 minut",
    image: naOstriNuzek,
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
    excerpt:
      "Poetický příběh malé Konstantiny, která je od narození nevidomá. Mít hendikep neznamená přestat snít. První inscenace studia (2017–2019), k zhlédnutí online.",
    active: false,
  },
];
