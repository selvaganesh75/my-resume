import Link from "next/link";
import { GitBranch, LinkIcon, Mail } from "lucide-react";
 
export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href="#">
        <GitBranch />
      </Link>
 
      <Link href="#">
        <LinkIcon />
      </Link>
 
      <Link href="#">
        <Mail />
      </Link>
    </div>
  );
}