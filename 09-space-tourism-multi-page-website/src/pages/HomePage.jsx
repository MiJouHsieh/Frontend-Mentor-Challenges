import { Link } from "react-router-dom";
import { ExploreButton } from "src/components/ExploreButton";
export function HomePage() {
  return (
    <div className="relative flex h-screen w-full p-6 pt-[112px] md:px-10 md:py-32 md:pt-[224px] 1440:items-end 1440:justify-center">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/home/background-home-mobile.jpg')] bg-cover bg-center md:bg-[url('/src/assets/home/background-home-tablet.jpg')] 1440:bg-[url('/src/assets/home/background-home-desktop.jpg')]" />
      <div className="flex w-full flex-col items-center md:h-[676px] md:justify-between 1440:h-[343px] 1440:max-w-[1110px] 1440:flex-row 1440:items-center 1440:justify-between">
        <div className="space-y-6 md:max-w-[512px] 1440:max-w-[540px]">
          <p className="mobile-home-subtitle md:title-5 1440:text-start">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="mobile-home-title md:tablet-home-title 1440:text-start">
            SPACE
          </h1>
          <p className="mobile-home-description 1440:title-9 w-full md:text-base md:leading-[180%] 1440:text-start">
            Let’s face it; if you want to go to space, you might as
            well genuinely go to outer space and not hover kind of
            on the edge of it. Well sit back, and relax because
            we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div className="flex h-[382px] w-full items-center justify-center md:h-[272px] 1440:justify-end">
          <Link to="/destination">
            <ExploreButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
