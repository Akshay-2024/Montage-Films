import { Reveal } from "@/components/Reveal";
import { Link } from "react-router-dom";
import g4 from "@/assets/g4.jpg";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={g4} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-obsidian/75" />
      </div>
      <div className="container-luxe relative py-28 text-center text-ivory md:py-40">
        <Reveal>
          <span className="eyebrow text-ivory/60 justify-center">Begin</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Let us begin with a <em className="text-gold">conversation</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ivory/75">
            We meet a small number of couples each season. Tell us about your wedding and we'll arrange a private consultation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center bg-gradient-gold px-10 py-4 text-[0.72rem] uppercase tracking-[0.3em] text-obsidian shadow-gold transition-transform duration-500 hover:-translate-y-0.5"
          >
            Request a Consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
