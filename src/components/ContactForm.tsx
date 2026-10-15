"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { sendContactMessage, type ContactFormState } from "@/app/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.05 }}
      whileTap={{ scale: pending ? 1 : 0.96 }}
      className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending\u2026" : "Send message"}
    </motion.button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* Honeypot: hidden from real users, left blank by them, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your name"
          maxLength={100}
          className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-300/60"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Your email"
          maxLength={150}
          className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-300/60"
        />
      </div>
      <textarea
        required
        name="message"
        rows={5}
        maxLength={3000}
        placeholder="Tell me about the role or project…"
        className="glass rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-300/60"
      />

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        <AnimatePresence mode="wait">
          {state.message ? (
            <motion.p
              key={state.message}
              role="status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className={`text-sm ${
                state.status === "success"
                  ? "text-emerald-300"
                  : "text-rose-300"
              }`}
            >
              {state.message}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </form>
  );
}
