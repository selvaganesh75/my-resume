import { AppLayout } from "@/components/layout/app-layout";
import { Hero } from "@/components/sections/hero/hero";
import { ProjectCard } from "@/components/widgets/project-card";
import { SectionHeader } from "@/components/widgets/section-header";
import { projects } from "@/data/projects";



export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <section className="mt-12">
        <SectionHeader title="Featured Projects" subtitle="A few highlights from my professional work." href="/projects"></SectionHeader>
        <ProjectCard project={projects[0]} />
      </section>
    </AppLayout>

  );
}
