import { GithubCard } from "@/components/widgets/github-card";
import { SectionHeader } from "@/components/widgets/section-header";
 
export function GithubSection() {
  return (
    <section className="mt-16">
      <SectionHeader
        title="GitHub"
        subtitle="My recent contribution activity."
      />
 
      <GithubCard />
    </section>
  );
}