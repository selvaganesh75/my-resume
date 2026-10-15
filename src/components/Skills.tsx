import { honors, skillGroups } from "@/data/resume";
import { GlassCard } from "./GlassCard";
import { RevealGroup, RevealItem } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-[min(92%,64rem)] py-10">
      <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-300">
        Skills
      </h2>
      <RevealGroup className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <RevealItem key={group.category}>
            <GlassCard className="p-6">
              <h3 className="font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 transition hover:border-sky-300/40 hover:bg-sky-300/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </RevealItem>
        ))}

        <RevealItem className="sm:col-span-2">
          <GlassCard className="p-6">
            <h3 className="font-semibold text-white">Honors &amp; Awards</h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {honors.map((honor) => (
                <li
                  key={honor}
                  className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-sm text-amber-200"
                >
                  🏆 {honor}
                </li>
              ))}
            </ul>
          </GlassCard>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}

