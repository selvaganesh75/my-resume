"use client";

import { navigation } from "@/constants/navigation";
import { SidebarItem } from "./sidebar-item";
import { SidebarProfile } from "./sidebar-profile";

export function Sidebar() {
    return <aside
        className="glass fixed left-6 top-6 bottom-6 w-72 rounded-3xl p-6"
    >
        <SidebarProfile />
        <nav className="space-y-2 flex flex-col ">
            {navigation.map((item) => {
                return <SidebarItem item={item} key={item.href} />
            })}

        </nav>
    </aside>
}