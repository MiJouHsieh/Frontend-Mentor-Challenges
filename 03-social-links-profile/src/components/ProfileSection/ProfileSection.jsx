import styled from "styled-components";
import ProfileImage from "src/components/ProfileSection/ProfileImage";
import ProfileName from "src/components/ProfileSection/ProfileName"
import ProfileLocation from "src/components/ProfileSection/ProfileLocation"

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = () => {
  return (
    <StyledProfile>
      <ProfileImage />
      <ProfileName />
      <ProfileLocation/>
    </StyledProfile>
  );
};

export default ProfileSection;