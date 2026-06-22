import { Nav } from "src/components/Nav";
import { MoodPrompt } from "src/features/home/components/MoodPrompt";
import { DashboardSection } from "src/features/home/components/DashboardSection";

export function HomePage() {
  return (
    <div className="flex max-w-[375px] flex-col justify-center gap-12 px-4 pt-8 pb-20">
      <Nav />
      <main>
        <MoodPrompt />
        <DashboardSection />
      </main>
    </div>
  );
}
