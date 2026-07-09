"use client";
 
import { Bell } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";
 
export function NotificationDropdown() {
  return (
    <GlassButton
      variant="ghost"
      size="sm"
    >
      <Bell />
    </GlassButton>
  );
}