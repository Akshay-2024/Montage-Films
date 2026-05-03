import { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: { eyebrow: string; title: ReactNode; subtitle?: string; image: string }) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden text-ivory">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover animate-slow-zoom" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-luxe relative flex h-full flex-col items-center justify-end pb-20 text-center md:items-start md:text-left">
        <Reveal>
          <span className="eyebrow text-ivory/70">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">{title}</h1>
          {subtitle && <p className="mt-6 max-w-xl text-ivory/75">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
