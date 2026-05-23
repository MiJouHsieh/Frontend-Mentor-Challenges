import { JobCard } from "src/components/jobs/JobCard";
import data from "src/data/data.json";

export function JobList() {
  return (
    <div className="1440:gap-y-6 1440:flex-col 1440:w-[1110px] mx-auto flex w-full flex-wrap justify-center gap-10 md:w-[670px] md:gap-x-4">
      {data.map((card) => {
        return (
          <JobCard
            key={card.id}
            company={card.company}
            logo={card.logo}
            new={card.new}
            featured={card.featured}
            position={card.position}
            role={card.role}
            level={card.level}
            postedAt={card.postedAt}
            contract={card.contract}
            location={card.location}
            languages={card.languages}
            tools={card.tools}
          />
        );
      })}
    </div>
  );
}
