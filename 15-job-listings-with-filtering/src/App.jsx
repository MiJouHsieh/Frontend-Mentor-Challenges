import { Header } from "src/components/layout/Header";
import { FilterBar } from "src/components/filters/FilterBar";
import { JobList } from "src/components/jobs/JobList";
function App() {
  return (
    <>
      <section>
        <Header />
        <main>
          <FilterBar />
          <JobList />
        </main>
      </section>
    </>
  );
}

export default App;
