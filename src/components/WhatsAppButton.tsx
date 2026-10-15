"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${profile.contact.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="glass-strong fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-2xl"
    >
      <span className="whatsapp-ping" />
      💬
    </motion.a>
  );
}

