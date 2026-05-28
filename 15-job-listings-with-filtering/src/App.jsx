import { useState, useEffect } from "react";

import { Header } from "src/components/layout/Header";
import { FilterBar } from "src/components/filters/FilterBar";
import { JobListSection } from "src/components/jobs/JobListSection";
import data from "src/data/data.json";

function App() {
  const [selectedFilters, setSelectedFilters] = useState(() => {
    const storedTags = localStorage.getItem("selectedFilters");
    return storedTags ? JSON.parse(storedTags) : [];
  });
  useEffect(() => {
    localStorage.setItem(
      "selectedFilters",
      JSON.stringify(selectedFilters),
    );
  }, [selectedFilters]);

  const handleFilterClick = (tag) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(tag)) {
        return prevFilters;
      }

      return [...prevFilters, tag];
    });
  };

  const handleClear = () => {
    setSelectedFilters([]);
  };

  const handleRemoveFromTags = (removeTag) => {
    setSelectedFilters((prevTags) =>
      prevTags.filter((tag) => tag !== removeTag),
    );
  };

  const filteredJobs = data.filter((job) => {
    const jobTags = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ];

    return selectedFilters.every((filter) =>
      jobTags.includes(filter),
    );
  });

  return (
    <>
      <section className="bg-customGreen-50 min-h-screen min-w-[375px]">
        <Header />
        <main className="mx-auto flex w-full max-w-[1110px] flex-col items-center">
          <FilterBar
            selectedFilters={selectedFilters}
            onClear={handleClear}
            onRemove={handleRemoveFromTags}
          />
          <JobListSection
            onFilterClick={handleFilterClick}
            jobs={filteredJobs}
          />
        </main>
      </section>
    </>
  );
}

export default App;
