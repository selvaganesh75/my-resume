import { Mail, Phone, MapPin } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
 
export function ContactCard() {
  return (
    <GlassCard className="space-y-5 p-6">
      <h3 className="text-2xl font-bold">
        Let &npsb; s Connect
      </h3>
 
      <div className="flex items-center gap-3">
        <Mail size={18} />
        your@email.com
      </div>
 
      <div className="flex items-center gap-3">
        <Phone size={18} />
        +91 XXXXX XXXXX
      </div>
 
      <div className="flex items-center gap-3">
        <MapPin size={18} />
        Chennai, India
      </div>
    </GlassCard>
  );
}
 