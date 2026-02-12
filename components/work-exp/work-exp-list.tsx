import { TWorkExperience } from "./work-data";
import WorkExperienceItem from "./work-exp-item";

type WorkExperienceListProps = {
  experiences: TWorkExperience[];
};

const WorkExperienceList = ({ experiences }: WorkExperienceListProps) => {
  return (
    <section
      aria-label="work experience"
      className="mt-6 mb-6 space-y-6 w-full px-4 sm:px-8 md:px-0"
    >
      <h2 className="ise text-3xl md:text-4xl">Work Experience</h2>

      <div className="mt-8!">
        <ol className="space-y-6" role="list">
          {experiences.map((experience, index) => (
            <WorkExperienceItem
              key={experience.id}
              {...experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorkExperienceList;
