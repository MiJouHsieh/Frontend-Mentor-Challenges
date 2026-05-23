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
  languages = [],
  tools = [],
}) {
  return (
    <div className="hover:border-customGreen-400 1440:py-[31px] 1440:px-10 1440:w-full w-[327px] rounded-[5px] border-l-[5px] border-white bg-white pb-3 pl-[16px] pr-[21px] shadow-[0_10px_24px_rgba(91,164,164,0.22)]">
      <article className="1440:flex-row 1440:items-center flex flex-col justify-between">
        <div className="1440:flex 1440:items-center 1440:justify-between gap-6">
          <div className="relative">
            <img
              className="1440:relative 1440:top-0 1440:h-[88px] 1440:w-[88px] absolute -top-6 h-12 w-12"
              src={logo}
              alt={`${company} logo`}
            />
          </div>

          <div className="1440:mt-0 mt-8 flex flex-col gap-2">
            <div className="flex items-center justify-start gap-4">
              <h1 className="text-4 text-customGreen-400 1440:text-2-bold">
                {company}
              </h1>
              <div className="flex items-center justify-start gap-2">
                {isNew && <JobTag tag={"new!"} />}
                {featured && <JobTag tag={"featured"} />}
              </div>
            </div>

            <h1 className="text-3-bold text-customGreen-900 1440:text-1">
              {position}
            </h1>
            <p className="text-3 1440:text-2 text-customGray-400 flex items-center gap-2">
              <span className="relative top-[1px]">
                {postedAt}
              </span>
              <span className="text-customGray-300">•</span>
              <span className="relative top-[1px]">
                {contract}
              </span>
              <span className="text-customGray-300">•</span>
              <span className="relative top-[1px]">
                {location}
              </span>
            </p>
          </div>
        </div>

        <hr className="bg-customGray-300 1440:hidden my-4 h-[1px]" />
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
