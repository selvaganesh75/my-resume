import { FolderOpen } from "lucide-react";
 
interface EmptyStateProps {
  title: string;
  description: string;
}
 
export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="glass rounded-3xl p-12 text-center">
      <FolderOpen
        size={50}
        className="mx-auto text-slate-500"
      />
 
      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>
 
      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
}
 