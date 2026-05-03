import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Link } from "react-router-dom";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

const items = [
  { src: g3, title: "The Bride", place: "Tuscany", span: "row-span-2" },
  { src: g1, title: "Ceremony", place: "Udaipur", span: "" },
  { src: g4, title: "Reception", place: "Mumbai", span: "" },
  { src: g2, title: "Cliffside Vows", place: "Amalfi", span: "" },
  { src: g5, title: "First Dance", place: "Paris", span: "" },
  { src: g6, title: "Florals", place: "Studio", span: "" },
];

export default function FeaturedGallery() {
  return (
    <section className="bg-background py-28 md:py-40">
      <div className="container-luxe">
        <Reveal className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Selected Frames</span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">A glimpse into the archive</h2>
          </div>
          <Link to="/portfolio" className="text-[0.7rem] uppercase tracking-[0.3em] text-gold link-underline">
            Full Portfolio →
          </Link>
        </Reveal>

        <Stagger className="mt-16 grid auto-rows-[260px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {items.map((it, idx) => (
            <StaggerItem key={idx} className={`image-zoom group relative ${it.span}`}>
              <img src={it.src} alt={it.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 translate-y-2 text-ivory opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="font-display text-xl">{it.title}</div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{it.place}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
