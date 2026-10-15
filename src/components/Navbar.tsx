"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-4 z-50 mx-auto w-[min(92%,64rem)]"
    >
      <nav className="glass flex items-center justify-between rounded-full px-5 py-3 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          Selvaganesh<span className="text-sky-400">.</span>
        </a>
        <ul className="hidden gap-6 text-sm text-white/80 sm:flex">
          {links.map((link) => (
            <li key={link.href} className="group relative">
              <a className="transition group-hover:text-white" href={link.href}>
                {link.label}
              </a>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sky-300 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  );
}

