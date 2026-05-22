

export function Header() {
  return (
    <header className="bg-customGreen-400 h-[156px]">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={"/images/bg-header-desktop.svg"}
        />
        <img
          src="/images/bg-header-mobile.svg"
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
    </header>
  );
}
