export function JobTag({ tag, className }) {
  return (
    <span
      className={`text-4 bg-customGreen-400 inline-flex h-[26px] items-center rounded-xl px-2 uppercase leading-none text-white ${className}`}
    >
      <span className="translate-y-[1px]">{tag}</span>
    </span>
  );
}
