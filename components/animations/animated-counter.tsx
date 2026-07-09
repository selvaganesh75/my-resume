"use client";

import { motion, animate } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedCounterProps {
    value: number;
    suffix?: string
}

export function AnimatedCounter({ value, suffix = '' }: AnimatedCounterProps) {

    const [count, setCount] = useState(0);
    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2, onUpdate(latest) {
                setCount(Math.floor(latest));
            }
        })
        return () => controls.stop()
    }, [value])

    return <motion.span
    >
        {count} {suffix}
    </motion.span>
}