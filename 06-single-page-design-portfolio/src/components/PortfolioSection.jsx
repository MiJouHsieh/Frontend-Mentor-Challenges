import ArrowLeft from "src/assets/icon-arrow-left.svg?react";
import ArrowRight from "src/assets/icon-arrow-right.svg?react";
import { PORTFOLIO_LIST } from "src/constant";

export function PortfolioSection() {
  return (
    <section className="mb-[100px] flex w-[calc(100%+32px)] flex-col items-center gap-8 overflow-hidden outline outline-teal-100 md:-mx-8 md:mb-[120px] md:w-[calc(100%+78px)] md:gap-14 1440:mb-[88px]">
      <h1 className="text-2xl font-bold">My Work</h1>

      <div className="flex w-[1410px] gap-[15px] overflow-hidden md:w-[2820px] md:gap-[30px]">
        {PORTFOLIO_LIST.map((item) => {
          return (
            <div
              key={item.id}
              className="h-full w-[72%] object-contain md:w-[70%]"
            >
              <img
                src={item.src}
                alt={`Portfolio item ${item.id}`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-4">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-galacticBlue">
          <ArrowLeft />
        </button>
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-galacticBlue">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
