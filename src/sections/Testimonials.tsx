import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const items = [
  { quote: "They didn't plan our wedding. They composed it. Every frame of the film still moves us.", name: "Aanya & Rohan", place: "Udaipur, India" },
  { quote: "An exceptional, almost invisible presence — and a film that rivals a feature production.", name: "Sophia & Marc", place: "Lake Como, Italy" },
  { quote: "Three days, six hundred guests, zero seams. Their taste is the quiet kind that lasts.", name: "Layla & Hassan", place: "Marrakech, Morocco" },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-obsidian py-28 text-ivory md:py-40">
      <div className="container-luxe">
        <Reveal className="text-center">
          <span className="eyebrow text-ivory/60 justify-center">Letters</span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl">From those we have served</h2>
        </Reveal>

        <div className="relative mx-auto mt-16 min-h-[260px] max-w-3xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-display text-7xl leading-none text-gold/40">"</div>
              <p className="mt-2 font-display text-2xl italic leading-relaxed md:text-3xl">
                {items[i].quote}
              </p>
              <div className="mt-10 gold-divider mx-auto" />
              <div className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-gold">{items[i].name}</div>
              <div className="mt-2 text-xs text-ivory/60">{items[i].place}</div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex justify-center gap-3">
            {items.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Testimonial ${k + 1}`}
                className={`h-px transition-all duration-500 ${k === i ? "w-12 bg-gold" : "w-6 bg-ivory/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
