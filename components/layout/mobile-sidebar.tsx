"use client";
 
import { Moon, Sun } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
import { useState } from "react";
 
export function ThemeToggle() {
  const [dark, setDark] = useState(true);
 
  return (
    <GlassButton
      variant="ghost"
      size="sm"
      onClick={() => setDark(!dark)}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </GlassButton>
  );
}