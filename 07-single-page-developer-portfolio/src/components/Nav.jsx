import IconGithub from "src/assets/icon-github.svg?react";
import IconFrontendMentor from "src/assets/icon-frontend-mentor.svg?react";
import IconLinkedin from "src/assets/icon-linkedin.svg?react";
import IconTwitter from "src/assets/icon-twitter.svg?react";

export function Nav() {
  return (
    <div className="absolute left-1/2 top-5 z-10 flex w-[154px] -translate-x-1/2 transform flex-col items-center gap-y-5 outline outline-orange-300 md:w-full md:flex-row md:justify-between md:px-8 1440:top-[39px]">
      <h1 className="text-2xl font-bold leading-8 tracking-[-0.33px] md:text-[32px] md:tracking-[-0.44px]">
        adamkeyes
      </h1>
      <div className="flex w-full justify-between outline outline-red-400 md:w-[192px]">
        <a href="#">
          <IconGithub className="h-5 md:h-[32px]" />
        </a>
        <a href="#">
          <IconFrontendMentor className="h-5 md:h-[32px]" />
        </a>
        <a href="#">
          <IconLinkedin className="h-5 md:h-[32px]" />
        </a>
        <a href="#">
          <IconTwitter className="h-5 md:h-[32px]" />
        </a>
      </div>
    </div>
  );
}