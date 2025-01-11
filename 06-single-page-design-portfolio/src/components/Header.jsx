import { twMerge } from "tw-merge";
import Logo from "src/assets/logo.svg?react";

export function Header() {
  return (
    <header className="flex justify-between items-center mb-8 outline outline-red-100">
      <a href="#">
        <Logo className={twMerge(`h-12 w-12`)} />
      </a>
      <button className="bg-black w-44 h-11 text-white rounded-full hover:bg-galacticBlue font-bold text-sm">
        Free Consultation
      </button>
    </header>
  );
}
