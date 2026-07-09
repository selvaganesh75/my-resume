import { LayoutDashboard, User, Briefcase, FolderKanban, NotebookPen, BarChart3, Mail, FileText, LucideIcon } from "lucide-react"
export interface NavigationItem {
    title: string;
    href: string;
    icon: LucideIcon
}

export const navigation: NavigationItem[] = [
    {
        title: "Dashboard",
        href :"/",
        icon: LayoutDashboard
    },
    {
        title: "About",
        href: "/about",
        icon: User
    },
    {
        title: "Experience",
        href: "/experience",
        icon: Briefcase
    },
    {
        title: "Projects",
        href: "/projects",
        icon: FolderKanban
    },
    {
        title: "Blog",
        href: "/blog",
        icon: NotebookPen
    },
    {
        title: "Analytics",
        href: "/dashboard",
        icon: BarChart3
    },
    {
        title: "Contact",
        href: "/contact",
        icon: Mail
    },
    {
        title: "Resume",
        href: "/resume",
        icon: FileText
    },
 
  
]