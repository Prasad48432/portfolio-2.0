"use client";
import Marquee from "react-fast-marquee";
import { BACKEND_STACKS, FRONTEND_STACKS, stacksProps } from "@/lib/constants";

const Skills = () => {
  return (
    <section
      aria-label="Mastered Tools"
      className="mt-6 mb-6 space-y-6 w-full px-4 sm:px-8 md:px-0"
    >
      <h2 className="ise text-3xl md:text-4xl">Tools I've mastered</h2>
      <div className="w-full space-y-6 relative">
        <div className="z-40 absolute top-0 right-0 bg-linear-to-l h-full w-14 from-background via-background/50 to-transparent" />
        <div className="z-40 absolute top-0 left-0 bg-linear-to-r h-full w-14 from-background via-background/50 to-transparent" />

        <Marquee autoFill pauseOnHover speed={20}>
          <SkillsList stacks={FRONTEND_STACKS} />
        </Marquee>

        <Marquee autoFill pauseOnHover direction="right" speed={20}>
          <SkillsList stacks={BACKEND_STACKS} />
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;

const SkillsList = ({ stacks }: { stacks: stacksProps }) => {
  return (
    <ul className="flex items-center" role="list">
      {Object.keys(stacks).map((stack, index) => {
        const Icon = stacks[stack].Icon;
        const className = stacks[stack].className;
        return (
          <li
            role="listitem"
            key={index}
            className="shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] mr-2 flex w-max items-center gap-2 rounded-sm border border-border bg-muted px-3 py-2 text-base md:text-lg text-foreground"
          >
            {<Icon className={className} aria-label={stack} />}
            <span className="whitespace-nowrap">{stack}</span>
          </li>
        );
      })}
    </ul>
  );
};
