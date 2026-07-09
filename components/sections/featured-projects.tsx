import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/widgets/project-card";
import { SectionHeader } from "@/components/widgets/section-header";
 
export function FeaturedProjects() {
  return (
    <section className="mt-16">
      <SectionHeader
        title="Featured Projects"
        subtitle="Projects I am proud of."
      />
 
      <div className="space-y-8">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
      </div>
    </section>
  );
}