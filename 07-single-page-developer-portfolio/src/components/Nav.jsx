import IconGithub from "src/assets/icon-github.svg?react";
import IconFrontendMentor from "src/assets/icon-frontend-mentor.svg?react";
import IconLinkedin from "src/assets/icon-linkedin.svg?react";
import IconTwitter from "src/assets/icon-twitter.svg?react";

export function Nav() {
  return (
    <>
      <h1 className="text-2xl font-bold leading-8 tracking-[-0.33px] md:text-[32px] md:tracking-[-0.44px]">
        adamkeyes
      </h1>
      <div className="flex w-full justify-between  md:w-[192px]">
        <a href="#">
          <IconGithub className="h-5 md:h-[25px]" />
        </a>
        <a href="#">
          <IconFrontendMentor className="h-5 md:h-[25px]" />
        </a>
        <a href="#">
          <IconLinkedin className="h-5 md:h-[25px]" />
        </a>
        <a href="#">
          <IconTwitter className="h-5 md:h-[25px]" />
        </a>
      </div>
    </>
  );
}
// import patternRings from "src/assets/pattern-rings.svg.svg?react";
