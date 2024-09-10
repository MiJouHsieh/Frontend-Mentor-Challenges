import styled from "styled-components";
const UserBioText = styled.p`
  margin-bottom: 23px;
  font-size: 13px;
`;

export default function UserBio({ userData }) {
  return <UserBioText>{userData.bio}</UserBioText>;
}
