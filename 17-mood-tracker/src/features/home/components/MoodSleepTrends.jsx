import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { MOOD_OPTIONS } from "src/constants/moodOptions.js";
import moodData from "src/data/moodEntries.json";
import SleepIcon from "src/assets/icon-sleep.svg?react";

const SLEEP_LABELS = {
  1: "0-2 hours",
  2: "3-4 hours",
  3: "5-6 hours",
  4: "7-8 hours",
  5: "9+ hours",
};

function getSleepLevel(hours) {
  if (hours >= 9) return 5;
  if (hours >= 7) return 4;
  if (hours >= 5) return 3;
  if (hours >= 3) return 2;
  return 1;
}

function getMoodStyle(mood) {
  return (
    MOOD_OPTIONS.find((option) => option.value === Number(mood)) ??
    MOOD_OPTIONS.find((option) => option.value === 0)
  );
}

function DateXAxisTick({ x, y, payload }) {
  const [month, day] = String(payload.value).split("\n");

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fill="#57577B"
      fontSize={12}
    >
      <tspan x={x} dy="0">
        {month}
      </tspan>
      <tspan
        x={x}
        dy="14"
        fontWeight="600"
        fill="#21214D"
        fontSize={13}
      >
        {day}
      </tspan>
    </text>
  );
}

function SleepYAxisTick({ x, y, payload }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <SleepIcon x={-60} y={-7} width={10} height={10} />
      <text
        x={-45}
        y={4}
        fill="#57577A"
        fontSize={12}
        textAnchor="start"
      >
        {SLEEP_LABELS[payload.value]}
      </text>
    </g>
  );
}

function MoodBar({ x, y, width, height, payload }) {
  const mood = getMoodStyle(payload.mood);
  const radius = Math.min(width / 2, height / 2);

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={mood.color}
      style={{ cursor: "pointer" }}
    />
  );
}

function MoodEmojiLabel({ x, y, width, value }) {
  const mood = getMoodStyle(value);
  const MoodIcon = mood.icon;
  const cx = x + width / 2;
  const cy = y + 18;

  return (
    <g style={{ cursor: "pointer" }}>
      <circle cx={cx} cy={cy} r={15} fill={mood.color} />
      <MoodIcon x={cx - 15} y={cy - 13} width={30} height={30} />
    </g>
  );
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload;
  const mood = getMoodStyle(data.mood);

  return (
    <div className="flex flex-col gap-3 rounded-[10px] border border-moodBlue-100 w-max-[175px] h-max-[219px] bg-white p-3 shadow">
      <div>
        <p className="mb-2 text-preset-8 text-moodNeutral-600">
          Mood
        </p>
        <p className="mb-2 text-preset-7 text-moodNeutral-900">
          {mood.label}
        </p>
      </div>
      <div>
        <p className="text-preset-8 mb-[6px] text-moodNeutral-600">
          Sleep
        </p>
        <p className="mb-2 text-preset-7 text-moodNeutral-900">
          {SLEEP_LABELS[data.sleepLevel]}
        </p>
      </div>
      <div>
        <p className="text-preset-8 mb-[6px] text-moodNeutral-600">
          Reflection
        </p>
        <p className="mb-2 text-preset-7 text-moodNeutral-900">
          {data.journalEntry}
        </p>
      </div>
      <div>
        <p className="text-preset-8 mb-[6px] text-moodNeutral-600">
          Tags
        </p>
        <p className="mb-2 text-preset-7 text-moodNeutral-900">
          {data.feelings}
        </p>
      </div>
    </div>
  );
}

export function MoodSleepTrends() {
  const chartData = moodData.moodEntries.map((entry) => {
    const date = new Date(entry.createdAt);
    const month = date.toLocaleDateString("en-US", {
      month: "long",
    });

    const day = date.toLocaleDateString("en-US", {
      day: "2-digit",
    });

    return {
      dateLabel: `${month}\n${day}`,
      fullDate: `${month} ${day}`,
      sleepHours: entry.sleepHours,
      sleepLevel: getSleepLevel(entry.sleepHours),
      mood: entry.mood,
      feelings: entry.feelings.join(", "),
      journalEntry: entry.journalEntry,
    };
  });

  const chartWidth = Math.max(chartData.length * 64 + 80, 311);

  return (
    <section className="px-4 py-5 mt-8 rounded-2xl bg-moodNeutral-0">
      <h2 className="mb-8 text-preset-3-mobile">
        Mood and sleep trends
      </h2>

      <div className="chart-scroll h-[312px] w-full overflow-x-auto overflow-y-hidden">
        <div style={{ width: `${chartWidth}px`, height: "100%" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 0,
                right: 16,
                bottom: 0,
                left: 0,
              }}
              barCategoryGap={24}
            >
              <CartesianGrid
                vertical={false}
                horizontal={true}
                strokeDasharray=""
                stroke="#E0E6FA"
              />
              <XAxis
                dataKey="dateLabel"
                interval={0}
                tick={<DateXAxisTick />}
                tickLine={false}
                tickMargin={12}
                axisLine={false}
                height={32}
              />
              <YAxis
                type="number"
                domain={[0, 5]}
                ticks={[1, 2, 3, 4, 5]}
                tick={<SleepYAxisTick />}
                tickLine={false}
                tickMargin={8}
                axisLine={false}
                width={76}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
              />
              <Bar
                dataKey="sleepLevel"
                barSize={40}
                shape={<MoodBar />}
                isAnimationActive={false}
              >
                <LabelList
                  dataKey="mood"
                  content={<MoodEmojiLabel />}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
