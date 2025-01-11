import styled from "styled-components";
import { AboutSection, LinksSection, ProfileSection } from "src/components";

const StyledMain = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-800);
  // width: 100%;
  min-width: 327px;
  max-width: 327px;
  min-height: 579px;

  @media screen and (min-width: 376px) {
    padding: 40px;
    max-width: 456px;
    height: 611px;
  }
  @media screen and (min-width: 769px) {
    max-width: 384px;
    height: 611px;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <ProfileSection />
      <AboutSection />
      <LinksSection />
    </StyledMain>
  );
};
export default Main;
