"use client";
import { NavigationItem } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
    item: NavigationItem
}
export const SidebarItem = ({item}: SidebarItemProps) => {
    const pathName = usePathname();
    const isActive = pathName === item.href;

    const Icon = item.icon;

    return <Link href={item.href} className={cn("flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300",
        isActive ? "bg-blue-500 text-white" : "text-slate-400 hover:bg-white/10 hover: text-white"
    )} >
        <Icon size={20} />
        <span>{item.title}</span>
    </Link>
}

SidebarItem.displayName = "SidebarItem"