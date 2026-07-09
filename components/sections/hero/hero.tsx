import { FloatingBlobs } from "@/components/animations/floating-blobs";
import { HeroContent } from "./hero-content";
import { HeroStats } from "./hero-stats";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
    return (<section className="relative overflow-hidden rounded-[32px] glass p-10">
        <FloatingBlobs />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
            <FadeIn>
                <HeroContent />

            </FadeIn>
            <FadeIn delay={0.2}>
                <HeroStats />
            </FadeIn>
        </div>

    </section>)
}