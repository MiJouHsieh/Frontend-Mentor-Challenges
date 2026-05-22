export function FilterTag({ tag }) {
  return (
    <button
      type="button"
      className="text-3-bold text-customGreen-400 bg-customGreen-50 hover:bg-customGreen-400 rounded-sm px-4 py-2 hover:text-white"
    >
      {tag}
    </button>
  );
}
