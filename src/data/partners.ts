import olomoucky from "@/assets/loga/olomoucky.jpg";
import sumperk from "@/assets/loga/sumperk.jpg";
import ceramtec from "@/assets/loga/ceramtec.png";
import perla from "@/assets/loga/perla.png";
import autoservis from "@/assets/loga/autoservis.jpg";

export interface Partner {
  name: string;
  logo?: string;
}

export const publicPartners: Partner[] = [
  { name: "Olomoucký kraj", logo: olomoucky },
  { name: "Město Šumperk", logo: sumperk },
];

export const corporatePartners: Partner[] = [
  { name: "CeramTec", logo: ceramtec },
  { name: "Perla — Netkaný textil", logo: perla },
  { name: "AutoServis Pas Křivky, Zábřeh na Moravě", logo: autoservis },
  { name: "Hudebniny Nový Malín" },
];
