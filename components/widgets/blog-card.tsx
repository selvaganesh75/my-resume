import { CalendarDays } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
 
interface BlogCardProps {
  title: string;
  date: string;
  description: string;
}
 
export function BlogCard({
  title,
  date,
  description,
}: BlogCardProps) {
  return (
    <GlassCard className="p-6">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
 
      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
        <CalendarDays size={16} />
        {date}
      </div>
 
      <p className="mt-4 text-slate-400">
        {description}
      </p>
    </GlassCard>
  );
}