import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import about from "@/assets/about.jpg";
import sDest from "@/assets/s-destination.jpg";
import sDecor from "@/assets/s-decor.jpg";

const items = [
  { src: g3, title: "Aanya & Rohan", place: "Udaipur", cat: "Traditional" },
  { src: g2, title: "Sophia & Marc", place: "Amalfi Coast", cat: "Destination" },
  { src: g4, title: "The Royal Reception", place: "Mumbai", cat: "Luxury" },
  { src: g1, title: "Mandap in White", place: "Jaipur", cat: "Traditional" },
  { src: g5, title: "First Dance", place: "Paris", cat: "Luxury" },
  { src: sDest, title: "Aegean Vows", place: "Santorini", cat: "Destination" },
  { src: about, title: "Tablescape Study", place: "Studio", cat: "Luxury" },
  { src: sDecor, title: "Candlelit Aisle", place: "Delhi", cat: "Traditional" },
  { src: g6, title: "Bridal Florals", place: "Studio", cat: "Luxury" },
];

const filters = ["All", "Traditional", "Destination", "Luxury"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const visible = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected <em className="text-gold">works</em></>}
        subtitle="A curated archive of recent celebrations."
        image={g4}
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-luxe">
          <Reveal className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 ${
                  filter === f ? "bg-obsidian text-ivory" : "border border-border text-muted-foreground hover:text-gold hover:border-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <motion.div layout className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
            <AnimatePresence>
              {visible.map((it) => (
                <motion.button
                  key={it.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setLightbox(it.src)}
                  className="image-zoom group relative aspect-[4/5] overflow-hidden text-left"
                >
                  <img src={it.src} alt={it.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute bottom-5 left-5 translate-y-2 text-ivory opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="font-display text-xl">{it.title}</div>
                    <div className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{it.place}</div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="bg-obsidian py-24 text-ivory md:py-32">
        <div className="container-luxe">
          <Reveal className="max-w-xl">
            <span className="eyebrow text-ivory/60">Films</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">Cinematic highlights</h2>
            <p className="mt-6 text-ivory/70">A selection of feature-length wedding films, each composed and colour-graded by our in-house team.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[g5, g2].map((src) => (
              <Reveal key={src} className="group relative aspect-video overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-obsidian/40 transition-colors duration-500 group-hover:bg-obsidian/20">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/70 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <div className="ml-1 h-0 w-0 border-y-8 border-l-[14px] border-y-transparent border-l-gold" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/95 p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-6 top-6 text-ivory/70 hover:text-gold"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-elegant"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
