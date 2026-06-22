export function MoodPrompt() {
  return (
    <section className="flex flex-col justify-center gap-12">
      <div className="flex flex-col justify-center gap-4 text-center">
        <p className="text-[24px] font-bold leading-[130%] tracking-[-0.3px] text-moodBlue-600">
          Hello, Lisa!
        </p>
        <h1 className="text-preset-1-mobile text-moodNeutral-900">
          How are you feeling today?
        </h1>
        <time
          dateTime="2025-04-16"
          className="text-preset-6 text-moodNeutral-600"
        >
          Wednesday, April 16th, 2025
        </time>
      </div>
      <button className="text-preset-5 mx-auto h-[60px] w-[226px] rounded-[10px] bg-moodBlue-600 px-8 py-4 text-moodNeutral-0">
        Log today's mood
      </button>
    </section>
  );
}
