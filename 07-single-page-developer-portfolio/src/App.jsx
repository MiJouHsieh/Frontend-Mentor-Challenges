import { Header } from "src/components/Header";
import { HeroSection } from "src/components/HeroSection";
import { Spacing } from "src/components/Spacing";
import { SkillsSection } from "src/components/SkillsSection";
import { ProjectsSection } from "src/components/ProjectsSection";
import { ContactSection } from "src/components/ContactSection";
import { Footer } from "src/components/Footer";
import PatternRings from "src/assets/pattern-rings.svg?react";
import PatternCircle from "src/assets/pattern-circle.svg?react";

function App() {
  return (
    <div className="relative flex min-w-[375px] flex-col items-center justify-center bg-black text-white">
      <PatternRings className="absolute left-[-342px] top-[124px] z-10 h-[129px] md:left-[-265px] md:top-[86px] 1440:left-[-100px] 1440:top-[133px]" />
      <PatternCircle className="absolute left-[311px] top-[254px] z-10 h-[129px] md:z-30 md:left-[702px] md:top-[471px] 1440:left-[766px] 1440:top-[521px]" />
      <PatternRings className="absolute left-[189px] top-[1287px] z-10 h-[129px] md:left-[570px] md:top-[1047px] 1440:left-[1491px] 1440:top-[1077px]" />
      <PatternRings className="absolute left-[-343px] top-[4615px] h-[129px] md:left-[-368px] md:top-[3304px] 1440:left-[-205px] 1440:top-[3524px]" />
      <div className="relative flex w-full min-w-[375px] flex-col items-center px-4 md:px-8 1440:max-w-[1110px] 1440:p-0">
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
