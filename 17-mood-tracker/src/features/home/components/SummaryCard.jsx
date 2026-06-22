export function SummaryCard({ type, title, info }) {
  return (
    <div>
      <h2 className="text-preset-7">
        <span className="text-preset-5">Average {type} </span>{" "}
        (Last 5 Check-ins)
      </h2>
      <article className="mt-3 flex h-[150px] flex-col justify-center gap-3 rounded-2xl bg-moodBlue-100 px-4 py-5">
        <h3 className="text-preset-4-semibold">{title}</h3>
        <p className="text-preset-7">{info}</p>
      </article>
    </div>
  );
}
