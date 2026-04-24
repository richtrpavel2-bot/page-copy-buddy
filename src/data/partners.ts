import eu from "@/assets/loga/eu.jpg";
import mk from "@/assets/loga/mk.jpg";
import obnova from "@/assets/loga/obnova.png";
import olomoucky from "@/assets/loga/olomoucky.jpg";
import sumperk from "@/assets/loga/sumperk.jpg";
import ceramtec from "@/assets/loga/ceramtec.png";
import perla from "@/assets/loga/perla.png";
import autoservis from "@/assets/loga/autoservis.jpg";

export interface Partner {
  name: string;
  logo: string;
}

export const publicPartners: Partner[] = [
  { name: "Ministerstvo kultury ČR", logo: mk },
  { name: "Národní plán obnovy", logo: obnova },
  { name: "Financováno Evropskou unií — NextGenerationEU", logo: eu },
  { name: "Olomoucký kraj", logo: olomoucky },
  { name: "Město Šumperk", logo: sumperk },
];

export const corporatePartners: Partner[] = [
  { name: "CeramTec", logo: ceramtec },
  { name: "Perla — Netkaný textil", logo: perla },
  { name: "AutoServis Pas Křivky, Zábřeh na Moravě", logo: autoservis },
];
