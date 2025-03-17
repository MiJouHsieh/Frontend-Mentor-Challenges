
export function Paginator({ selectedTech, setSelectedTech }) {
  const techOptions = [
    { id: "launch-vehicle", label: 1 },
    { id: "spaceport", label: 2 },
    { id: "capsule", label: 3 },
  ];

  return (
    <ul className="flex space-x-4 1440:flex-col 1440:space-x-0 1440:space-y-8">
      {techOptions.map(({ id, label }) => {
        return (
          <li
            className={`1440:title-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full font-bellefair text-[18px] font-normal leading-[21px] md:h-14 md:w-14 md:text-[24px] md:leading-[28px] 1440:h-20 1440:w-20 ${id === selectedTech ? "bg-white" : "border border-[rgba(255,255,255,0.25)] bg-transparent"}`}
            key={id}
            onClick={() => setSelectedTech(id)}
          >
            <span
              className={`${id === selectedTech ? "text-blue900" : "text-white"}`}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
