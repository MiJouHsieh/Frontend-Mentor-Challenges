import ArrowLeft from "src/assets/icon-arrow-left.svg?react";
import ArrowRight from "src/assets/icon-arrow-right.svg?react";
import { PORTFOLIO_LIST } from "src/constant";
import { useState } from "react";

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const TOTAL_IMAGES = PORTFOLIO_LIST.length;

  const handleClickPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + TOTAL_IMAGES) % TOTAL_IMAGES,
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TOTAL_IMAGES);
  };
  const baseTranslateX = currentIndex * 280; // for mobile (270 + 10)
  const mdTranslateX = currentIndex * 500; // for tablet (540 + 20)
  return (
    <section className="absolute left-1/2 mb-[100px] flex h-[338px] w-[calc(100%+32px)] -translate-x-1/2 flex-col items-start gap-8 overflow-hidden md:h-[576px] md:w-[calc(100%+78px)] 1440:w-[1440px]">
      <h1 className="w-full overflow-hidden text-center text-2xl font-bold">
        My Work
      </h1>
      <div className="flex h-[180px] w-[1410px] justify-center overflow-hidden md:h-[360px] md:w-[2820px]">
        <div
          className={`md:w-width-tablet w-width-mobile flex justify-between gap-[15px] overflow-hidden transition-transform duration-300 md:gap-[30px]`}
          style={{
            // transform: `translateX(-${currentIndex * (270 + 10)}px)`,
            transform: `translateX(-${window.innerWidth >= 768 ? mdTranslateX : baseTranslateX}px)`,
          }}
        >
          {PORTFOLIO_LIST.map((item, index) => (
            <div
              key={index}
              className={`w-[270px] md:w-[540px] ${index === 0 && "ml-9 md:ml-[300px]"}`}
            >
              <img
                src={item.src}
                alt={`Portfolio item ${item.id}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center gap-4">
        <button
          onClick={handleClickPrevious}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-galacticBlue"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={handleClickNext}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-black hover:bg-galacticBlue"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
