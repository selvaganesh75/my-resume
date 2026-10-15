"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import { GlassCard } from "./GlassCard";
import { useTypewriter } from "./useTypewriter";

const roles = [
  "Staff Engineer",
  "React & Next.js Architect",
  "UI Systems Builder",
  "Performance-obsessed Frontend Dev",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="top"
      className="mx-auto flex w-[min(92%,64rem)] flex-col-reverse items-center gap-10 py-20 sm:py-28 md:flex-row md:items-stretch"
    >
      <motion.div
        className="flex-1"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <GlassCard strong hover={false} className="beam-border p-8 sm:p-12">
          <motion.p
            variants={item}
            className="text-sm uppercase tracking-[0.3em] text-sky-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="gradient-text mt-4 text-4xl font-bold leading-tight sm:text-5xl"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}
          </motion.h1>

          <motion.p variants={item} className="mt-2 h-7 text-xl text-white/80">
            {typed}
            <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-sky-300 align-middle">
              &nbsp;
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-white/70">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(56,189,248,0.55)",
              }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Get in touch
            </motion.a>
            <motion.a
              href={profile.resumeFile}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="glass rounded-full px-6 py-3 text-sm font-semibold transition hover:bg-white/15"
            >
              Download résumé
            </motion.a>
            <motion.a
              href={`https://wa.me/${profile.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="glass rounded-full px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-white/15"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </GlassCard>
      </motion.div>

      <motion.div
        className="mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <GlassCard
            hover={false}
            className="aspect-square w-48 overflow-hidden p-2 sm:w-64"
          >
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={400}
              height={400}
              priority
              className="h-full w-full rounded-2xl object-cover"
            />
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
