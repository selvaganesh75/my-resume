import { ContactCard } from "@/components/widgets/contact-card";
import { SectionHeader } from "@/components/widgets/section-header";
 
export function ContactSection() {
  return (
    <section className="mt-16">
      <SectionHeader
        title="Contact"
        subtitle="Available for opportunities."
      />
 
      <ContactCard />
    </section>
  );
}