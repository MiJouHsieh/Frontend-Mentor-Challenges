import { JobList } from "src/components/jobs/JobList";

export function JobListSection() {
  return (
    <section className="bg-customGreen-50 mx-auto px-6 pb-8 pt-14 md:max-w-[1110px] md:px-0">
      <JobList />
    </section>
  );
}
