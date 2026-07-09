import { Download } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
 
export function ResumeDownload() {
  return (
    <GlassButton>
      <Download size={18} />
      Download Resume
    </GlassButton>
  );
}