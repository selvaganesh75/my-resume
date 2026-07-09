interface PageHeaderProps {
  title: string;
  description: string;
}
 
export function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-10">
      <h1 className="text-5xl font-black">
        {title}
      </h1>
 
      <p className="mt-4 max-w-3xl text-slate-400">
        {description}
      </p>
    </div>
  );
}