import { JobCard } from "src/components/jobs/JobCard";

export function JobList() {
  return (
    <div className="flex flex-col gap-10">
      <JobCard />
      <JobCard />
    </div>
  );
}
