import { HeroButtons } from "./hero-buttons";

export function HeroContent(){
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good Morning " : hour < 17 ? "Good Afternoon" : "Good Evening";

    return (
        <div>
            <span className="text-sm text-blue-400 font-medium">{greeting}</span>
            <h1 className="mt-4 text-6xl font-black leading-tight">Selva <br/>
            <span className="gradient-text">Ganesh </span> </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400"> Senior Frontend Engineer with 12+ year of experience building scalable, accessible, and high-performance React & Next.js applications. </p>
            <HeroButtons />
        </div>
    )
}