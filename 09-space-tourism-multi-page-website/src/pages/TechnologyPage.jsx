import launchVehiclePortrait from "src/assets/technology/image-launch-vehicle-portrait.jpg";

const pages = [1, 2, 3];
const currentPage = 1

export function TechnologyPage() {
  return (
    <section className="relative flex h-full w-full justify-center 1440:justify-end pb-12 pt-[112px] md:pb-10 md:pt-[136px] 1440:pt-[184px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] 1440:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]" />
      <div className="h-full w-full space-y-6 outline outline-red-400 md:min-w-[688px] 1440:max-w-[1257px]">
        <p className="page-title 1440:title-5 w-full outline md:px-10 md:text-[20px] md:leading-[24px] md:tracking-[3px] 1440:px-0">
          <span className="font-bold opacity-25 1440:tracking-[4.72px]">
            03
          </span>
          <span className="font-normal">SPACE LAUNCH 101</span>
        </p>
        <div className="flex flex-col items-center space-y-8 pt-16 outline outline-blue-600 1440:flex-row-reverse 1440:gap-x-8 1440:space-y-0">
          <div className="flex h-[258px] w-[375px] items-end justify-center overflow-hidden md:h-[421px] md:w-[768px] 1440:h-[734px] 1440:w-[608px] 1440:items-center">
            <img
              className="h-[376px] w-full object-cover md:w-[768px] 1440:h-[600px]"
              src={launchVehiclePortrait}
              alt="launch vehicle image"
            />
          </div>
          <div className="flex flex-col items-center space-y-10 px-6 1440:flex-row 1440:items-start 1440:space-x-16 1440:space-y-0 1440:px-0 outline outline-yellow-300">
            <ul className="flex space-x-4 1440:flex-col 1440:space-x-0 1440:space-y-8">
              {pages.map((page) => {
                return (
                  <li
                    className={`1440:title-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full font-bellefair text-[18px] font-normal leading-[21px] md:h-14 md:w-14 md:text-[24px] md:leading-[28px] 1440:h-20 1440:w-20 ${page === currentPage ? "bg-white" : "border border-[rgba(255,255,255,0.25)] bg-transparent"}`}
                    key={page}
                  >
                    <span
                      className={`${page === currentPage ? "text-blue900" : "text-white"}`}
                    >
                      {page}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col items-center md:w-[512px] 1440:w-[491px] 1440:items-start">
              <p className="crew-title 1440:title-4 mb-4 md:text-[16px] md:leading-[28px]">
                The terminology...
              </p>
              <h1 className="crew-name 1440:title-3 mb-4 1440:mb-6 md:text-[40px] md:leading-[46px]">
                Launch vehicle
              </h1>
              <p className="crew-introduction md:text-[16px] 1440:text-start 1440:text-[18px]">
                {`A launch vehicle or carrier rocket is a
                rocket-propelled vehicle used to carry a payload
                from Earth's surface to space, usually to Earth
                orbit or beyond. Our WEB-X carrier rocket is the
                most powerful in operation. Standing 150 metres
                tall, it's quite an awe-inspiring sight on the
                launch pad!`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
