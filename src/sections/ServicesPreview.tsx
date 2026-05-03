import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Link } from "react-router-dom";

const services = [
  { num: "01", title: "Wedding Planning", desc: "End-to-end orchestration with a single dedicated director and a discreet team behind every detail." },
  { num: "02", title: "Décor & Design", desc: "Editorial set design — florals, lighting, fabrics — tailored to a singular narrative." },
  { num: "03", title: "Cinematography", desc: "Documentary-led films and editorial photography that hold their own a generation later." },
  { num: "04", title: "Destination", desc: "From Lake Como to Udaipur — full logistical concierge for celebrations abroad." },
];

export default function ServicesPreview() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">The Atelier</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">A house of <em className="text-gold">quiet</em> craft</h2>
          <p className="mt-6 text-muted-foreground">
            Four disciplines, one signature. Every Montage Filims wedding is composed by the same hands
            from first conversation to final frame.
          </p>
        </Reveal>

        <Stagger className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <StaggerItem key={s.num} className="group relative bg-background p-10 transition-colors duration-700 hover:bg-secondary">
              <div className="font-display text-5xl text-gold/40 transition-colors duration-700 group-hover:text-gold">{s.num}</div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link to="/services" className="mt-8 inline-block text-[0.7rem] uppercase tracking-[0.3em] text-gold link-underline">
                Discover
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
