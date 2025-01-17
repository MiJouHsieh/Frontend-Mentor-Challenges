import { Header } from "src/components/Header";
import { HeroSection } from "src/components/HeroSection";
import { ServiceGrid } from "src/components/ServiceGrid";
import { AboutSection } from "src/components/AboutSection"; 
import { PortfolioSection } from "src/components/PortfolioSection";

function App() {    
  return (
    <div className="mx-auto flex min-w-[375px] flex-col items-center p-4 md:items-end md:px-[39px] md:pt-[34px] 1440:max-w-[1110px] 1440:px-0">
      <Header />
      <HeroSection />
      <ServiceGrid />
      <AboutSection />
      <PortfolioSection />
    </div>
  );
}

export default App;
