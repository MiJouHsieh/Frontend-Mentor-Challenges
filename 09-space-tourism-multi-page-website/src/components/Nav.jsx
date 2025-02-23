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
    <nav className="absolute top-0 1440:top-10 flex h-[88px] w-full items-center justify-between p-6 md:h-24 660:p-0">
      <a href="#" className="1440:relative">
        <hr className="w-[325%] h-[1px] absolute left-[100%] top-[50%] border-white border-opacity-100 1440:block hidden" />
        <IconLogo className="1440:mx-16 h-10 w-10 660:mx-10 md:h-12 md:w-12" />
      </a>
      <a href="#" className="660:hidden">
        <IconHamburger />
      </a>
      <div className="h-full w-full max-w-[736px] hidden 660:block">
        <ul className="flex h-full w-full items-center justify-end space-x-12 bg-white bg-opacity-15 px-10 uppercase">
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
                  <span className="mr-3 font-bold hidden md:block">{number}</span>
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
