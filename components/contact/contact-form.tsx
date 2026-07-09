"use client";
 
import { GlassButton } from "@/components/ui/glass-button";
 
export function ContactForm() {
  return (
    <form className="space-y-5">
      <input
        placeholder="Name"
        className="glass w-full rounded-2xl p-4"
      />
 
      <input
        placeholder="Email"
        className="glass w-full rounded-2xl p-4"
      />
 
      <textarea
        rows={6}
        placeholder="Message"
        className="glass w-full rounded-2xl p-4"
      />
 
      <GlassButton>
        Send Message
      </GlassButton>
    </form>
  );
}
 