import { SummaryCard } from "src/features/home/components/SummaryCard";

export function SummaryCards() {
  return (
    <div className="flex flex-col gap-6 px-4 py-5 border border-moodBlue bg-moodNeutral-100 text-moodNeutral-900 rounded-2xl">
      <SummaryCard
        type="Mood"
        title="Keep tracking!"
        info="Log 5 check-ins to see your average mood."
      />
      <SummaryCard
        type="Sleep"
        title="Not enough data yet!"
        info="Track 5 nights to view average sleep."
      />
    </div>
  );
}
