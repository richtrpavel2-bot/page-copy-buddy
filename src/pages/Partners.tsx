import { publicPartners, corporatePartners } from "@/data/partners";

const Partners = () => {
  return (
    <>
      <section className="bg-hero">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">O spolku</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-primary md:text-6xl">
              Podporují nás
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Děkujeme institucím, městům a partnerům, díky kterým můžeme dlouhodobě tvořit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold text-primary md:text-3xl">
            Veřejná podpora
          </h2>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
            {publicPartners.map((p) => (
              <div
                key={p.name}
                className="flex aspect-[3/2] items-center justify-center rounded-2xl bg-card p-4 shadow-card"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <h2 className="mt-16 font-display text-2xl font-semibold text-primary md:text-3xl">
            Partneři a sponzoři
          </h2>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3">
            {corporatePartners.map((p) => (
              <div
                key={p.name}
                className="flex aspect-[3/2] items-center justify-center rounded-2xl bg-card p-4 shadow-card"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
