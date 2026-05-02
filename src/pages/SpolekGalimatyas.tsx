import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Card } from "@/components/ui/card";

const SpolekGalimatyas = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <Link
            to="/o-nas"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Zpět na O nás
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">O nás</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-5xl">
            Spolek GALIMATYÁŠ
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl space-y-10">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>
              Jsme seskupení lidí dospělých, kteří se dají zařadit alespoň do jedné z následujících
              kategorií — rodič, učitel, hudebník či divadelník. Hledáme inspiraci hlavně v oblasti
              hudby a divadla ve všech jejich formách a podobách. Cílovou skupinou našich aktivit
              jsou zejména děti či dospělí s duší dítěte. Jsme neziskovou organizací a naše aktivity
              jsou čistě nekomerčního charakteru.
            </p>
            <p>
              Rádi oživujeme dávno zapomenuté věci, vstupujeme do světů knih za doprovodu melodií
              klasických mistrů a věříme, že poezie se může uplatnit i v současném technokratickém
              světě. Naší snahou je dopřát sobě a dětem svět fantazie, kreativity, radosti
              a tradičních hodnot jako přátelství, vzájemný respekt, spolupráce, důvěra.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
              Nabízíme
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-display text-xl text-primary">Divadelní představení a dílny</h3>
                <p className="mt-2 text-muted-foreground">
                  Nabízíme dopolední divadelní představení a dílny pro školní kolektivy MŠ, ZŠ a SŠ.
                  Více informací a aktuální program najdete v záložce{" "}
                  <Link to="/studio-my-dve" className="text-accent hover:underline">
                    Studio „My dvě"
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary">Volnočasové aktivity</h3>
                <p className="mt-2 text-muted-foreground">
                  Nabízíme volnočasová setkávání pro děti, mládež i dospělé. Jejich zaměření vychází
                  z celkové vize centra a zahrnuje ve větší či menší míře aktivity hudební,
                  divadelní, pohybové či výtvarné. Více informací a aktuální rozvrh najdete v záložce{" "}
                  <Link to="/co-nabizime" className="text-accent hover:underline">
                    Co nabízíme
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary">Vzdělávací a kulturní akce</h3>
                <p className="mt-2 text-muted-foreground">
                  Organizujeme vzdělávací semináře pro pedagogické pracovníky se zaměřením na
                  dramatickou a hudební výchovu, rozvoj čtenářské gramotnosti, práci s hlasem,
                  psychologické aspekty vzdělávání. Připravíme kulturní program na míru (vernisáže,
                  výchovné pořady, pouliční produkce, svatební obřady, scénická čtení, …).
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
              Výroční zpráva
            </h2>
            <Card className="mt-6 flex flex-col items-start gap-5 border-border/60 p-6 shadow-card md:flex-row md:items-center md:justify-between md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-primary">
                    Výroční zpráva Galimatyáš 2025
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">PDF dokument ke stažení</p>
                </div>
              </div>
              <a
                href="/dokumenty/vyrocni-zprava-galimatyas-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Stáhnout PDF
              </a>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpolekGalimatyas;
