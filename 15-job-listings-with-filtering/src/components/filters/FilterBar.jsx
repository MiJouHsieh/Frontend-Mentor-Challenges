const SelectedFilterTag = ({ tag, onRemove }) => {
  return (
    <div className="flex h-[32px] overflow-hidden rounded-[4px]">
      <span className="text-3-bold bg-customGreen-50 text-customGreen-400 flex items-center px-2 py-1">
        {tag}
      </span>
      <button
        type="button"
        onClick={onRemove}
        aria-label={`Remove ${tag} filter`}
        className="bg-customGreen-400 hover:bg-customGreen-900 flex h-[32px] w-[32px] cursor-pointer items-center justify-center"
      >
        <img
          src="/images/icon-remove.svg"
          alt=""
          className="h-[14px] w-[14px]"
        />
      </button>
    </div>
  );
};
export function FilterBar({ selectedFilters, onClear, onRemove }) {
  if (selectedFilters.length === 0) return null;

  return (
    <div className="1440:w-full 694:w-[670px] mx-auto -mt-9 mb-10 flex w-[331px] justify-between gap-10 rounded-[5px] bg-white px-6 py-4 shadow-[0_10px_24px_rgba(91,164,164,0.22)]">
      <div className="flex w-full flex-wrap justify-start gap-4">
        {selectedFilters.map((tag) => {
          return (
            <SelectedFilterTag
              key={tag}
              tag={tag}
              onRemove={() => onRemove(tag)}
            />
          );
        })}
      </div>
      <button
        onClick={onClear}
        type="button"
        className="text-customGray-400 text-3-bold"
      >
        Clear
      </button>
    </div>
  );
}
