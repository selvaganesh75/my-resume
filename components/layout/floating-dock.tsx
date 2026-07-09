"use client";
 
import {
  Home,
  FolderKanban,
  Mail,
} from "lucide-react";
 
export function FloatingDock() {
  return (
    <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-5 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
      <Home />
 
      <FolderKanban />
 
      <Mail />
    </div>
  );
}