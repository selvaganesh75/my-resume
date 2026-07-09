import { GlassCard } from "@/components/ui/glass-card";
import { Experience } from "@/data/experience";
 
interface TimelineCardProps {
  experience: Experience;
}
 
export function TimelineCard({
  experience,
}: TimelineCardProps) {
  return (
    <GlassCard className="relative p-6">
      <div className="absolute left-6 top-7 h-3 w-3 rounded-full bg-blue-500" />
 
      <div className="ml-8">
        <h3 className="text-xl font-bold">
          {experience.role}
        </h3>
 
        <p className="mt-1 text-blue-400">
          {experience.company}
        </p>
 
        <p className="text-sm text-slate-500">
          {experience.duration}
        </p>
 
        <ul className="mt-4 space-y-2">
          {experience.description.map((item) => (
            <li
              key={item}
              className="text-slate-400"
            >
              • {item}
            </li>
          ))}
        </ul>
 
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
 