import styled from "styled-components";

const StyledLocationContainer = styled.h2`
  margin-bottom: 24px;
  height: 21px;
  line-height: 21px;
  font-family: "Inter-Bold";
  color: var(--green);
`;

const ProfileLocation = () => {
  return (
    <StyledLocationContainer>London, United Kingdom</StyledLocationContainer>
  );
};
export default ProfileLocation