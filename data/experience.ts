export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}
 
export const experiences: Experience[] = [
  {
    company: "Cognizant",
    role: "Senior Frontend Engineer",
    duration: "2018 - Present",
    location: "Chennai, India",
    description: [
      "Built enterprise React applications.",
      "Led frontend architecture discussions.",
      "Improved performance by implementing lazy loading and code splitting.",
      "Mentored junior developers.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "Tailwind",
    ],
  },
];