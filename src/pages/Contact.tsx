import { useState } from "react";
import { z } from "zod";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import g2 from "@/assets/g2.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(6, "Please enter a phone").max(30),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more").max(1500),
});

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you. We will be in touch within 48 hours.");
      form.reset();
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Begin"
        title={<>Tell us about <em className="text-gold">your day</em></>}
        subtitle="A short note is enough. We respond personally within 48 hours."
        image={g2}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Event Date" name="date" type="date" />
                <Field label="Budget Range" name="budget" type="text" placeholder="e.g. $100k – $250k" className="md:col-span-2" />
              </div>
              <Field label="Tell us about your wedding" name="message" textarea required />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center bg-gradient-gold px-10 py-4 text-[0.72rem] uppercase tracking-[0.3em] text-obsidian shadow-gold transition-all duration-500 hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:pl-10">
            <div className="border-l border-border pl-10">
              <span className="eyebrow">Atelier</span>
              <h3 className="mt-6 font-display text-3xl">Visit us by appointment.</h3>
              <ul className="mt-10 space-y-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-0.5 text-gold flex-shrink-0" />
                  <span>14 Heritage Lane, Suite 200<br />Mumbai · Paris · Dubai</span>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={18} className="mt-0.5 text-gold flex-shrink-0" />
                  <a href="mailto:hello@montagefilims.com" className="link-underline">hello@montagefilims.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={18} className="mt-0.5 text-gold flex-shrink-0" />
                  <a href="tel:+919876543210" className="link-underline">+91 98765 43210</a>
                </li>
              </ul>
            </div>

            <div className="mt-12 overflow-hidden border border-border">
              <iframe
                title="Atelier location"
                src="https://www.google.com/maps?q=Mumbai&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                style={{ border: 0, filter: "grayscale(0.4) contrast(0.95)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", required, placeholder, textarea, className = "",
}: {
  label: string; name: string; type?: string; required?: boolean; placeholder?: string; textarea?: boolean; className?: string;
}) {
  const base = "w-full bg-transparent border-b border-border py-3 text-sm placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors";
  return (
    <label className={`block ${className}`}>
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} placeholder={placeholder} className={`${base} resize-none mt-2`} maxLength={1500} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={`${base} mt-2`} maxLength={255} />
      )}
    </label>
  );
}
