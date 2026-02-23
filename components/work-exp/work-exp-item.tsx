import React from "react";
import { TWorkExperience } from "./work-data";
import Link from "next/link";

type WorkExperienceItemProps = TWorkExperience & {
  isLast?: boolean;
};

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  company,
  website,
  role,
  description,
  stacks,
  isLast = false,
}) => {
  return (
    <li role="listitem" className="relative pl-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 size-3 rounded-full border-2 border-primary bg-background" />

      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-1.25 top-5 h-[calc(100%+0.5rem)] w-0.5 bg-foreground/20" />
      )}

      <div className="space-y-2">
        <hgroup className="space-y-1">
          <h3 className="ise text-xl md:text-2xl">
            <Link
              href={website}
              aria-label={`visit ${company} website`}
              className="p-0! hover:text-ring!"
            >
              {company}
            </Link>
          </h3>
          <p className="text-base md:text-lg text-foreground/80">{role}</p>
        </hgroup>

        <p className="line-clamp-3">{description}</p>

        <p
          className=" text-sm md:text-base text-foreground/90"
          aria-label="tech stack"
        >
          {stacks.join(" / ")}
        </p>
      </div>
    </li>
  );
};

export default WorkExperienceItem;
