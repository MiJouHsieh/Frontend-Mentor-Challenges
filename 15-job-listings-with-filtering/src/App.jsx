import { Header } from "src/components/layout/Header";
import { FilterBar } from "src/components/filters/FilterBar";
import { JobListSection } from "src/components/jobs/JobListSection";
function App() {
  return (
    <>
      <section className="min-w-[375px]">
        <Header />
        <main className="w-full h-full">
          <FilterBar />
          <JobListSection />
        </main>
      </section>
    </>
  );
}

export default App;
