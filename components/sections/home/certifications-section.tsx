import { certifications } from "@/data/certification";
import { CertificationCard } from "@/components/widgets/certification-card";
import { SectionHeader } from "@/components/widgets/section-header";
 
export function CertificationsSection() {
  return (
    <section className="mt-16">
      <SectionHeader
        title="Certifications"
        subtitle="Professional learning."
      />
 
      <div className="grid gap-5 md:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
    </section>
  );
}