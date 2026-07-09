import { GlassCard } from "@/components/ui/glass-card";
import { Certification } from "@/data/certification";
 
interface CertificationCardProps {
  certification: Certification;
}
 
export function CertificationCard({
  certification,
}: CertificationCardProps) {
  return (
    <GlassCard className="p-6">
      <h3 className="font-semibold">
        {certification.title}
      </h3>
 
      <p className="mt-2 text-blue-400">
        {certification.organization}
      </p>
 
      <p className="mt-2 text-slate-500">
        {certification.year}
      </p>
    </GlassCard>
  );
}