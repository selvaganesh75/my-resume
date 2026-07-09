import { BlogCard } from "@/components/widgets/blog-card";
import { SectionHeader } from "@/components/widgets/section-header";
 
export function LatestBlogs() {
  return (
    <section className="mt-16">
      <SectionHeader
        title="Latest Articles"
        subtitle="Sharing knowledge."
      />
 
      <BlogCard
        title="Coming Soon"
        date="2026"
        description="Technical articles will be published here."
      />
    </section>
  );
}