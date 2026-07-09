import { StatsCard } from "./stats-card";
import { profile } from "@/data/profile";
import {
    BriefcaseBusiness,
    FolderKanban,
    Code2,
    Award,
} from "lucide-react";

export function StatsGrid() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">


            <StatsCard
                title="Experience"
                value={`${profile.experience}+`}
                subtitle="Years"
                icon={<BriefcaseBusiness size={24} />}
            />

            <StatsCard
                title="Projects"
                value={`${profile.projects}+`}
                subtitle="Completed"
                icon={<FolderKanban size={24} />}
            />

            <StatsCard
                title="Technologies"
                value={`${profile.technologies}+`}
                subtitle="Stacks"
                icon={<Code2 size={24} />}
            />

            <StatsCard
                title="Certifications"
                value={`${profile.certifications}+`}
                subtitle="Earned"
                icon={<Award size={24} />}
            />

        </div>
    );
}
