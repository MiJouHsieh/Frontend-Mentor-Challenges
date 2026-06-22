import veryHappyIcon from "src/assets/icon-very-happy-white.svg?react";
import veryHappyColorIcon from "src/assets/icon-very-happy-color.svg?react";
import happyIcon from "src/assets/icon-happy-white.svg?react";
import happyColorIcon from "src/assets/icon-happy-color.svg?react";
import neutralIcon from "src/assets/icon-neutral-white.svg?react";
import neutralColorIcon from "src/assets/icon-neutral-color.svg?react";
import sadIcon from "src/assets/icon-sad-white.svg?react";
import sadColorIcon from "src/assets/icon-sad-color.svg?react";
import verySadIcon from "src/assets/icon-very-sad-white.svg?react";
import verySadColorIcon from "src/assets/icon-very-sad-color.svg?react";

export const MOOD_OPTIONS = [
  {
    value: 2,
    label: "Very Happy",
    color: "#FFC97C",
    icon: veryHappyIcon,
    colorIcon: veryHappyColorIcon,
  },
  {
    value: 1,
    label: "Happy",
    color: "#89E780",
    icon: happyIcon,
    colorIcon: happyColorIcon,
  },
  {
    value: 0,
    label: "Neutral",
    color: "#89CAFF",
    icon: neutralIcon,
    colorIcon: neutralColorIcon,
  },
  {
    value: -1,
    label: "Sad",
    color: "#B8B1FF",
    icon: sadIcon,
    colorIcon: sadColorIcon,
  },
  {
    value: -2,
    label: "Very Sad",
    color: "#FF8989",
    icon: verySadIcon,
    colorIcon: verySadColorIcon,
  },
];

export function getMoodStyle(moodValue) {
  const value = Number(moodValue);
  return (
    MOOD_OPTIONS.find((mood) => mood.value === value) ??
    MOOD_OPTIONS.find((mood) => mood.value === 0)
  );
}