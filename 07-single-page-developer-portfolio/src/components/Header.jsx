import { Nav } from "src/components/Nav";

export function Header() {
  return (
    <div className="absolute left-1/2 top-5 flex w-[154px] -translate-x-1/2 transform flex-col items-center gap-y-5 md:w-full md:flex-row md:items-center z-30 md:justify-between md:px-8 1440:top-[39px] 1440:px-0">
      <Nav />
    </div>
  );
}
