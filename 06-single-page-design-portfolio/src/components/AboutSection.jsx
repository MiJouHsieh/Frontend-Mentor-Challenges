export function AboutSection() {
  return (
    <div className="md:flex-center flex w-full flex-col items-center gap-10 overflow-hidden outline outline-1 md:w-[772px] md:flex-row md:justify-between md:gap-[69px]">
      <div className="w-[88%] md:w-[42%]">
        <img src="src/assets/image-amy.webp" alt="" />
      </div>
      <div className="flex w-full flex-col items-center gap-6 text-center md:w-[43%]">
        <h1 className="md:title-s title-xs 1440:title-m">
          I’m Amy, and I’d love to work on your next project
        </h1>
        <p className="md:body-medium text-base font-medium leading-[26px] text-gray">
          I love working with others to create beautiful design
          solutions. I’ve designed everything from brand
          illustrations to complete mobile apps. I’m also handy
          with a camera!
        </p>
        <button className="mobile-btn md:md-btn rounded-full bg-lightRed hover:bg-summerYellow">
          Free Consultation
        </button>
      </div>
    </div>
  );
}
