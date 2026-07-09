"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number
}

export function FadeIn({ children, delay = 0 }: FadeInProps) {
    return <motion.div initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            duration: 0.6,
            delay
        }}
    >
        {children}
    </motion.div>
}