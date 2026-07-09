import { GlassCard } from "@/components/ui/glass-card";
 
export function AvailabilityCard() {
  return (
    <GlassCard className="p-6">
      <h3 className="font-bold text-green-400">
        Available
      </h3>
 
      <p className="mt-3 text-slate-400">
        Open to Senior React / Next.js opportunities.
      </p>
    </GlassCard>
  );
}