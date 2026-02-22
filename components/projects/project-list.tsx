import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  repoLink: string;
  toolsUsed: string[];
};

export const projects = [
  {
    id: 1,
    title: "Ezra AI",
    description: "AI Powered Event Matchmaker for Conferences and Meetups",
    imageUrl:
      "https://ecfixnsgwkzsxkaczwkv.supabase.co/storage/v1/object/public/assets/hero.png",
    liveLink: "https://ezra-ai.net/",
    repoLink: "https://github.com/Prasad48432",
    toolsUsed: ["NextJS", "Typescript", "Tailwind", "Supabase"],
  },
  {
    id: 2,
    title: "Digiresume",
    description:
      "Build a dynamic digital portfolio and resume that stay in sync.",
    imageUrl: "https://i.ibb.co/nsSnKZsW/digiresume.png",
    liveLink: "https://digiresume.vercel.app/",
    repoLink: "https://github.com/digiresume-inc/digiresume",
    toolsUsed: ["NextJS", "Typescript", "Tailwind", "Supabase"],
  },
  {
    id: 3,
    title: "Exam Portal",
    description:
      "end-to-end exam portal built on nextjs prisma nextauth postgres/neon",
    imageUrl: "https://i.ibb.co/MDq1NM9g/examportal.png",
    liveLink: "https://exam-portal-prisma.vercel.app/",
    repoLink: "https://github.com/Prasad48432/ExamPortal-NextAuth-Prisma",
    toolsUsed: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "Prisma",
      "Neon",
      "NextAuth",
    ],
  },
  {
    id: 4,
    title: "Linkfolio",
    description: "your portfolio simple, powerful and lightweight on the web",
    imageUrl: "https://i.ibb.co/tMZGNxxS/linkfolio.png",
    liveLink: "https://linkfolio.space/",
    repoLink: "https://github.com/Prasad48432/linkfolio",
    toolsUsed: ["NextJS", "Typescript", "Tailwind", "Supabase"],
  },
];

const ProjectList = () => {
  return (
    <section
      aria-label="Projects"
      className="mt-6 mb-6 space-y-6 w-full px-4 sm:px-8 md:px-0"
    >
      <h2 className="ise text-3xl md:text-4xl">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="gap-1 col-span-1 flex flex-col items-start justify-center overflow-hidden"
          >
            <Image
              src={project.imageUrl}
              alt={`Project ${project}`}
              width={400}
              height={300}
              className="grayscale object-cover w-full h-50 transition-transform duration-300 border border-border/50 rounded-md"
            />
            <h3 className="text-xl font-semibold mt-2 pl-1 tracking-wide">
              {project.title}
            </h3>
            <div className="flex gap-4 isa text-sm pl-1">
              <Link
                href={project.liveLink}
                className="group relative inline-flex items-center gap-1 transition duration-300"
              >
                Live Preview
                <ExternalLink className="size-3" />
                <span className="absolute left-0 bottom-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>

              <Link
                href={project.repoLink}
                className="group relative inline-flex items-center gap-1 transition duration-300"
              >
                Github URL
                <Github className="size-3" />
                <span className="absolute left-0 bottom-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <p className="text-sm text-foreground/70 mt-1 isa pl-1">
              {project.description}
            </p>
            <span className="text-sm text-foreground mt-1 flex items-center gap-1 flex-wrap pl-1">
              {project.toolsUsed.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded border shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)]"
                >
                  {tool}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
