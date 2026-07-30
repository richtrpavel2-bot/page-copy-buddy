// Program festivalu Zpátky ke kořenům – jednotlivé měsíce

import ledenProgram from "@/assets/festival/leden/program.jpg";
import ledenVernisaz from "@/assets/festival/leden/akce-vernisaz.jpg";
import ledenVylet from "@/assets/festival/leden/akce-vylet.jpg";
import ledenVecer from "@/assets/festival/leden/akce-vecer.jpg";
import ledenFotoVystava from "@/assets/festival/leden/foto-vystava.jpg";
import ledenFotoVylet from "@/assets/festival/leden/foto-vylet.jpg";
import ledenBeseda1 from "@/assets/festival/leden/beseda-1.jpg";
import ledenBeseda2 from "@/assets/festival/leden/beseda-2.jpg";
import ledenBeseda3 from "@/assets/festival/leden/beseda-3.jpg";
import ledenKoncert1 from "@/assets/festival/leden/koncert-1.jpg";
import ledenKoncert2 from "@/assets/festival/leden/koncert-2.jpg";
import ledenKoncert3 from "@/assets/festival/leden/koncert-3.jpg";

import brezenProgram from "@/assets/festival/brezen/program.jpg";
import brezenDomov from "@/assets/festival/brezen/akce-domov.jpg";
import brezenNerusit from "@/assets/festival/brezen/akce-nerusit.jpg";
import brezenRytmus from "@/assets/festival/brezen/akce-rytmus.jpg";
import brezenVystava from "@/assets/festival/brezen/akce-vystava.jpg";
import brezenPredstaveni1 from "@/assets/festival/brezen/predstaveni-1.jpg";
import brezenPredstaveni2 from "@/assets/festival/brezen/predstaveni-2.jpg";
import brezenPredstaveni3 from "@/assets/festival/brezen/predstaveni-3.jpg";
import brezenPredstaveni4 from "@/assets/festival/brezen/predstaveni-4.jpg";
import brezenBeseda1 from "@/assets/festival/brezen/beseda-1.jpg";
import brezenBeseda2 from "@/assets/festival/brezen/beseda-2.jpg";
import brezenBeseda3 from "@/assets/festival/brezen/beseda-3.jpg";
import brezenBeseda4 from "@/assets/festival/brezen/beseda-4.jpg";
import brezenBubnovani1 from "@/assets/festival/brezen/bubnovani-1.jpg";
import brezenBubnovani2 from "@/assets/festival/brezen/bubnovani-2.jpg";
import brezenBubnovani3 from "@/assets/festival/brezen/bubnovani-3.jpg";

import dubenProgram from "@/assets/festival/duben/program.jpg";
import dubenHvezda from "@/assets/festival/duben/akce-hvezda.jpg";
import dubenSoutezPlakat from "@/assets/festival/duben/akce-soutez.jpg";
import dubenSoutez1 from "@/assets/festival/duben/soutez-1.jpg";
import dubenSoutez2 from "@/assets/festival/duben/soutez-2.jpg";
import dubenSoutez3 from "@/assets/festival/duben/soutez-3.jpg";
import dubenSynagoga1 from "@/assets/festival/duben/synagoga-1.jpg";
import dubenSynagoga2 from "@/assets/festival/duben/synagoga-2.jpg";
import dubenSynagoga3 from "@/assets/festival/duben/synagoga-3.jpg";

import kvetenProgram from "@/assets/festival/kveten/program.jpg";
import kvetenMost from "@/assets/festival/kveten/akce-most.jpg";
import kvetenZeny from "@/assets/festival/kveten/akce-zeny.jpg";
import kvetenViden from "@/assets/festival/kveten/akce-viden.jpg";
import kvetenPredstaveni1 from "@/assets/festival/kveten/foto-predstaveni-1.jpg";
import kvetenPredstaveni2 from "@/assets/festival/kveten/foto-predstaveni-2.jpg";
import kvetenPredstaveni3 from "@/assets/festival/kveten/foto-predstaveni-3.jpg";
import kvetenPredstaveni4 from "@/assets/festival/kveten/foto-predstaveni-4.jpg";
import kvetenBeseda1 from "@/assets/festival/kveten/beseda-1.jpg";
import kvetenBeseda2 from "@/assets/festival/kveten/beseda-2.jpg";
import kvetenBeseda3 from "@/assets/festival/kveten/beseda-3.jpg";
import kvetenBeseda4 from "@/assets/festival/kveten/beseda-4.jpg";
import kvetenBeseda5 from "@/assets/festival/kveten/beseda-5.jpg";
import kvetenKoncert1 from "@/assets/festival/kveten/koncert-1.jpg";
import kvetenKoncert2 from "@/assets/festival/kveten/koncert-2.jpg";

