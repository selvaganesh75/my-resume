import { cacheLife } from "next/cache";
import { profile } from "@/data/resume";

export async function Footer() {
  "use cache";
  cacheLife("days");
  return (
    <footer className="mx-auto w-[min(92%,64rem)] py-10 text-center text-sm text-white/40">
      © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp;
      Tailwind CSS.
    </footer>
  );
}
