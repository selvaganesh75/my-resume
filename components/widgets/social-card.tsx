import { GlassCard } from "@/components/ui/glass-card";
import { SocialLinks } from "@/components/contact/social-link";
 
export function SocialCard() {
  return (
    <GlassCard className="p-6">
      <h3 className="mb-5 text-xl font-bold">
        Connect
      </h3>
 
      <SocialLinks />
    </GlassCard>
  );
}