import styled from "styled-components";

import {
  UserInfo,
  UserBio,
  UserStats,
  UserLinks,
} from "src/components/userProfile";

const UserProfileContainer = styled.div`
  padding: 32px 24px 0 24px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: ${(props) => props.theme.sectionBgColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  align-items: start;
`;

export default function UserProfile({ userData }) {
  // 接收 userData
  return (
    <UserProfileContainer>
      <UserInfo userData={userData} />
      {/* 傳遞 userData */}
      <UserBio userData={userData} />
      <UserStats userData={userData} />
      <UserLinks userData={userData} />
    </UserProfileContainer>
  );
}
