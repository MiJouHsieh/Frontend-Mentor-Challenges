import Logo from "src/assets/logo.svg?react" 

export function Nav() {
  return (
    <nav
      aria-label="Main navigation"
    >
      <a href="#">
        <Logo className="h-10 w-[177px]" />
      </a>
    </nav>
  );
}