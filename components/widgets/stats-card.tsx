import { ReactNode } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
 
interface StatsCardProps {
  title: string;
  value: ReactNode;
  subtitle: string;
  icon?: ReactNode;
  className?: string;
}
 
export function StatsCard({
  title,
  value,
  subtitle,
  icon,
  className,
}: StatsCardProps) {
  return (
    <GlassCard
      className={cn(
        "group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
 
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            {title}
          </p>
 
          <h3 className="mt-3 text-4xl font-bold tracking-tight">
            {value}
          </h3>
 
          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>
 
        {icon && (
          <div className="rounded-2xl bg-white/5 p-3 text-blue-400">
            {icon}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
 