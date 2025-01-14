import { Header } from "src/components/Header";
import { HeroSection } from "src/components/HeroSection";
import { ServiceGrid } from "src/components/ServiceGrid";

function App() {
  return (
    <div className="mx-auto flex min-w-[375px] flex-col items-center p-4 md:px-[39px] md:pt-[34px] 1440:max-w-[1110px]">
      <Header />
      <HeroSection />
      <ServiceGrid />
    </div>
  );
}

export default App;
