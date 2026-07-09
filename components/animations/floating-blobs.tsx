"use client";

import { motion } from "motion/react";

export function FloatingBlobs() {
    return <motion.div
        animate={{ x: [0, 60, 0], y: [0, -50, 0] }}
        transition={{
            duration: 12,
            repeat: Infinity
        }}
        className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
    >
        <motion.div
            animate={{ x: [0, -40, 0], y: [0, 70, 0] }}
            transition={{
                duration: 15,
                repeat: Infinity
            }}
            className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
        >

        </motion.div>
    </motion.div>
}