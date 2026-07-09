import Image from "next/image";
import { ExternalLink, GitBranch } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassButton } from "@/components/ui/glass-button";
 
interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  };
}
 
export function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <GlassCard className="overflow-hidden p-0">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={450}
        className="h-60 w-full object-cover"
      />
 
      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>
 
        <p className="mt-3 text-slate-400">
          {project.description}
        </p>
 
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
 
        <div className="mt-6 flex gap-4">
          <GlassButton>
            <ExternalLink size={16} />
            Live Demo
          </GlassButton>
 
          <GlassButton variant="outline">
            <GitBranch size={16} />
            GitHub
          </GlassButton>
        </div>
      </div>
    </GlassCard>
  );
}