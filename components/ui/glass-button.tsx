import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";


const buttonVariants = cva([
    "inline-flex items-center justify-center gap-2",
    "rounded-2xl select-none font-medium",
    "focus:outline-none focus:ring-2 focus:ring-blue-500",
    "disabled:pointer-events-none disabled:opacity-50",
],
    {
        variants: {
            variant: {
                primary: "bg-blue-500 hover:bg-blue-600 text-white",
                secondary: "bg-violet-500 hover:bg-violet-700 text-white",
                outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
                ghost: "text-white hover:bg-white/10",
            },
            size: {
                sm: "h-9 px-4 text-sm",
                md: "h-11 px-6",
                lg: "h14 px-8 text-lg",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    });

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);

GlassButton.displayName = "GlassButton"