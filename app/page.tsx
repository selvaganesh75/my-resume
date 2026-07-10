import { AppLayout } from "@/components/layout/app-layout";
 
import { Hero } from "@/components/sections/hero/hero";
 
// import { FeaturedProjects } from "@/components/sections/home/featured-projects";
 
import { SkillsSection } from "@/components/sections/home/skills-section";
 
// import { ExperienceSection } from "@/components/sections/home/experience-section";
 
import { GithubSection } from "@/components/sections/home/github-section";
 
import { CertificationsSection } from "@/components/sections/home/certifications-section";
 
import { ContactSection } from "@/components/sections/home/contact-section";
 
import { LatestBlogs } from "@/components/sections/home/latest-blogs";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";

 
export default function HomePage() {
  return (
    <AppLayout>
      <Hero />
 
      <FeaturedProjects />
 
      <SkillsSection />
 
      {/* <ExperienceSection /> */}
 
      <GithubSection />
 
      <CertificationsSection />
 
      <LatestBlogs />
 
      <ContactSection />
    </AppLayout>
  );
}