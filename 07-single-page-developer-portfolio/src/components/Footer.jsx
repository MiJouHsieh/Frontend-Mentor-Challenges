import { Nav } from "src/components/Nav";

export function Footer() {
  return (
    <footer className="flex h-[172px] w-full items-center justify-center md:h-[103px] 1440:h-[172px]">
      <div className="flex w-[154px] flex-col items-center gap-y-5 md:w-full md:flex-row md:items-center md:justify-between">
        <Nav />
      </div>
    </footer>
  );
}