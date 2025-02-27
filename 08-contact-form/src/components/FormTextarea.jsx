export function FormTextarea() {
  return (
    <div className="flex flex-col space-y-2">
      <label>Message</label>
      <textarea
        name=""
        id=""
        rows="8"
        className="body-m h-[240px] space-x-3 rounded-lg border border-grey500 px-6 py-3 md:h-[132px]"
      ></textarea>
    </div>
  );
}
