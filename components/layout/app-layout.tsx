import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { ReactNode } from "react";

interface AppLayoutProps {
    children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return <div className="min-h-screen bg-[var(--background)]">
        <Sidebar />
        <div className="ml-80">
            <Navbar />
            <main className="p-8 pt-28">
                {children}
            </main>
        </div>

    </div>
}