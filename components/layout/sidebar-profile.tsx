import { Circle } from "lucide-react";
 
export function SidebarProfile() {
  return (
    <div className="mb-10">
      {/* <div
        className="
          glass
          relative
          overflow-hidden
          rounded-3xl
          p-1
        "
      > */}
        {/* Background Glow */}
        {/* <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" /> */}
        {/* <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" /> */}
 
        {/* Avatar */}
        <div className="relative z-10 text-sm flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-cyan-500 to-violet-600 text-3xl font-bold text-white shadow-xl">
          SG
        </div>
 
        {/* Name */}
        {/* <h2 className="relative z-10 text-center text-xl font-bold">
          Selva Ganesh
        </h2> */}
 
        {/* Role */}
        {/* <p className="relative z-10 mt-1 text-center text-sm text-slate-400">
          Senior Frontend Engineer
        </p> */}
 
        {/* Status */}
        {/* <div className="relative z-10 mt-5 flex items-center justify-center gap-2 rounded-full bg-emerald-500/10 py-2 text-sm text-emerald-400">
          <Circle
            size={10}
            fill="currentColor"
            className="animate-pulse"
          />
          Available for Work
        </div> */}
      {/* </div> */}
    </div>
  );
}