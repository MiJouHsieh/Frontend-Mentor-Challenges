import { Paginator } from "src/components/Paginator";

export function LaunchVehicle({ selectedTech, setSelectedTech }) {
  return (
    <>
      <div className="h-[258px] w-[375px] bg-[url('/src/assets/technology/image-launch-vehicle-landscape.jpg')] bg-cover bg-center md:h-[365px] md:w-[768px] 1440:h-[600px] 1440:w-[608px] 1440:bg-[url('/src/assets/technology/image-launch-vehicle-portrait.jpg')]" />
      <div className="flex flex-col items-center space-y-10 px-6 1440:flex-row 1440:items-start 1440:space-x-16 1440:space-y-0 1440:px-0">
        <Paginator
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
        <div className="flex flex-col items-center md:w-[512px] 1440:w-[491px] 1440:items-start">
          <p className="crew-title 1440:title-4 mb-4 md:text-[16px] md:leading-[28px]">
            The terminology...
          </p>
          <h1 className="crew-name 1440:title-3 mb-4 md:text-[40px] md:leading-[46px] 1440:mb-6">
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
    </>
  );
}
