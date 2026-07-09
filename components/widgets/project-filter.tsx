"use client";
 
import { useState } from "react";
 
const filters = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
];
 
export function ProjectFilter() {
  const [active, setActive] = useState("All");
 
  return (
    <div className="mb-8 flex gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`rounded-full px-5 py-2 transition ${
            active === filter
              ? "bg-blue-500 text-white"
              : "bg-white/5 text-slate-400"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
 