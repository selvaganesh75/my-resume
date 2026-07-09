interface TechBadgeProps {
  name: string;
}
 
export function TechBadge({
  name,
}: TechBadgeProps) {
  return (
    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
      {name}
    </span>
  );
}