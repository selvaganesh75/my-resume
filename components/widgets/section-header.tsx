import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    href?: string;
}

export function SectionHeader({
    title,
    subtitle,
    href
}: SectionHeaderProps) {
    return <div className="mb-6 flex items-end justify-between">
        <h2 className="text-3xl font-bold">{title}
        </h2>
        {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
        {href && (<Link href={href} className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
            View All
            <ArrowRight size={16} />
        </Link>)}
    </div>
}