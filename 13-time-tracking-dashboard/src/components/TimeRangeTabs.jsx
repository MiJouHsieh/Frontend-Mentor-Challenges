const TIME_RANGES = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
];

export function TimeRangeTabs({ timeRange, setTimeRange }) {
  return (
    <nav aria-label="Time range">
      <ul className="text-purple500 text-5-regular flex py-6 md:py-[27px] lg:flex-col lg:items-start lg:gap-[21px] lg:p-8">
        {TIME_RANGES.map((range) => {
          return (
            <li key={range.value} className="flex-1 lg:flex-none">
              <button
                type="button"
                className={`w-full text-center hover:text-white lg:text-left ${
                  timeRange === range.value ? "text-white" : ""
                }`}
                onClick={() => setTimeRange(range.value)}
                aria-pressed={timeRange === range.value}
              >
                {range.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
