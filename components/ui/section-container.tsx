import { ReactNode } from "react";
 
export function SectionContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6">
      {children}
    </section>
  );
}