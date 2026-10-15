import { profile } from "@/data/resume";
import { GlassCard } from "./GlassCard";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-[min(92%,64rem)] py-10">
      <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-300">
        Contact
      </h2>
      <Reveal>
      <GlassCard strong className="grid gap-8 p-8 sm:p-12 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            Let&apos;s work together
          </h3>
          <p className="mt-3 text-white/70">
            Have a role, project, or question? Send a message and you&apos;ll
            get an email reply at {profile.contact.email}, or ping me directly
            on WhatsApp.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              ✉️ {profile.contact.email}
            </a>
            <a
              href={`https://wa.me/${profile.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 transition hover:text-white"
            >
              💬 WhatsApp — {profile.contact.whatsappDisplay}
            </a>
          </div>
        </div>

        <ContactForm />
      </GlassCard>
      </Reveal>
    </section>
  );
}
