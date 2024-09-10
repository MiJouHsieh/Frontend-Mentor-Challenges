import styled from "styled-components";

import {
  UserInfo,
  UserBio,
  UserStats,
  UserLinks,
} from "src/components/userProfile";

const UserProfileContainer = styled.div`
  padding:  32px 24px 0 24px; 
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export default function UserProfile() {
  return (
    <UserProfileContainer>
      <UserInfo />
      <UserBio />
      <UserStats />
      <UserLinks />
    </UserProfileContainer>
  );
}
