export function FormInput({label}) {
  return (
    <div className="flex flex-1 flex-col space-y-2">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        className="body-m h-[51px] rounded-lg border border-grey500 px-6 py-3"
      />
    </div>
  );
}
