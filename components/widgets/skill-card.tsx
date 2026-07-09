import { GlassCard } from "@/components/ui/glass-card";
import { Skill } from "@/data/skills";
 
interface SkillCardProps {
  skill: Skill;
}
 
export function SkillCard({
  skill,
}: SkillCardProps) {
  return (
    <GlassCard className="p-5">
      <div className="flex justify-between">
        <h3 className="font-semibold">
          {skill.name}
        </h3>
 
        <span className="text-blue-400">
          {skill.level}%
        </span>
      </div>
 
      <div className="mt-4 h-2 rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{
            width: `${skill.level}%`,
          }}
        />
      </div>
 
      <p className="mt-3 text-sm text-slate-400">
        {skill.category}
      </p>
    </GlassCard>
  );
}