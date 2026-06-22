import { SummaryCards } from "src/features/home/components/SummaryCards";
import { MoodSleepTrends } from "src/features/home/components/MoodSleepTrends";

export function DashboardSection() {
  return (
    <div className="mt-16">
      <SummaryCards />
      <MoodSleepTrends />
    </div>
  );
}
