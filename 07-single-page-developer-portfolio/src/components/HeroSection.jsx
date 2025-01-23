import authorImageMobile from "src/assets/image-profile-mobile.png";
import authorImageTablet from "src/assets/image-profile-tablet.webp";
import authorImageDesktop from "src/assets/image-profile-desktop.webp";

export function HeroSection() {
  return (
    <div className="relative flex w-full flex-col items-center gap-y-10 bg-red-500 md:absolute md:top-0 md:flex-row-reverse">
      <div className="max-h-[500px] w-[46.4%] overflow-hidden md:h-[600px] md:max-h-none md:w-[42%] 1440:h-[720px] 1440:w-[40%]">
        <img
          className="h-full w-full object-cover"
          src={authorImageMobile}
          srcSet={`${authorImageMobile} 768w, ${authorImageTablet} 1440w, ${authorImageDesktop} 1920w`}
          sizes="(max-width: 768px) 46.4vw, (max-width: 1440px) 42vw, 40vw"
          alt="author image"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-y-6 outline outline-orange-300 md:absolute md:bottom-0 md:left-0 md:ml-8 md:w-[58%] md:items-start md:gap-y-0 1440:bottom-[115px] 1440:ml-0 1440:w-[63.6%]">
        <h1 className="md:md-title 1440:title-xl text-center text-[40px] font-bold leading-10 tracking-[-1.14px] md:mb-[60px] 1440:mb-[43px]">
          <span className="md:block 900:inline">Nice to</span> meet
          you! I’m Adam Keyes.
        </h1>
        <p className="md:body-medium max-w-[70%] text-center text-base font-medium leading-[26px] md:mb-[34px] md:max-w-none md:text-start 1440:mb-[66px] 1440:w-[63%]">
          Based in the UK, I’m a front-end developer passionate
          about building accessible web apps that users love.
        </p>
        <button className="text-center text-base font-bold leading-[26px] tracking-[2.29px] hover:text-green">
          CONTACT ME
        </button>
      </div>
    </div>
  );
}
