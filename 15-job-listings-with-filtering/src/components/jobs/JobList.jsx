import { JobCard } from "src/components/jobs/JobCard";
import data from "src/data/data.json";

export function JobList() {
  return (
    <div className="flex flex-col gap-10">
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
