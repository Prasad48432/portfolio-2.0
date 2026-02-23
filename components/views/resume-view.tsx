import Link from "next/link";
import Image from "next/image";
import { ClassValue } from "clsx";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import config from "@/lib/config";
import workExperiences from "../work-exp/work-data";
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from "@/lib/constants";
import { projects } from "../projects/project-list";
import Footer from "../footer";

const merged = {
  ...FRONTEND_STACKS,
  ...BACKEND_STACKS,
};

export const socialsIcons = [
  {
    id: 1,
    label: "Github",
    icon: <FiGithub className="size-4 lg:size-[1.1rem]" strokeWidth={1.5} />,
    href: config.social.github,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 2,
    label: "Linkedin",
    icon: <Linkedin className="size-4 lg:size-[1.1rem]" strokeWidth={1.2} />,
    href: config.social.linkedin,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 3,
    label: "Instagram",
    icon: <FaInstagram className="size-4 lg:size-[1.1rem]" strokeWidth={1.2} />,
    href: config.social.instagram,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
  {
    id: 5,
    label: "Twitter",
    icon: <FaXTwitter className="size-4 lg:size-[1.1rem]" strokeWidth={1.2} />,
    href: config.social.twitter,
    className: "hover:bg-muted hover:text-foreground" as ClassValue,
  },
];

export default function ResumeView() {
  return (
    <div className="max-w-212.5 relative mx-auto scroll-my-12 overflow-auto px-4 py-8 md:px-16 md:py-16 bg-background">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background">
        {/* HEADER */}
        <header className="flex flex-col-reverse md:flex-row items-center justify-center md:items-start md:justify-between gap-4 md:gap-0">
          <div className="flex-1 space-y-1.5 items-center justify-center">
            <h1 className="text-lg lg:text-2xl font-bold merriweather text-foreground flex items-center gap-1">
              Mikkili Sai Prasad Reddy
            </h1>

            <p className="ml-0.5 max-w-md jetbrains text-xs lg:text-sm text-muted-foreground">
              Full-Stack Developer{" "}
              <Link
                target="_blank"
                href={"https://congkong.net"}
                className="underline underline-offset-2 font-bold"
              >
                @Revival Labs
              </Link>
            </p>

            <p className="max-w-md jetbrains text-xs text-muted-foreground flex items-center gap-1">
              <MapPin size={15} strokeWidth={1.2} /> India / Telangana /
              Hyderabad
            </p>

            <div className="flex gap-1 pt-1 items-center justify-center md:justify-start">
              {socialsIcons.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="external"
                  className="size-7 lg:size-8 rounded-sm lg:rounded-md border bg-card text-card-foreground flex items-center justify-center text-xs"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <section className="flex gap-4 ml-1 mt-4 text-xs text-muted-foreground items-center justify-center md:justify-start">
              <Link
                target="_blank"
                href={`mailto:${config.social.email}`}
                className="flex items-center gap-1"
              >
                <Mail size={16} strokeWidth={1.2} />
                Mail
              </Link>
              <Link
                target="_blank"
                href={`tel:${config.social.phone}`}
                className="flex items-center gap-1"
              >
                <Phone size={16} strokeWidth={1.2} />
                Phone
              </Link>
            </section>
          </div>

          <div className="flex flex-col items-end gap-4">
            <div className="size-22 lg:size-28 rounded-xl border grayscale">
              <Image
                src={"https://iili.io/qKCwEqQ.md.png"}
                width={88}
                height={88}
                className="w-full h-full rounded-xl object-scale-down"
                alt="Passport Image"
              />
            </div>

            <Link
              target="_blank"
              href={
                "https://drive.google.com/uc?export=download&id=1acvcsSxuieeIEUi6V0LWUgaErpFU_Cmv"
              }
              className="text-sm text-center px-3 py-1 rounded-md bg-card border text-foreground w-full hidden md:block"
            >
              Download PDF
            </Link>
          </div>
        </header>

        <div className="space-y-8">
          {/* CONTACT */}

          {/* ABOUT */}
          <section className="space-y-3">
            <h2 className="text-base lg:text-xl font-bold merriweather text-foreground">
              About
            </h2>
            <p className="jetbrains text-xs lg:text-sm text-muted-foreground">
              Full-stack developer focused on performance-driven web apps, AI
              integrations, and scalable system design. Passionate about
              building clean UX with strong architecture.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section className="space-y-3">
            <h2 className="text-base lg:text-xl font-bold merriweather text-foreground">
              Work Experience
            </h2>

            {workExperiences.map((work, index) => (
              <article
                key={index}
                className="space-y-3 border-b pb-6 last:border-none"
              >
                {/* Role + Duration */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {work.role}
                    </h3>

                    <p className="text-base font-medium text-primary">
                      {work.company}
                    </p>
                  </div>

                  <span className="text-sm whitespace-nowrap text-muted-foreground font-medium">
                    {work.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs lg:text-sm  leading-relaxed text-muted-foreground jetbrains">
                  {work.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {work.stacks.map((s, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-medium border rounded-md bg-muted/40 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </section>

          {/* EDUCATION */}
          <section className="space-y-3">
            <h2 className="text-base lg:text-xl font-bold merriweather text-foreground">
              Education
            </h2>

            <div className="flex justify-between">
              <div>
                <p className="text-lg font-bold text-foreground text-pretty leading-none">
                  B.Tech Electronics and Communication Engineering
                </p>
                <p className="text-base font-medium text-primary">
                  Vignana Bharathi Institute of Technology
                </p>
              </div>
              <div className="flex flex-col items-center justify-between my-2">
                <span className="text-sm whitespace-nowrap text-muted-foreground font-medium">
                  Sep 2021 — June 2025
                </span>
                <span className="text-sm whitespace-nowrap text-muted-foreground font-medium jetbrains">
                  8.05 CGPA
                </span>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="space-y-3">
            <h2 className="text-base lg:text-xl font-bold merriweather text-foreground">
              Skills
            </h2>

            <SkillsList stacks={merged} />
          </section>

          {/* PROJECTS */}
          <section className="space-y-3">
            <h2 className="text-base lg:text-xl font-bold merriweather text-foreground">
              Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-3 bg-card text-card-foreground"
                >
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-base text-muted-foreground mt-1">
                    {p.description}
                  </p>
                  <div className="flex gap-4 text-base">
                    <Link
                      href={p.liveLink}
                      className="group relative inline-flex items-center gap-1 transition duration-300"
                    >
                      Live Preview
                      <ExternalLink className="size-3" />
                      <span className="absolute left-0 bottom-0 h-px w-full md:w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    <Link
                      href={p.repoLink}
                      className="group relative inline-flex items-center gap-1 transition duration-300"
                    >
                      Github URL
                      <Github className="size-3" />
                      <span className="absolute left-0 bottom-0 h-px w-full md:w-0 bg-foreground transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </section>
    </div>
  );
}

const SkillsList = ({ stacks }: { stacks: stacksProps }) => {
  return (
    <ul className="flex flex-wrap items-center gap-2" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon;
        const className = stacks[stack].className;
        return (
          <li
            role="listitem"
            key={index}
            className="flex w-max items-center gap-1.5 rounded-sm border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground"
          >
            {<Icon className={className} aria-label={stack} />}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        );
      })}
    </ul>
  );
};
