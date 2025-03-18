import IconLogo from "src/assets/icons/logo.svg?react";
import IconHamburger from "src/assets/icons/icon-hamburger.svg?react";
const ROUTES = [
  { id: "", label: "00 Home" },
  { id: "destination", label: "01 Destination" },
  { id: "crew", label: "02 Crew" },
  { id: "technology", label: "03 Technology" },
];
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const location = useLocation();
  return (
    <nav className="absolute z-10 flex h-[88px] w-full max-w-[1440px] items-center justify-between p-6 text-white 660:p-0 md:h-24 1440:top-10">
      <Link to="/" className="1440:relative">
        <hr className="absolute left-[100%] top-[50%] hidden h-[1px] w-[325%] border-[#979797] 1440:block" />
        <IconLogo className="h-10 w-10 660:mx-10 md:h-12 md:w-12 1440:mx-16" />
      </Link>
      <div className="660:hidden">
        <IconHamburger />
      </div>
      <div className="hidden h-full w-full max-w-[736px] 660:block">
        <ul className="flex h-full w-full items-center justify-end space-x-12 bg-white bg-opacity-5 px-10 uppercase">
          {ROUTES.map(({ id, label }) => {
            //自動拆分數字和文字
            const parts = label.match(/^(\d+)?\s*(.*)$/);
            const number = parts[1];
            const labelTitle = parts[2];

            // 確認當前頁面是否與此項目匹配
            const isActive =
              id === ""
                ? location.pathname === "/"
                : location.pathname.startsWith(`/${id}`);
            console.log(
              "now",
              location.pathname.startsWith(`/${id}`),
            );
            return (
              <Link
                key={id}
                to={`/${id}`}
                className="cursor-pointer"
              >
                <li
                  className={`title-8 flex h-full cursor-pointer items-center ${
                    isActive
                      ? "border-b-[3px] border-white"
                      : "hover:border-b-[3px] hover:border-white"
                  }`}
                >
                  {number && (
                    <span className="mr-3 hidden font-bold md:block">
                      {number}
                    </span>
                  )}
                  {labelTitle}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
