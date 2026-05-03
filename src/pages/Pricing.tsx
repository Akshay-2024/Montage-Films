import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Check, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import about from "@/assets/about.jpg";

const tiers = [
  {
    name: "Classic",
    tagline: "Intimate gatherings",
    price: "On request",
    features: ["Up to 80 guests", "1-day celebration", "Photography & film", "Floral & décor concept", "Day-of coordination"],
    featured: false,
  },
  {
    name: "Premium",
    tagline: "Signature weddings",
    price: "On request",
    features: ["Up to 250 guests", "2 to 3-day celebration", "Full planning & design", "Cinematic film + photo", "Bespoke décor build", "Guest concierge"],
    featured: true,
  },
  {
    name: "Royal",
    tagline: "Without compromise",
    price: "By invitation",
    features: ["Unlimited guests", "Multi-day & destination", "Full creative direction", "Feature-length film", "Private chef & hospitality", "Dedicated principals"],
    featured: false,
  },
];

const compare = [
  { f: "Dedicated planning director", v: [true, true, true] },
  { f: "Bespoke décor fabrication", v: [false, true, true] },
  { f: "Cinematic feature film", v: [false, true, true] },
  { f: "International logistics", v: [false, true, true] },
  { f: "Private hospitality team", v: [false, false, true] },
  { f: "Founders on-site", v: [false, false, true] },
];

export default function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Investment"
        title={<>Three <em className="text-gold">scales</em>, one standard</>}
        subtitle="Each engagement is bespoke. The tiers below indicate scope, not ceiling."
        image={about}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-luxe">
          <Stagger className="grid gap-8 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <StaggerItem key={t.name}>
                <div
                  className={`group relative h-full p-10 transition-all duration-700 ${
                    t.featured
                      ? "glass-card shadow-elegant lg:-translate-y-4 border-gold/40"
                      : "border border-border bg-background hover:border-gold/40"
                  }`}
                >
                  {t.featured && (
                    <div className="absolute -top-3 left-10 bg-gradient-gold px-4 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-obsidian">
                      Most chosen
                    </div>
                  )}
                  <div className="text-[0.7rem] uppercase tracking-[0.3em] text-gold">{t.tagline}</div>
                  <h3 className="mt-4 font-display text-4xl">{t.name}</h3>
                  <div className="mt-6 gold-divider" />
                  <div className="mt-6 font-display text-2xl text-muted-foreground">{t.price}</div>

                  <ul className="mt-10 space-y-4">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-12 inline-flex w-full items-center justify-center px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 ${
                      t.featured
                        ? "bg-gradient-gold text-obsidian shadow-gold hover:-translate-y-0.5"
                        : "border border-foreground hover:bg-obsidian hover:text-ivory hover:border-obsidian"
                    }`}
                  >
                    Get Custom Quote
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-secondary/40 py-24">
        <div className="container-luxe">
          <Reveal className="text-center">
            <span className="eyebrow justify-center">Comparison</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">What is included</h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-5 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground"></th>
                  {tiers.map((t) => (
                    <th key={t.name} className="py-5 text-center font-display text-xl">{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row.f} className="border-b border-border/60">
                    <td className="py-5 text-sm text-foreground">{row.f}</td>
                    {row.v.map((on, i) => (
                      <td key={i} className="py-5 text-center">
                        {on ? <Check size={18} className="mx-auto text-gold" /> : <Minus size={18} className="mx-auto text-muted-foreground/40" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </>
  );
}
