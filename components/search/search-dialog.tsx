"use client";
 
import { Search } from "lucide-react";
 
export function SearchDialog() {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center gap-3">
        <Search />
 
        <input
          className="w-full bg-transparent outline-none"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}