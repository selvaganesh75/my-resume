import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";


interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
    return (
        <div
            className={cn("glass rounded-3xl border border-white/10",
                "bg-white/5 p-6 shadow-2xl transition-all duration-300 shadow-black/5 backdrop-blur-xl",
                hover && "hover:translate-y-1 hover:border-blue-400/30 hover:shadow-blue-500/10",
                className,
            )

            }
            {...props}
        >
            {children}
        </div>
    );
}
