export type TWorkExperience = {
  id: string;
  company: string;
  website: string;
  role: string;
  description: string;
  stacks: string[];
  duration?: string;
};

const workExperiences: TWorkExperience[] = [
  {
    id: crypto.randomUUID(),
    company: "Revival Labs",
    website: "https://congkong.net/",
    role: "Full Stack AI Developer",
    description:
      "B2B Event Tech platform from ticketing to stamping to lead retrieval to analytics. Built highly scalable backend services and interactive frontends.",
    stacks: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "GCP",
      "Express",
      "TailwindCSS",
      "shadcn",
    ],
    duration: "Jul 2025 - Present",
  },
  {
    id: crypto.randomUUID(),
    company: "Dub",
    website: "https://dub.co/",
    role: "Open Source Contributor",
    description:
      "Worked on redesigning and implementing the UI of Dub’s web application, improving overall usability and visual consistency. Also enhanced user experience.",
    stacks: ["React", "Tailwind", "Shadcn", "Motion"],
    duration: "Dec 2024 - Jul 2025",
  },
  {
    id: crypto.randomUUID(),
    company: "Stutalk VBIT",
    website: "https://stutalk.vercel.app//",
    role: "Web Developer",
    description:
      "Built an end-to-end headless CMS blog platform for VBIT students to share knowledge and experiences. Implemented scalable architecture with maintainability.",
    stacks: ["React", "Hygraph", "Tailwind", "Vercel", "Shadcn", "GraphQL"],
    duration: "Jan 2024 - Nov 2024",
  },
];

export default workExperiences;
