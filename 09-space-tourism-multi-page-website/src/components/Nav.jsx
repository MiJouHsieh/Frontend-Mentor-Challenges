import IconLogo from "src/assets/icons/logo.svg?react";
import IconHamburger from "src/assets/icons/icon-hamburger.svg?react";
const ROUTES = [
  "00 Home",
  "01 Destination",
  "02 Crew",
  "03 Technology",
];

export function Nav() {
  return (
    <nav className="absolute flex h-[88px] w-full items-center justify-between p-6 text-white 660:p-0 md:h-24 1440:top-10">
      <a href="#" className="1440:relative">
        <hr className="absolute left-[100%] top-[50%] hidden h-[1px] w-[325%] border-[#979797] 1440:block" />
        <IconLogo className="h-10 w-10 660:mx-10 md:h-12 md:w-12 1440:mx-16" />
      </a>
      <a href="#" className="660:hidden">
        <IconHamburger />
      </a>
      <div className="hidden h-full w-full max-w-[736px] 660:block">
        <ul className="flex h-full w-full items-center justify-end space-x-12 bg-white bg-opacity-5 px-10 uppercase">
          {ROUTES.map((route, i) => {
            //自動拆分數字和文字
            const parts = route.match(/^(\d+)?\s*(.*)$/);
            const number = parts[1];
            const label = parts[2];
            return (
              <li
                key={route}
                className={`title-8 flex h-full items-center ${i === 0 ? "border-b-[3px] border-white" : "hover:border-b hover:border-white"}`}
              >
                {number && (
                  <span className="mr-3 hidden font-bold md:block">
                    {number}
                  </span>
                )}
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
