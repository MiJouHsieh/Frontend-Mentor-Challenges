import { useState } from "react";
import { ProfileCard } from "src/components/ProfileCard";
import { TimeRangeTabs } from "src/components/TimeRangeTabs";
import { TimeCard } from "src/components/TimeCard";
import { activityConfig } from "src/constants/activityConfig";
import data from "src/data/data.json";

export function TimeDashboard() {
  const [timeRange, setTimeRange] = useState("daily");

  return (
    <section className="mx-auto flex w-full min-w-[327px] max-w-[327px] flex-col gap-6 md:max-w-[612px] lg:max-w-[1116px] lg:flex-row lg:gap-8">
      <div className="bg-navy900 flex flex-col rounded-[15px] lg:w-[255px]">
        <ProfileCard />
        <TimeRangeTabs
          timeRange={timeRange}
          setTimeRange={setTimeRange}
        />
      </div>

      <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {data.map((activity) => {
          const config = activityConfig[activity.title];
          const timeframe = activity.timeframes[timeRange];

          return (
            <TimeCard
              key={activity.title}
              title={activity.title}
              current={timeframe.current}
              previous={timeframe.previous}
              colorClass={config.colorClass}
              Icon={config.Icon}
            />
          );
        })}
      </div>
    </section>
  );
}
