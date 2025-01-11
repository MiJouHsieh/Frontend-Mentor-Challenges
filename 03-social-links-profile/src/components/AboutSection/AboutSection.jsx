import styled from "styled-components";

const StyledAboutContainer = styled.h2`
  margin-bottom: 24px;
  height: 21px;
  line-height: 21px;
`;

const AboutSection = () => {
  return (
    <StyledAboutContainer>{"Front-end developer and avid reader."}</StyledAboutContainer>
  )
}
export default AboutSection;