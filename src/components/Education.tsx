import { education } from "@/data/resume";
import { GlassCard } from "./GlassCard";
import { RevealGroup, RevealItem } from "./Reveal";

export function Education() {
  return (
    <section id="education" className="mx-auto w-[min(92%,64rem)] py-10">
      <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-300">
        Education
      </h2>
      <RevealGroup className="flex flex-col gap-5">
        {education.map((item) => (
          <RevealItem key={item.degree}>
            <GlassCard className="p-6 sm:p-8">
              <h3 className="font-semibold text-white">{item.degree}</h3>
              <p className="mt-2 text-white/70">{item.school}</p>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
