"use client";
 
import { GlassButton } from "@/components/ui/glass-button";
 
export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        Something went wrong
      </h1>
 
      <GlassButton onClick={reset}>
        Try Again
      </GlassButton>
    </div>
  );
}