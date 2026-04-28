import { useState } from "react";
import { ProfileCard } from "src/components/ProfileCard";
import { TimeRangeTabs } from "src/components/TimeRangeTabs";
import { TimeCard } from "src/components/TimeCard";

export function TimeDashboard() {
  const [timeRange, setTimeRange] = useState("Daily");

  return (
    <section className="mx-auto flex w-full max-w-[327px] flex-col">
      <div className="bg-navy900 flex flex-col rounded-[15px]">
        <ProfileCard />
        <TimeRangeTabs timeRange={timeRange} setTimeRange={setTimeRange} />
      </div>
      <TimeCard timeRange={timeRange} />
    </section>
  );
}
