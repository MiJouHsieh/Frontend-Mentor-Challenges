import { Header } from "src/components/layout/Header";
import { FilterBar } from "src/components/filters/FilterBar";
import { JobListSection } from "src/components/jobs/JobListSection";
function App() {
  return (
    <>
      <section className="bg-customGreen-50 min-w-[375px]">
        <Header />
        <main className="mx-auto flex w-full max-w-[1110px] flex-col items-center">
          <FilterBar />
          <JobListSection />
        </main>
      </section>
    </>
  );
}

export default App;
