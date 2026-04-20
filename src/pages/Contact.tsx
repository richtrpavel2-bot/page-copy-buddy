import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Facebook, Mail, MapPin, Phone, Building2, CreditCard } from "lucide-react";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Vzkaz z webu od ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:info@spolekgalimatyas.cz?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="bg-hero">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Kontakt</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Pojďme si napsat
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Máte dotaz, chcete objednat představení nebo se k nám přidat? Najdete nás na všech
              běžných kanálech — vyberte si, který vám sedí.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Card className="border-border/60 p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Sídlo</p>
                  <p className="mt-1 font-medium">Spolek Galimatyáš, z. s.</p>
                  <p className="text-muted-foreground">Šumperk</p>
                </div>
              </div>
            </Card>

            <Card className="border-border/60 p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Telefon</p>
                  <a href="tel:+420000000000" className="mt-1 block font-medium hover:text-primary">
                    +420 000 000 000
                  </a>
                </div>
              </div>
            </Card>

            <Card className="border-border/60 p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">E-mail</p>
                  <a href="mailto:info@spolekgalimatyas.cz" className="mt-1 block font-medium hover:text-primary">
                    info@spolekgalimatyas.cz
                  </a>
                </div>
              </div>
            </Card>

            <Card className="border-border/60 p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Číslo účtu</p>
                  <p className="mt-1 font-medium">000000000/0000</p>
                  <p className="text-xs text-muted-foreground">Doplň skutečné č. účtu</p>
                </div>
              </div>
            </Card>

            <Card className="border-border/60 p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Fakturační údaje</p>
                  <p className="mt-1 text-sm text-muted-foreground">IČO, DIČ — doplň</p>
                </div>
              </div>
            </Card>

            <a
              href="https://www.facebook.com/spolekgalimatyas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Facebook className="h-4 w-4" />
              Sledujte nás na Facebooku
            </a>
          </div>

          <Card className="border-border/60 p-8 shadow-soft md:p-10">
            <h2 className="font-display text-2xl text-primary md:text-3xl">Napište nám</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Formulář odešle vzkaz přes vašeho e-mailového klienta.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Jméno</Label>
                <Input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Vaše jméno"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vy@example.cz"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Vzkaz</Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Co máte na srdci?"
                />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-full">
                Odeslat vzkaz
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-border/60 shadow-card">
            <iframe
              title="Mapa — Šumperk"
              src="https://www.openstreetmap.org/export/embed.html?bbox=16.95%2C49.95%2C17.05%2C50.00&layer=mapnik&marker=49.9779%2C16.9709"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
