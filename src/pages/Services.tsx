import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import sPlanning from "@/assets/s-planning.jpg";
import sDecor from "@/assets/s-decor.jpg";
import sCinema from "@/assets/s-cinema.jpg";
import sDest from "@/assets/s-destination.jpg";

const services = [
  { num: "01", title: "Wedding Planning", img: sPlanning, desc: "From the first private dinner to the final farewell brunch — a single director, a discreet team, and a master schedule that anticipates every variable." },
  { num: "02", title: "Décor & Design", img: sDecor, desc: "Editorial set design grounded in narrative. Florals, lighting, fabrics and furniture — bespoke fabrication only, never rentals dressed up." },
  { num: "03", title: "Photography & Cinematography", img: sCinema, desc: "Documentary-led films and editorial photography. Two cinematographers, a dedicated editor, and a master colourist on every project." },
  { num: "04", title: "Destination Weddings", img: sDest, desc: "Full logistical concierge for celebrations abroad — venue, permits, vendors, guest experience and transport, handled end to end." },
];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="The Disciplines"
        title={<>Four crafts. <em className="text-gold">One signature.</em></>}
        subtitle="Each service may be commissioned alone, but they are designed to work as one."
        image={sDecor}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-luxe space-y-32 md:space-y-44">
          {services.map((s, idx) => (
            <Reveal key={s.num}>
              <div className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-20 ${idx % 2 ? "" : ""}`}>
                <div className={`lg:col-span-7 image-zoom ${idx % 2 ? "lg:order-2" : ""}`}>
                  <img src={s.img} alt={s.title} loading="lazy" className="h-[460px] w-full object-cover shadow-elegant md:h-[560px]" />
                </div>
                <div className={`lg:col-span-5 ${idx % 2 ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                  <div className="font-display text-7xl text-gold/30">{s.num}</div>
                  <h2 className="mt-4 font-display text-4xl md:text-5xl">{s.title}</h2>
                  <div className="mt-6 gold-divider" />
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/contact" className="mt-10 inline-block text-[0.7rem] uppercase tracking-[0.3em] text-gold link-underline">
                    Enquire →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
