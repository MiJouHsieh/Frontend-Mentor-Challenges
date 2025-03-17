import { LaunchVehicle } from "src/components/LaunchVehicle";
import { Spaceport } from "src/components/Spaceport";
import { Capsule } from "src/components/Capsule";
import { useState } from "react";

export function TechnologyPage() {
const [selectedTech, setSelectedTech] = useState("launch-vehicle");

  return (
    <section className="relative flex h-full w-full justify-center pb-12 pt-[112px] md:pb-10 md:pt-[136px] 1440:justify-end 1440:pt-[184px]">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[url('/src/assets/technology/background-technology-mobile.jpg')] bg-cover bg-center md:bg-[url('/src/assets/technology/background-technology-tablet.jpg')] 1440:bg-[url('/src/assets/technology/background-technology-desktop.jpg')]" />
      <div className="h-full w-full space-y-6 outline outline-red-400 md:min-w-[688px] 1440:max-w-[1257px]">
        <p className="page-title 1440:title-5 w-full outline md:px-10 md:text-[20px] md:leading-[24px] md:tracking-[3px] 1440:px-0">
          <span className="font-bold opacity-25 1440:tracking-[4.72px]">
            03
          </span>
          <span className="font-normal">SPACE LAUNCH 101</span>
        </p>
        <div className="flex flex-col items-center space-y-8 pt-16 outline outline-blue-600 1440:flex-row-reverse 1440:gap-x-8 1440:space-y-0">
          {/* 元件 */}
          <>
            {selectedTech === "launch-vehicle" && (
              <LaunchVehicle
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
              />
            )}
            {selectedTech === "spaceport" && (
              <Spaceport
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
              />
            )}
            {selectedTech === "capsule" && (
              <Capsule
                selectedTech={selectedTech}
                setSelectedTech={setSelectedTech}
              />
            )}
          </>
        </div>
      </div>
    </section>
  );
}
