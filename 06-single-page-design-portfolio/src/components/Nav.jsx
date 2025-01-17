import { twMerge } from "tw-merge";
import Logo from "src/assets/logo.svg?react";

export function Nav() {
  return (
    <header className="mb-8 flex w-full items-center justify-between md:mb-16 1440:mb-[66px]">
      <a href="#">
        <Logo className={twMerge(`h-12 w-12 md:h-16 md:w-16`)} />
      </a>
      <button className="h-11 w-44 rounded-full bg-black text-sm font-bold text-white hover:bg-galacticBlue md:h-14 md:w-[228px]">
        Free Consultation
      </button>
    </header>
  );
}
