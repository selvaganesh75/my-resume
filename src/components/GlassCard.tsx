"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  strong = false,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={`${
        strong ? "glass-strong" : "glass"
      } rounded-3xl ${className}`}
      whileHover={
        hover ? { y: -6, boxShadow: "0 20px 45px rgba(0,0,0,0.4)" } : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}
