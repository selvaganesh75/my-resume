import { projects } from "@/data/resume";
import { GlassCard } from "./GlassCard";
import { RevealGroup, RevealItem } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-[min(92%,64rem)] py-10">
      <h2 className="mb-6 text-sm uppercase tracking-[0.3em] text-sky-300">
        Experience &amp; Projects
      </h2>
      <RevealGroup className="flex flex-col gap-5" stagger={0.15}>
        {projects.map((project) => (
          <RevealItem key={project.name}>
            <GlassCard className="p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                <span className="text-sm text-white/50">
                  {project.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-sky-300">{project.client}</p>
              <p className="mt-4 text-white/70">{project.description}</p>

              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:border-sky-300/40 hover:bg-sky-300/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlassCard>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

