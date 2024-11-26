import BackgroundImage from "src/assets/images/illustration-hero.svg";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 100%;
  background-color: transparent;
  height: 160px;
  img {
    width: 100%;
  }

  @media screen and (min-width: 376px) {
    height: 220px;
  }
`;

const TopImage = () => {
  return (
    <ImageContainer>
      <img src={BackgroundImage} alt="Music Icon" />
    </ImageContainer>
  );
};
export default TopImage;