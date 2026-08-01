import { Heart, Share2, ShoppingBag, FileSignature, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import qrPodpora from "@/assets/qr-podpora.jpg";

const ways = [
  { icon: Calendar, title: "Navštěvujte naše akce", text: "Každý divák je pro nás povzbuzením pokračovat." },
  { icon: Heart, title: "Hezky o nás mluvte", text: "Doporučení od přátel je ta nejlepší reklama." },
  { icon: Share2, title: "Sdílejte nás", text: "Najdete nás i na Facebooku — sdílejte naše akce se svými přáteli." },
  { icon: ShoppingBag, title: "Nakupujte v obchůdku DRZÁ OPIČKA", text: "Každý nákup nás podpoří." },
  { icon: FileSignature, title: "Finanční dar", text: "Podpořit nás můžete QR platbou, převodem na účet, nebo přes portál Darujme.cz. U větších darů rádi sepíšeme darovací smlouvu." },
];


const Support = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/o-nas"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Zpět na O spolku
            </Link>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">O spolku</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Jak nás můžete podpořit
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Podporovat nás můžete všemožnými způsoby — vyberte si, co je vám blízké.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ways.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-border/60 bg-card p-6 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg text-primary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-card md:p-10">
              <h2 className="font-display text-2xl">Podpořte nás QR platbou</h2>
              <p className="mt-3 text-primary-foreground/80">
                Líbí se vám naše práce a chtěli byste nás podpořit? Můžete jednoduše prostřednictvím QR kódu.
              </p>
              <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <img
                  width={800}
                  height={800}
                  decoding="async"
                  src={qrPodpora}
                  alt="QR kód pro platbu 200 Kč pro Spolek GALIMATYÁŠ"
                  className="w-64 rounded-2xl bg-white p-3 sm:w-72"
                  loading="lazy"
                />

                <div className="text-sm">
                  <p className="text-primary-foreground/70">Doporučená částka</p>
                  <p className="font-display text-2xl">200 Kč</p>
                  <p className="mt-3 text-primary-foreground/70">Číslo účtu</p>
                  <p className="font-mono text-base">107-1746420217/0100</p>
                  <p className="mt-3 text-primary-foreground/70">Spolek GALIMATYÁŠ</p>
                </div>
              </div>
            </div>

            {/* Darujme.cz — časově omezené do listopadu 2026 */}
            <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Aktuální sbírka
              </p>
              <h2 className="mt-2 font-display text-2xl text-primary">Darujme.cz</h2>
              <p className="mt-3 text-muted-foreground">
                Zuzka pro nás založila projekt na portálu Darujme.cz. Přispět můžete jednorázově i pravidelně, s možností daňového potvrzení. Sbírka běží do listopadu 2026.
              </p>
              <a
                href="https://www.darujme.cz/projekt/1212855"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Přispět přes Darujme.cz
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-secondary/60 p-8 md:p-10">

            <h2 className="font-display text-2xl text-primary">Nakupujte přes GIVT</h2>
            <p className="mt-3 text-muted-foreground">
              Při nákupu v zapojených e-shopech jde část z vaší útraty na naši činnost — vás to nestojí nic navíc.
            </p>
            <a
              href="https://givt.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Přejít na givt.cz
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
