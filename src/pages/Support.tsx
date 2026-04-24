import { Heart, Share2, ShoppingBag, FileSignature, Calendar, ExternalLink } from "lucide-react";

const ways = [
  { icon: Calendar, title: "Navštěvujte naše akce", text: "Každý divák je pro nás povzbuzením pokračovat." },
  { icon: Heart, title: "Hezky o nás mluvte", text: "Doporučení od přátel je ta nejlepší reklama." },
  { icon: Share2, title: "Sdílejte nás", text: "Najdete nás i na Facebooku — sdílejte naše akce se svými přáteli." },
  { icon: ShoppingBag, title: "Nakupujte v obchůdku „Splněná přání“", text: "Každý nákup nás podpoří." },
  { icon: FileSignature, title: "Finanční dar", text: "Chcete-li nás podpořit finančně, sepíšeme s vámi darovací smlouvu." },
];

const Support = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
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