import cervenProgram from "@/assets/festival/cerven/program.jpg";
import cervenKopnout from "@/assets/festival/cerven/akce-kopnout.jpg";
import cervenCasobeh from "@/assets/festival/cerven/akce-casobeh.jpg";
import cervenArchivacePlakat from "@/assets/festival/cerven/akce-archivace.jpg";
import cervenArchivace1 from "@/assets/festival/cerven/archivace-1.jpg";
import cervenArchivace2 from "@/assets/festival/cerven/archivace-2.jpg";
import cervenArchivace3 from "@/assets/festival/cerven/archivace-3.jpg";
import cervenArchivace4 from "@/assets/festival/cerven/archivace-4.jpg";
import cervenBeseda1 from "@/assets/festival/cerven/beseda-1.jpg";
import cervenBeseda2 from "@/assets/festival/cerven/beseda-2.jpg";
import cervenBeseda3 from "@/assets/festival/cerven/beseda-3.jpg";
import cervenBeseda4 from "@/assets/festival/cerven/beseda-4.jpg";
import cervenBeseda5 from "@/assets/festival/cerven/beseda-5.jpg";
import cervenBeseda6 from "@/assets/festival/cerven/beseda-6.jpg";

export type FestivalMonth = {
  id: string;
  month: string;
  theme: string;
  annotation: string;
  program: string;
  posters: { src: string; alt: string }[];
  gallery: { src: string; alt: string }[];
};

