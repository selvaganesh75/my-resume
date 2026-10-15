"use client";

import { useEffect, useState } from "react";

/** Cycles through a list of words with a typewriter-style type/delete effect. */
export function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const atEnd = text === current;
    const atStart = text === "";

    if (atEnd && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (atStart && deleting) {
      const timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}
