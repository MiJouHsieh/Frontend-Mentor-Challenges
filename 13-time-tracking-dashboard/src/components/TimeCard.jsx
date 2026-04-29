import IconEllipsis from "src/assets/icon-ellipsis.svg?react";

export function TimeCard({
  title,
  current,
  previous,
  colorClass,
  Icon,
}) {
  return (
    <div
      className={`${colorClass} flex h-40 flex-col justify-between overflow-hidden rounded-[15px]`}
    >
      <div className="relative">
        <Icon className="absolute right-4 top-[-10px] h-[78px] w-[78px]" />
      </div>
      <div className="bg-navy900 z-10 flex h-[122px] w-full flex-col justify-between gap-[8px] rounded-[15px] p-6">
        <div className="flex items-center justify-between">
          <p className="text-5-medium">{title}</p>
          <a href="#">
            <IconEllipsis className="h-[5px] w-[21px]" />
          </a>
        </div>
        <div className="flex h-[38px] items-center justify-between">
          <h1 className="text-3">{current}hrs</h1>
          <p className="text-6 text-navy200">
            Last Week - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
