interface BadgeProps {
  children: React.ReactNode;
}
 
export function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
      {children}
    </span>
  );
}