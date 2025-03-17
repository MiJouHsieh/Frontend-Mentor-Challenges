import capsulePortrait from "src/assets/technology/image-space-capsule-portrait.jpg";
import { Paginator } from "src/components/Paginator";

export function Capsule({ selectedTech, setSelectedTech }) {
  return (
    <>
      <div className="flex h-[258px] w-[375px] items-end justify-center overflow-hidden md:h-[421px] md:w-[768px] 1440:h-[734px] 1440:w-[608px] 1440:items-center">
        <img
          className="h-[376px] w-full object-cover md:w-[768px] 1440:h-[600px]"
          src={capsulePortrait}
          alt="launch vehicle image"
        />
      </div>
      <div className="flex flex-col items-center space-y-10 px-6 outline outline-yellow-300 1440:flex-row 1440:items-start 1440:space-x-16 1440:space-y-0 1440:px-0">
        <Paginator
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
        <div className="flex flex-col items-center md:w-[512px] 1440:w-[491px] 1440:items-start">
          <p className="crew-title 1440:title-4 mb-4 md:text-[16px] md:leading-[28px]">
            The terminology...
          </p>
          <h1 className="crew-name 1440:title-3 mb-4 md:text-[40px] md:leading-[46px] 1440:mb-6">
            Space capsule
          </h1>
          <p className="crew-introduction md:text-[16px] 1440:text-start 1440:text-[18px]">
            {`A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`}
          </p>
        </div>
      </div>
    </>
  );
}
