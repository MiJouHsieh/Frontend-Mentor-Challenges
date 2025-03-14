import { useParams } from "react-router-dom";
import { DESTINATION_LIST } from "src/constants";
import { Link } from "react-router-dom";

export function DestinationPage() {
  const { planet } = useParams();
  const data =
    DESTINATION_LIST[planet] || DESTINATION_LIST["moon"];
  const planets = ["MOON", "MARS", "EUROPA", "TITAN"];
  return (
    <section className="relative flex h-full w-full px-6 pt-[112px] md:justify-center md:px-10 md:py-32 md:pt-[136px] 1440:pt-[184px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/destination/background-destination-mobile.jpg')] bg-cover bg-center md:bg-[url('/src/assets/destination/background-destination-tablet.jpg')] 1440:bg-[url('/src/assets/destination/background-destination-desktop.jpg')]" />
      <div className="h-full space-y-6 md:min-w-[688px] 1440:max-w-[1110px]">
        <p className="page-title 1440:title-5 md:text-[20px] md:leading-[24px] md:tracking-[3px]">
          <span className="font-bold opacity-25 1440:tracking-[4.72px]">
            01
          </span>
          <span className="font-normal">
            Pick your destination
          </span>
        </p>

        <div className="flex flex-col 1440:h-[734px] 1440:min-w-[1110px] 1440:flex-row 1440:items-center 1440:justify-center 1440:gap-x-8">
          <div className="mb-8 flex h-[202px] items-center justify-center md:h-[384px] 1440:mb-0 1440:h-full 1440:flex-1">
            <img
              className="h-[150px] w-[150px] md:h-[300px] md:w-[300px] 1440:h-[480px] 1440:w-[480px]"
              src={data.image}
              alt="planet image"
            />
          </div>
          <div className="flex items-center justify-center md:h-[384px] 1440:h-[468px] 1440:flex-1">
            <div className="space-y-6 md:max-w-[512px] 1440:max-w-[445px] 1440:space-y-10">
              <div>
                <ul className="flex h-8 justify-center space-x-8 font-barlowCondensed text-sm font-normal leading-[17px] tracking-[2.1px] text-blue300 1440:justify-start">
                  {planets.map((item) => {
                    return (
                      <li
                        className={`border-blue300 ${item.toLowerCase() === planet ? "border-b-[3px] border-white text-white" : ""}`}
                        key={item}
                      >
                        <Link
                          to={`/destination/${item.toLowerCase()}`}
                        >
                          {item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="space-y-4">
                <h1 className="content-title md:text-[80px] md:leading-[92px] 1440:text-start 1440:text-[96px] 1440:leading-[110px]">
                  {data.planet}
                </h1>
                <p className="mobile-home-description 1440:title-9 w-full md:text-base md:leading-[180%] 1440:text-start">
                  {data.description}
                </p>
              </div>
              <hr className="border-[#979797]" />
              <div className="flex flex-col items-center gap-y-6 text-center uppercase md:flex-row md:justify-between md:gap-0 md:gap-x-6 1440:text-start">
                <div className="space-y-3 md:flex-1">
                  <p className="title-7 text-blue300">
                    Avg. distance
                  </p>
                  <p className="title-6 text-white">
                    {data.distance}
                  </p>
                </div>
                <div className="space-y-3 md:flex-1">
                  <p className="title-7 text-blue300">
                    Est. travel time
                  </p>
                  <p className="title-6 text-white">
                    {data.travelTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
