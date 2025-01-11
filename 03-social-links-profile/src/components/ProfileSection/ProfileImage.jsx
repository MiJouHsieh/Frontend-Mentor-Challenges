import styled from "styled-components";

const StyledImgContainer = styled.div`
  width: 88px;
  height:88px;
  margin-bottom: 24px;

  img {
    border-radius: 50%;
    width: 88px;
    height: 88px;
    object-fit: cover;
  }
`;

const ProfileImage = () => {
  return (
    <StyledImgContainer>
      <img src="src/assets/images/avatar-jessica.jpeg" />
    </StyledImgContainer>
  );
};
export default ProfileImage;