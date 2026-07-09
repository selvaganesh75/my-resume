export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools";
  level: number;
  color: string;
}
 
export const skills: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    level: 95,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: 90,
    color: "#FFFFFF",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 90,
    color: "#3178C6",
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    level: 90,
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 85,
    color: "#38BDF8",
  },
];