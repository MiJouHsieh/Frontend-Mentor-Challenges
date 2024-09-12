import styled from "styled-components";
const UserBioText = styled.p`
  margin-bottom: 23px;
  font-size: 13px;

  @media screen and (min-width: 769px) {
    margin-top: -30px;
    margin-left: 9.875rem;
  }
`;

export default function UserBio({ userData }) {
  return (
    <UserBioText>
      {userData.bio ? userData.bio : "This profile has no bio"}
    </UserBioText>
  )
}