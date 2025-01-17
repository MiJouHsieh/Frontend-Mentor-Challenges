import ArrowLeft from "src/assets/icon-arrow-left.svg?react";
import ArrowRight from "src/assets/icon-arrow-right.svg?react";
import { PORTFOLIO_LIST } from "src/constant";

export function PortfolioSection() {
  return (
    <div className="mb-[100px] flex w-full flex-col items-center gap-8 outline outline-teal-100 md:mb-[120px] 1440:mb-[88px]">
      <h1 className="text-2xl font-bold">My Work</h1>
      <div className="w-[108%] overflow-hidden">
        <ul className="flex h-[180px] w-[1410px] justify-center gap-[15px]">
          {PORTFOLIO_LIST.map((item) => {
            return (
              <li
                key={item.id}
                className="h-full w-[72%] object-contain md:w-[70%]"
              >
                <img src={item.src} alt="item image" />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-4 outline outline-1">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
          <ArrowLeft />
        </button>
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
