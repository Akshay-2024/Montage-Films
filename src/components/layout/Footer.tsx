import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      <div className="container-luxe py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-baseline gap-2">
              <span className="font-display text-3xl">Montage</span>
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">Filims</span>
            </Link>
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-ivory/80">
              Crafting timeless luxury weddings — designed, directed, remembered.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex max-w-md items-center border-b border-ivory/30 pb-2"
            >
              <input
                type="email"
                placeholder="Your email for the journal"
                className="flex-1 bg-transparent text-sm placeholder:text-ivory/40 focus:outline-none"
              />
              <button className="text-[0.7rem] uppercase tracking-[0.3em] text-gold link-underline">
                Subscribe
              </button>
            </form>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-ivory/60">Studio</div>
            <ul className="mt-6 space-y-3 text-sm text-ivory/80">
              <li><Link to="/about" className="link-underline">Our Story</Link></li>
              <li><Link to="/services" className="link-underline">Services</Link></li>
              <li><Link to="/portfolio" className="link-underline">Portfolio</Link></li>
              <li><Link to="/pricing" className="link-underline">Pricing</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-ivory/60">Atelier</div>
            <address className="mt-6 not-italic text-sm leading-relaxed text-ivory/80">
              14 Heritage Lane, Suite 200<br />
              Mumbai · Paris · Dubai<br />
              <a href="mailto:hello@montagefilims.com" className="link-underline mt-3 inline-block text-gold">hello@montagefilims.com</a><br />
              <span>+91 98765 43210</span>
            </address>
            <div className="mt-6 flex gap-5">
              <a href="#" aria-label="Instagram" className="text-ivory/70 hover:text-gold transition"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="text-ivory/70 hover:text-gold transition"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube" className="text-ivory/70 hover:text-gold transition"><Youtube size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-[0.7rem] uppercase tracking-[0.3em] text-ivory/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Montage Filims. All rights reserved.</span>
          <span>Designed with reverence.</span>
        </div>
      </div>
    </footer>
  );
}
