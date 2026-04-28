const TIME_RANGES = ["Daily", "Weekly", "Monthly"];

export function TimeRangeTabs({ timeRange, setTimeRange }) {
  return (
    <nav aria-label="Time range" className="h-full">
      <ul className="text-purple500 text-5-regular flex py-6">
        {TIME_RANGES.map((range) => {
          return (
            <li key={range} className="flex-1">
              <button
                type="button"
                className={`w-full text-center ${
                  timeRange === range
                    ? "text-white"
                    : ""
                }`}
                onClick={() => setTimeRange(range)}
                aria-pressed={timeRange === range}
              >
                {range}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
