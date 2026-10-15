import { profile } from "@/data/resume";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto w-[min(92%,64rem)] py-10">
      <Reveal>
        <GlassCard className="p-8 sm:p-12">
          <h2 className="text-sm uppercase tracking-[0.3em] text-sky-300">
            About
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {profile.currentlyDoing}
          </p>
          <p className="mt-3 text-white/60">
            Based in {profile.location} — open to remote and hybrid roles.
          </p>
        </GlassCard>
      </Reveal>
    </section>
  );
}
