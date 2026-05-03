import { Reveal } from "@/components/Reveal";
import about from "@/assets/about.jpg";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="bg-secondary/40 py-28 md:py-40">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <div className="image-zoom relative">
            <img
              src={about}
              alt="Editorial wedding tablescape with white florals and gold cutlery"
              loading="lazy"
              width={1280}
              height={1600}
              className="h-[640px] w-full object-cover shadow-elegant"
            />
            <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 border border-gold/60 lg:block" />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <span className="eyebrow">The Studio</span>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] md:text-6xl">
              Cinema is memory.<br />
              <em className="text-gold">We make memory beautiful.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Founded in 2014 by a director and a creative producer, Montage Filims is a small,
              intentional house. We accept a limited number of weddings each year so every
              celebration receives our complete imagination.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From the first private dinner to the final cut of your film, you work with the same
              two principals. Always.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {[
                { n: "12+", l: "Years" },
                { n: "240", l: "Weddings" },
                { n: "32", l: "Countries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl text-gold md:text-5xl">{s.n}</div>
                  <div className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-12 inline-block text-[0.7rem] uppercase tracking-[0.3em] text-gold link-underline">
              Read Our Story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
