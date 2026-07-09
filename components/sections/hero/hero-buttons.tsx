import { Download, Mail } from "lucide-react";
import { GlassButton } from "../../ui/glass-button";

export function HeroButtons(){
    return (<div className="mt-8 flex gap-4">
        <GlassButton>
            <Download size={18}/>
            Resume
        </GlassButton>
        <GlassButton variant={"outline"}>
            <Mail size={18}/>
            Contact
        </GlassButton>
    </div>)
}