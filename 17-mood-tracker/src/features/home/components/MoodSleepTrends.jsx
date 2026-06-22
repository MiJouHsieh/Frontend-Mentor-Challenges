import { useRef, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
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

function FixedSleepYAxis() {
  const chartHeight = 312;
  const xAxisHeight = 32;
  const plotHeight = chartHeight - xAxisHeight;

  const getY = (value) => ((5 - value) / 5) * plotHeight;

  return (
    <svg
      width="68"
      height={chartHeight}
      style={{ overflow: "visible" }}
    >
      {[5, 4, 3, 2, 1].map((level) => (
        <g key={level} transform={`translate(0, ${getY(level)})`}>
          <SleepIcon x={0} y={-5} width={10} height={10} />

          <text
            x={14}
            y={0}
            textAnchor="start"
            dominantBaseline="middle"
            fill="#57577B"
            fontSize={10}
          >
            {SLEEP_LABELS[level]}
          </text>
        </g>
      ))}
    </svg>
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
  const MoodColorIcon = mood.colorIcon; //mood.colorIcon 是 React component，不是文字，所以要先取出來

  return (
    <div className="customTooltipShadow pointer-events-none flex max-h-[232px] w-[175px] flex-col gap-3 overflow-hidden rounded-[10px] border border-moodBlue-100 bg-white p-3">
      <div>
        <p className="mb-2 text-preset-8 text-moodNeutral-600">
          Mood
        </p>
        <div className="flex h-[21px] items-center gap-[6px]">
          <span>
            <MoodColorIcon width={16} height={16} />
          </span>
          <span className="text-preset-7 text-moodNeutral-900">
            {mood.label}
          </span>
        </div>
      </div>
      <div>
        <p className="text-preset-8 mb-[6px] text-moodNeutral-600">
          Sleep
        </p>
        <p className="text-preset-7 text-moodNeutral-900">
          {SLEEP_LABELS[data.sleepLevel]}
        </p>
      </div>
      <div>
        <p className="text-preset-8 mb-[6px] text-moodNeutral-600">
          Reflection
        </p>
        <p className="text-preset-9 max-h-[40px] overflow-hidden text-moodNeutral-900">
          {data.journalEntry}
        </p>
      </div>
      <div>
        <p className="text-preset-8 mb-[6px] text-moodNeutral-600">
          Tags
        </p>
        <p className="text-preset-9 text-moodNeutral-900">
          {data.feelings}
        </p>
      </div>
    </div>
  );
}

export function MoodSleepTrends() {
  const scrollAreaRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] =
    useState(undefined);

  function handleTooltipPosition(state) {
    const scrollArea = scrollAreaRef.current;
    const coordinate = state?.activeCoordinate;

    if (!scrollArea || !coordinate) return;

    const tooltipWidth = 175;
    const gap = 12;

    const visibleLeft = scrollArea.scrollLeft;
    const visibleRight = visibleLeft + scrollArea.clientWidth;

    const rightX = coordinate.x + gap;
    const leftX = coordinate.x - tooltipWidth - gap;

    const x =
      rightX + tooltipWidth <= visibleRight
        ? rightX
        : Math.max(visibleLeft + 4, leftX);

    setTooltipPosition({
      x,
      y: 0,
    });
  }

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

  const fixedYAxisChartWidth = 68;
  const yAxisGap = 16;

  const barWidth = 40;
  const barGap = 16;

  const chartBodyWidth = Math.max(
    chartData.length * (barWidth + barGap),
    311 - fixedYAxisChartWidth - yAxisGap,
  );

  return (
    <section className="px-4 py-5 mt-8 rounded-2xl bg-moodNeutral-0">
      <h2 className="mb-8 text-preset-3-mobile">
        Mood and sleep trends
      </h2>

      <div className="flex h-[312px] w-full">
        {/* 固定的 Y 軸 */}
        <div
          className="overflow-visible shrink-0"
          style={{ width: `${fixedYAxisChartWidth}px` }}
        >
          <FixedSleepYAxis />
        </div>

        {/* 可水平滑動的圖表本體 */}
        <div
          className="flex-1 h-full pb-3 ml-4 overflow-x-auto overflow-y-hidden chart-scroll scroll trend-scroll-area"
          ref={scrollAreaRef}
        >
          <div
            style={{
              width: `${chartBodyWidth}px`,
              height: "100%",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                barCategoryGap={24}
                //自動調整顯示位置
                onMouseMove={handleTooltipPosition}
                onMouseLeave={() => setTooltipPosition(undefined)}
              >
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
                  hide
                  type="number"
                  domain={[0, 5]}
                  ticks={[1, 2, 3, 4, 5]}
                  width={0}
                />

                {[1, 2, 3, 4, 5].map((level) => (
                  <ReferenceLine
                    key={level}
                    y={level}
                    stroke="#E0E6FA"
                    strokeDasharray=""
                    zIndex={0} //在bar後面
                  />
                ))}

                <Tooltip
                  cursor={false}
                  content={<CustomTooltip />}
                  //自動調整顯示位置
                  position={tooltipPosition}
                  allowEscapeViewBox={{ x: true, y: true }}
                  wrapperStyle={{
                    zIndex: 50,
                    pointerEvents: "none",
                  }}
                />

                <Bar
                  dataKey="sleepLevel"
                  barSize={40}
                  shape={<MoodBar />}
                  isAnimationActive={false}
                  activeBar={false}
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
      </div>
    </section>
  );
}
