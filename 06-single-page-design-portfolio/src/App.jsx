import { Nav } from "src/components/Nav";
import { HeroSection } from "src/components/HeroSection";
import { ServiceGrid } from "src/components/ServiceGrid";
import { AboutSection } from "src/components/AboutSection"; 
import { PortfolioSection } from "src/components/PortfolioSection";
import { BookingSection } from "src/components/BookingSection";

function App() {    
  return (
    <div className="mx-auto flex min-w-[375px] flex-col items-center p-4 md:items-end md:px-[39px] md:pt-[34px] 1440:max-w-[1110px] 1440:px-0">
      <Nav />
      <HeroSection />
      <ServiceGrid />
      <AboutSection />
      <PortfolioSection />
      <BookingSection />
      <Nav />
    </div>
  );
}

export default App;
