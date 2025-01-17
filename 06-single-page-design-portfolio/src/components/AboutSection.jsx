export function AboutSection() {
  return (
    <div className="mb-[100px] flex w-full flex-col items-center gap-10 outline outline-1 md:mb-[120px] md:w-[111.88%] md:max-w-[1300px] md:flex-row md:justify-between md:gap-[69px] 1440:w-full 1440:gap-[125px] 1440:mb-[88px]">
      <div className="w-[88%] md:w-[47%] md:max-w-[445px] 1440:w-[40%]">
        <img src="src/assets/image-amy.webp" alt="" />
      </div>
      <div className="flex w-full flex-col items-center gap-6 text-center md:w-[44%] 1440:w-[48%]">
        <h1 className="title-xs md:title-s 1440:title-m">
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
