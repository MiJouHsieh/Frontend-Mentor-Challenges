import veryHappyIcon from "src/assets/icon-very-happy-white.svg?react";
import happyIcon from "src/assets/icon-happy-white.svg?react";
import neutralIcon from "src/assets/icon-neutral-white.svg?react";
import sadIcon from "src/assets/icon-sad-white.svg?react";
import verySadIcon from "src/assets/icon-very-sad-white.svg?react";

export const MOOD_OPTIONS = [
  {
    value: 2,
    label: "Very Happy",
    color: "#FFC97C",
    icon: veryHappyIcon,
  },
  {
    value: 1,
    label: "Happy",
    color: "#89E780",
    icon: happyIcon,
  },
  {
    value: 0,
    label: "Neutral",
    color: "#89CAFF",
    icon: neutralIcon,
  },
  {
    value: -1,
    label: "Sad",
    color: "#B8B1FF",
    icon: sadIcon,
  },
  {
    value: -2,
    label: "Very Sad",
    color: "#FF8989",
    icon: verySadIcon,
  },
];

export function getMoodStyle(moodValue) {
  const value = Number(moodValue);
  return (
    MOOD_OPTIONS.find((mood) => mood.value === value) ??
    MOOD_OPTIONS.find((mood) => mood.value === 0)
  );
}