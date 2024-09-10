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
  margin-right: 19px;
  img {
    border-radius: 50%;
    width: 100%;
  }
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
export default function UserInfo({ userData }) {
  return (
    <UserInfoContainer>
      <UserAvatarContainer>
        <img src={userData.avatar_url} alt={userData.login} />
      </UserAvatarContainer>
      <UserInfoTextContainer>
        <h3>{userData.name}</h3>
        <AccountName>
          <a href={userData.html_url}>@{userData.login}</a>
        </AccountName>
        <p>Joined {new Date(userData.created_at).toLocaleDateString()}</p>
      </UserInfoTextContainer>
    </UserInfoContainer>
  );
}
