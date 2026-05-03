import PageHero from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import about from "@/assets/about.jpg";
import g3 from "@/assets/g3.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const team = [
  { name: "Aarav Mehta", role: "Founder · Director", img: g3 },
  { name: "Isabella Rossi", role: "Creative Producer", img: g5 },
  { name: "Kabir Shah", role: "Head of Cinematography", img: g6 },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="The Atelier"
        title={<>A house built on <em className="text-gold">restraint</em></>}
        subtitle="Twelve years. Two principals. A small, devoted craft team."
        image={about}
      />

      <section className="bg-background py-28 md:py-40">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight">Born from a love of cinema.</h2>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Montage Films began in a small editing suite in Mumbai in 2014, when a film director and a
              creative producer agreed on one principle: a wedding deserves the same reverence as a feature.
            </p>
            <p>
              Twelve years later, that principle has not changed. We accept a limited number of weddings each
              year — somewhere between fifteen and twenty — so we may give each of them our entire imagination.
              Our work has carried us from Lake Como to Udaipur, from Marrakech to Kyoto.
            </p>
            <p>
              Restraint, in our hands, is the highest form of luxury.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-28 md:py-40">
        <div className="container-luxe">
          <Reveal className="text-center">
            <span className="eyebrow justify-center">Principals</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">The hands behind every frame</h2>
          </Reveal>

          <Stagger className="mt-20 grid gap-10 md:grid-cols-3">
            {team.map((p) => (
              <StaggerItem key={p.name} className="group text-center">
                <div className="image-zoom relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-sm">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-obsidian/0 transition-colors duration-700 group-hover:bg-obsidian/30" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{p.name}</h3>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.3em] text-gold">{p.role}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-obsidian py-24 text-ivory">
        <div className="container-luxe grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {[
            { n: "3+", l: "Years" },
            { n: "100", l: "Weddings" },
            { n: "2", l: "States" },
            { n: "30+", l: "Events" },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="font-display text-5xl text-gold md:text-6xl">{s.n}</div>
              <div className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-ivory/60">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
