import { skills } from "@/data/skills";
import { SkillCard } from "@/components/widgets/skill-card";
import { SectionHeader } from "@/components/widgets/section-header";
 
export function SkillsSection() {
  return (
    <section className="mt-16">
      <SectionHeader
        title="Technical Skills"
        subtitle="Technologies I work with every day."
      />
 
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </section>
  );
}
 