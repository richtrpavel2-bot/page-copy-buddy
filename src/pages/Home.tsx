import { Link } from "react-router-dom";
import Hero from "@/components/home/Hero";
import PillarsSection from "@/components/home/PillarsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <Hero />
      <PillarsSection />

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 rounded-3xl bg-primary p-10 text-primary-foreground md:grid-cols-2 md:p-16 shadow-soft">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Pozvánka
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">
                Pojďte si s námi hrát.
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/80">
                Hledáme nadšence — hereckou pomoc, dobrovolníky i partnery. Ozvěte se,
                rádi vás přivítáme v Galimatyáši.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button asChild size="lg" variant="secondary" className="rounded-full px-7">
                <Link to="/kontakt">
                  Napište nám <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/studio-my-dve">Studio My Dvě</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