export const festivalMonths: FestivalMonth[] = [
  {
    id: "leden-2026",
    month: "Leden 2026",
    theme: "Jeseníky – ráj na zemi",
    annotation:
      "Zavři oči a rozhlédni se. Svým vnitřním zrakem je uvidíš. Hory, které jsou naším domovem. Vydej se s námi po stopách přírodních krás a načerpej klid do své mysli. Je zima a všechno spí, aby se na jaře probudilo a započalo nový cyklus života. Přiviň do své náruče jedinečnost přírodní krásy tohoto místa. Ani nevíš, kolik vzácných druhů rostlin a živočichů, mnohdy endemických nebo chráněných, máš možnost pohladit. Jsi v ráji, a tak se projdi lesními porosty a horskými loukami. Odpočiň si a objev neobjevené. Tak a teď zase otevři oči. Nemusíš se stydět, že jsi zapomněl. Krásu je někdy třeba připomenout, aby nám nezapadla do shonu všedních dní.",
    program: ledenProgram,
    posters: [
      { src: ledenVernisaz, alt: "Vernisáž 10. 1. 2026" },
      { src: ledenVylet, alt: "Výlet na Sedlo 17. 1. 2026" },
      { src: ledenVecer, alt: "Komponovaný večer 30. 1. 2026" },
    ],
    gallery: [
      { src: ledenFotoVystava, alt: "Výstava – leden 2026" },
      { src: ledenFotoVylet, alt: "Výlet na Sedlo – leden 2026" },
      { src: ledenBeseda1, alt: "Beseda – leden 2026" },
      { src: ledenBeseda2, alt: "Beseda – leden 2026" },
      { src: ledenBeseda3, alt: "Beseda – leden 2026" },
      { src: ledenKoncert1, alt: "Koncert – leden 2026" },
      { src: ledenKoncert2, alt: "Koncert – leden 2026" },
      { src: ledenKoncert3, alt: "Koncert – leden 2026" },
    ],
  },
  {
    id: "brezen-2026",
    month: "Březen 2026",
    theme: "Abrakadabraka už není v módě",
    annotation:
      "„Jsem čarodějka!“ Věta, co od opravdových čarodějů nahlas nikdy neuslyšíš. Protože tenkrát vzniklo mnoho křivd, které se nad Šumperkem vznáší jako opar ranní mlhy. Cítíš ten vzácný genius loci opředený tajemstvím a smutkem? Až navrátíme tyto kořeny do mystické půdy země bez studu a strachu, pak teprve můžeme oslavovat tento kraj a čerpat moudrost našich předků bez pocitů viny. Uctíme tak jednotu ženského principu tvořivosti naší planety a osvíceného mužského principu duchovního světa a našeho racia. Jedno bez druhého není.",
    program: brezenProgram,
    posters: [
      { src: brezenVystava, alt: "Výstava – březen 2026" },
      { src: brezenDomov, alt: "Domov je tam, kde koště mám – 7. 3. 2026" },
      { src: brezenNerusit, alt: "Nerušit tvořím – 14. 3. 2026" },
      { src: brezenRytmus, alt: "V rytmu rytmu – 28. 3. 2026" },
    ],
    gallery: [
      { src: brezenPredstaveni1, alt: "Představení – březen 2026" },
      { src: brezenPredstaveni2, alt: "Představení – březen 2026" },
      { src: brezenPredstaveni3, alt: "Představení – březen 2026" },
      { src: brezenPredstaveni4, alt: "Představení – březen 2026" },
      { src: brezenBeseda1, alt: "Beseda – březen 2026" },
      { src: brezenBeseda2, alt: "Beseda – březen 2026" },
      { src: brezenBeseda3, alt: "Beseda – březen 2026" },
      { src: brezenBeseda4, alt: "Beseda – březen 2026" },
      { src: brezenBubnovani1, alt: "Bubnování – březen 2026" },
      { src: brezenBubnovani2, alt: "Bubnování – březen 2026" },
      { src: brezenBubnovani3, alt: "Bubnování – březen 2026" },
    ],
  },
  {
    id: "duben-2026",
    month: "Duben 2026",
    theme: "Dávno nebo včera?",
    annotation:
      "Našlapuj lehce. Díváš se do nebe. Kam odletěli ptáci snít? Je to tak dávno a přeci jako by to bylo včera. Ta cesta vydlážděná kameny zmizelých vede tě do vzpomínek, na které rádo se zapomíná. Jejich stíny však v pološeru ulic tetelí se. Je to tak dávno, nebo to bylo včera?",
    program: dubenProgram,
    posters: [
      { src: dubenHvezda, alt: "Tam, kde září hvězda – 26. 4. 2026" },
      { src: dubenSoutezPlakat, alt: "Literární soutěž – duben 2026" },
    ],
    gallery: [
      { src: dubenSynagoga1, alt: "Synagoga – duben 2026" },
      { src: dubenSynagoga2, alt: "Synagoga – duben 2026" },
      { src: dubenSynagoga3, alt: "Synagoga – duben 2026" },
      { src: dubenSoutez1, alt: "Literární soutěž – duben 2026" },
      { src: dubenSoutez2, alt: "Literární soutěž – duben 2026" },
      { src: dubenSoutez3, alt: "Literární soutěž – duben 2026" },
    ],
  },
  {
    id: "kveten-2026",
    month: "Květen 2026",
    theme: "Šumperk – malá Vídeň",
    annotation:
      "Schönberg. Mamá, necháme si zde postavit domeček? Ale jistě! Papá již na tom pracuje. To by bylo, aby rodina textilního průmyslníka neměla dostatečně reprezentativní bydlení. Noblesa, dcero, noblesa, to si pamatuj, není jen otázkou životního stylu, ale projevem velkoleposti celého ducha. A samozřejmě Vídeň je v tomto ohledu tím nejzářnějším příkladem.",
    program: kvetenProgram,
    posters: [
      { src: kvetenMost, alt: "Most přes minulost – 13. 5. 2026" },
      { src: kvetenZeny, alt: "Malé podoby velkých žen – 18. 5. 2026" },
      { src: kvetenViden, alt: "O malé Vídni u velkého piva – 23. 5. 2026" },
    ],
    gallery: [
      { src: kvetenPredstaveni1, alt: "Představení – květen 2026" },
      { src: kvetenPredstaveni2, alt: "Představení – květen 2026" },
      { src: kvetenPredstaveni3, alt: "Představení – květen 2026" },
      { src: kvetenPredstaveni4, alt: "Představení – květen 2026" },
      { src: kvetenBeseda1, alt: "Beseda – květen 2026" },
      { src: kvetenBeseda2, alt: "Beseda – květen 2026" },
      { src: kvetenBeseda3, alt: "Beseda – květen 2026" },
      { src: kvetenBeseda4, alt: "Beseda – květen 2026" },
      { src: kvetenBeseda5, alt: "Beseda – květen 2026" },
      { src: kvetenKoncert1, alt: "Koncert – květen 2026" },
      { src: kvetenKoncert2, alt: "Koncert – květen 2026" },
    ],
  },
  {
    id: "cerven-2026",
    month: "Červen 2026",
    theme: "Lovci pokladů",
    annotation:
      "Tak tady kopneme. Podle mých historicko-geografických propočtů by to naleziště mělo být právě tady. Můžeš mi říct, proč by se Keltové usazovali zrovna tady? No, protože minule jsme tady našli pazourek a to něco znamená. Ne ne ne. Co ta mince? Podle mě tady vedla jenom obchodní cesta. Víš co, já se s tebou nebudu dohadovat. Tady kopneme a uvidíme.",
    program: cervenProgram,
    posters: [
      { src: cervenKopnout, alt: "Kopnout či nekopnout, to je oč tu běží – 7. 6. 2026" },
      { src: cervenCasobeh, alt: "Časoběh – 13. 6. 2026" },
      { src: cervenArchivacePlakat, alt: "Archivace vykopávek – 19. 6. 2026" },
    ],
    gallery: [
      { src: cervenArchivace1, alt: "Archivace vykopávek – červen 2026" },
      { src: cervenArchivace2, alt: "Archivace vykopávek – červen 2026" },
      { src: cervenArchivace3, alt: "Archivace vykopávek – červen 2026" },
      { src: cervenArchivace4, alt: "Archivace vykopávek – červen 2026" },
      { src: cervenBeseda1, alt: "Beseda – červen 2026" },
      { src: cervenBeseda2, alt: "Beseda – červen 2026" },
      { src: cervenBeseda3, alt: "Beseda – červen 2026" },
      { src: cervenBeseda4, alt: "Beseda – červen 2026" },
      { src: cervenBeseda5, alt: "Beseda – červen 2026" },
      { src: cervenBeseda6, alt: "Beseda – červen 2026" },
    ],
  },
];
