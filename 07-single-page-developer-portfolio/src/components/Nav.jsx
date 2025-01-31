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
      <div className="flex w-full justify-between md:w-[192px]">
        <a href="#">
          <IconGithub className="iconStyle" />
        </a>
        <a href="#">
          <IconFrontendMentor className="iconStyle" />
        </a>
        <a href="#">
          <IconLinkedin className="iconStyle" />
        </a>
        <a href="#">
          <IconTwitter className="iconStyle" />
        </a>
      </div>
    </>
  );
}
