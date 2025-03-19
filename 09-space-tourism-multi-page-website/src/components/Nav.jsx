import IconLogo from "src/assets/icons/logo.svg?react";
import IconHamburger from "src/assets/icons/icon-hamburger.svg?react";
import IconClose from "src/assets/icons/icon-close.svg?react";
import { useState, useEffect, useRef } from "react";

const ROUTES = [
  { id: "", label: "00 Home" },
  { id: "destination", label: "01 Destination" },
  { id: "crew", label: "02 Crew" },
  { id: "technology", label: "03 Technology" },
];
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, [showMenu]);

  return (
    <nav className="absolute z-10 flex h-[88px] w-full max-w-[1440px] items-center justify-between p-6 text-white 660:p-0 md:h-24 1440:top-10">
      <div className="1440:relative">
        <hr className="absolute left-[100%] top-[50%] hidden h-[1px] w-[325%] border-[#979797] 1440:block" />
        <Link to="/">
          <IconLogo className="h-10 w-10 660:mx-10 md:h-12 md:w-12 1440:mx-16" />
        </Link>
      </div>
      <div className="660:hidden">
        <IconHamburger
          onClick={handleClick}
          className="cursor-pointer"
        />
      </div>
      {showMenu && (
        <div
          ref={navRef}
          className="fixed right-0 top-0 z-20 h-[812px] w-[67%] max-w-[736px] bg-[#080D17] bg-opacity-15 pl-8 backdrop-blur-xl 660:hidden"
        >
          <div className="flex justify-end space-y-12 py-8 pr-6">
            <IconClose
              className="h-[21px] w-6 cursor-pointer border-blue300"
              onClick={handleClick}
            />
          </div>
          <div>
            <ul className="flex flex-col space-y-8 uppercase">
              {ROUTES.map(({ id, label }) => {
                //自動拆分數字和文字
                const parts = label.match(/^(\d+)?\s*(.*)$/) || [
                  "",
                  "",
                  label,
                ];
                const number = parts[1] || "";
                const labelTitle = parts[2] || label;

                // 確認當前頁面是否與此項目匹配
                const isActive =
                  id === ""
                    ? location.pathname === "/"
                    : location.pathname.startsWith(`/${id}`);
                return (
                  <Link
                    key={id}
                    to={`/${id}`}
                    className="cursor-pointer"
                  >
                    <li
                      className={`title-8 flex h-full cursor-pointer items-center ${
                        isActive
                          ? "border-r-[3px] border-white"
                          : "border-[rgba(255,255,255,0.5)] hover:border-r-[3px]"
                      }`}
                    >
                      {number && (
                        <span className="title-8-number">
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
        </div>
      )}

      <div className="hidden h-full w-full max-w-[736px] 660:block">
        <ul className="flex h-full w-full items-center justify-end space-x-12 bg-white bg-opacity-5 px-10 uppercase">
          {ROUTES.map(({ id, label }) => {
            //自動拆分數字和文字
            const parts = label.match(/^(\d+)?\s*(.*)$/) || [
              "",
              "",
              label,
            ];
            const number = parts[1] || "";
            const labelTitle = parts[2] || label;

            // 確認當前頁面是否與此項目匹配
            const isActive =
              id === ""
                ? location.pathname === "/"
                : location.pathname.startsWith(`/${id}`);
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
                      : "border-[rgba(255,255,255,0.5)] hover:border-b-[3px]"
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
