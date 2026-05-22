import { JobTag } from "src/components/jobs/JobTag";
import { FilterTag } from "src/components/filters/FilterTag";

import myhome from "src/assets/myhome.svg";

export function JobCard() {
  return (
    <div className="hover:border-customGreen-400 rounded-[5px] border-l-[5px] border-white bg-white px-[21px] shadow-[0_10px_24px_rgba(91,164,164,0.22)]">
      <article className="flex flex-col pb-4">
        <div className="relative">
          <img
            className="absolute -top-6 h-12 w-12"
            src={myhome}
            alt=""
          />
        </div>

        <div className="mt-8 flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4">
            <h1 className="text-4 text-customGreen-400">MyHome</h1>
            <div className="flex items-center justify-start gap-2">
              <JobTag tag={"new!"} />
              <JobTag tag={"featured"} />
            </div>
          </div>

          <h1 className="text-3-bold text-customGreen-900">
            Junior Frontend Developer
          </h1>
          <p className="text-3 text-customGray-400 flex items-center gap-2">
            <span className="relative top-[1px]">5d ago</span>
            <span className="text-customGray-300">•</span>
            <span className="relative top-[1px]">5d ago</span>
            <span className="text-customGray-300">•</span>
            <span className="relative top-[1px]">USA only</span>
          </p>
        </div>
        <hr className="bg-customGray-300 my-4 h-[1px]" />
        <div className="flex flex-wrap gap-2 bg-white">
          <FilterTag tag={"Frontend"} />
          <FilterTag tag={"Senior"} />
          <FilterTag tag={"HTML"} />
          <FilterTag tag={"CSS"} />
          <FilterTag tag={"JavaScript"} />
        </div>
      </article>
    </div>
  );
}
