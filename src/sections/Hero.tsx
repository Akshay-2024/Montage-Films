import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden text-ivory">
      {/* Background — image with Ken Burns; could be swapped to <video> */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Bride in a grand ballroom illuminated by chandeliers"
          className="h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--obsidian) / 0.5) 100%)" }} />
      </div>

      {/* Decorative gold frame */}
      <div className="pointer-events-none absolute inset-6 hidden border border-gold/25 md:block lg:inset-10" />

      <div className="container-luxe relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.7rem] uppercase tracking-[0.4em] text-gold"
        >
          Est. 2014  ·  Worldwide
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]"
        >
          Crafting <em className="text-gold">Timeless</em><br />
          Luxury Weddings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 max-w-xl text-sm leading-relaxed text-ivory/75 md:text-base"
        >
          A bespoke atelier for couples who believe a wedding is not produced — it is composed,
          frame by frame, like a film worth keeping forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center bg-gradient-gold px-8 py-4 text-[0.72rem] uppercase tracking-[0.3em] text-obsidian shadow-gold transition-transform duration-500 hover:-translate-y-0.5"
          >
            Book Consultation
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center border border-ivory/60 px-8 py-4 text-[0.72rem] uppercase tracking-[0.3em] text-ivory transition-all duration-500 hover:border-gold hover:text-gold"
          >
            View Portfolio
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.4em] text-ivory/60"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="block h-10 w-px bg-gold/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
