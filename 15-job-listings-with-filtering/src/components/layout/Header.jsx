import bgHeaderMobile from "src/assets/bg-header-mobile.svg";
import bgHeaderDesktop from "src/assets/bg-header-desktop.svg";

export function Header() {
  return (
    <header className="bg-customGreen-400 h-[156px]">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={bgHeaderDesktop}
        />
        <img
          src={bgHeaderMobile}
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
    </header>
  );
}
