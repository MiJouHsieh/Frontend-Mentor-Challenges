import { JobList } from "src/components/jobs/JobList";

export function JobListSection({ jobs, onFilterClick }) {
  return (
    <section className="1440:mt-[76px] mx-auto mb-8 mt-14 w-full h-full">
      <JobList jobs={jobs} onFilterClick={onFilterClick} />
    </section>
  );
}
