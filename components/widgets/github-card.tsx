import { GlassCard } from "@/components/ui/glass-card";
import { GitBranch } from "lucide-react";
 
export function GithubCard() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-3">
        <GitBranch className="text-white" />
 
        <h3 className="text-xl font-bold">
          GitHub Activity
        </h3>
      </div>
 
      <div className="mt-6 grid grid-cols-7 gap-2">
        {Array.from({ length: 49 }).map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded bg-blue-500/20 hover:bg-blue-500 transition"
          />
        ))}
      </div>
 
      <p className="mt-5 text-sm text-slate-400">
        Contributions in the last weeks
      </p>
    </GlassCard>
  );
}
 