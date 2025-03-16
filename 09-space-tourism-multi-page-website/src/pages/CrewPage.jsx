import { useParams } from "react-router-dom";
import { CREW_LIST } from "src/constants";
import { Link } from "react-router-dom";

export function CrewPage() {
  const { position } = useParams();
  const data = CREW_LIST[position] || CREW_LIST["commander"];
  const crews = ["commander", "specialist", "pilot", "engineer"];

  return (
    <section className="relative flex h-full w-full justify-center px-6 pt-[112px] md:px-10 md:pt-[136px] 1440:pt-[184px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/crew/background-crew-mobile.jpg')] bg-cover bg-center md:bg-[url('/src/assets/crew/background-crew-tablet.jpg')] 1440:bg-[url('/src/assets/crew/background-crew-desktop.jpg')]" />
      <div className="h-full w-full space-y-6 outline outline-red-400 md:min-w-[688px] 1440:max-w-[1110px]">
        <p className="page-title 1440:title-5 w-full outline md:text-[20px] md:leading-[24px] md:tracking-[3px]">
          <span className="font-bold opacity-25 1440:tracking-[4.72px]">
            02
          </span>
          <span className="font-normal">Meet your crew</span>
        </p>
        <div className="flex flex-col items-center space-y-8 1440:flex-row 1440:items-center 1440:space-x-8 1440:space-y-0">
          <div className="flex h-[319px] flex-col items-center pt-10 outline outline-teal-500 md:max-w-[512px] 1440:h-[734px] 1440:max-w-none 1440:flex-1 1440:space-y-10 1440:pt-0">
            <div className="flex flex-col items-center 1440:flex-1 1440:justify-center">
              <p className="crew-title 1440:title-4 mb-2 md:mb-4 md:text-[24px] md:leading-[28px]">
                {data.title}
              </p>
              <h1 className="crew-name 1440:title-3 md:text-[40px] md:leading-[46px]">
                {data.name}
              </h1>
              <p className="crew-introduction md:text-[16px] 1440:mb-0 1440:text-start 1440:text-[18px]">
                {data.introduction}
              </p>
            </div>
            <div className="w-full 1440:pb-12">
              <ul className="flex justify-center space-x-4 1440:justify-start 1440:space-x-10">
                {crews.map((item) => {
                  return (
                    <Link
                      to={`/crew/${item.toLowerCase()}`}
                      key={item}
                    >
                      <li
                        className={`h-2.5 w-2.5 cursor-pointer rounded-full bg-white 1440:h-[15px] 1440:w-[15px] ${item.toLowerCase() === position ? "" : "opacity-20"} `}
                        key={item}
                      ></li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative flex h-[350px] w-full items-center justify-center outline outline-teal-500 md:h-auto md:items-start 1440:h-[734px] 1440:flex-1 1440:items-center">
            <img
              className="h-[340px] w-[271px] object-contain outline md:h-[560px] md:w-[446.7px] 1440:h-[676px] 1440:w-[540px]"
              src={data.image}
              alt="crew image"
            />
            <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/100 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
