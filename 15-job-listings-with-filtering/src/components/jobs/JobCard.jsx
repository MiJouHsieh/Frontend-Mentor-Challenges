import { JobTag } from "src/components/jobs/JobTag";
import { FilterTag } from "src/components/filters/FilterTag";


export function JobCard({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages=[],
  tools=[],
}) {
  return (
    <div className="hover:border-customGreen-400 rounded-[5px] border-l-[5px] border-white bg-white px-[21px] shadow-[0_10px_24px_rgba(91,164,164,0.22)]">
      <article className="flex flex-col pb-4">
        <div className="relative">
          <img
            className="absolute -top-6 h-12 w-12"
            src={logo}
            alt={`${company} logo`}
          />
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4">
            <h1 className="text-4 text-customGreen-400">
              {company}
            </h1>
            <div className="flex items-center justify-start gap-2">
              {isNew && <JobTag tag={"new!"} />}
              {featured && <JobTag tag={"featured"} />}
            </div>
          </div>

          <h1 className="text-3-bold text-customGreen-900">
            {position}
          </h1>
          <p className="text-3 text-customGray-400 flex items-center gap-2">
            <span className="relative top-[1px]">{postedAt}</span>
            <span className="text-customGray-300">•</span>
            <span className="relative top-[1px]">{contract}</span>
            <span className="text-customGray-300">•</span>
            <span className="relative top-[1px]">{location}</span>
          </p>
        </div>
        <hr className="bg-customGray-300 my-4 h-[1px]" />
        <div className="flex flex-wrap gap-2 bg-white">
          {languages.map((language) => {
            return <FilterTag key={language} tag={language} />;
          })}
          <FilterTag key={role} tag={role} />
          <FilterTag key={level} tag={level} />
          {tools.map((tool) => {
            return <FilterTag key={tool} tag={tool} />;
          })}
        </div>
      </article>
    </div>
  );
}
