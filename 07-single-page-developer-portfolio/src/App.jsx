import { Header } from "src/components/Header";
import { HeroSection } from "src/components/HeroSection";
import { Spacing } from "src/components/Spacing";
import { SkillsSection } from "src/components/SkillsSection";
import { ProjectsSection } from "src/components/ProjectsSection";
import { ContactSection } from "src/components/ContactSection";
import { Footer } from "src/components/Footer";

function App() {
  return (
    <div className="flex min-w-[375px] flex-col items-center justify-center bg-black text-white">
      <div className="relative flex w-full min-w-[375px] flex-col items-center px-4 pt-5 md:px-8 1440:max-w-[1110px] 1440:px-0">
        <Header />
        <HeroSection />
        <Spacing className="h-[80px] border-b-[1px] md:h-[60px] 1440:h-[104px]" />
        <SkillsSection />
        <Spacing className="h-[80px] border-t-[1px] md:h-[100px] md:border-none 1440:h-[104px]" />
        <ProjectsSection />
        <Spacing className="h-[80px] md:h-[100px] 1440:h-[139px]" />
      </div>
      <div className="flex w-full justify-center bg-darkGray">
        <div className="flex w-full min-w-[375px] flex-col items-center px-4 md:px-8 1440:max-w-[1110px] 1440:px-0">
          <ContactSection />
          <Spacing className="h-[87px] border-b-[1px] border-[#979797] md:h-[92px]" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
