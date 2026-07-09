"use client";
 
export function CommandPalette() {
  return (
    <div className="glass rounded-3xl p-8">
      <input
        placeholder="Type a command..."
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}