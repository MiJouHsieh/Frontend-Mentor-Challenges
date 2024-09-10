import styled from "styled-components";

const UserInfoContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  font-size: 13px;
`;
const UserAvatarContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 19px;
`;
const UserInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
  }
`;
const AccountName = styled.p`
  color: #0079ff;
`;
export default function UserInfo() {
  return (
    <UserInfoContainer>
      <UserAvatarContainer>
        <img />
      </UserAvatarContainer>
      <UserInfoTextContainer>
        <h3>The Octocat</h3>
        <AccountName> @octocat</AccountName>
        <p>Joined 25 Jan 2011</p>
      </UserInfoTextContainer>
    </UserInfoContainer>
  );
}
