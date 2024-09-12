import styled from "styled-components";

const UserInfoContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  font-size: 13px;

  @media screen and (min-width: 376px) {
    margin-bottom: 24px;
    height: 117px;
  }
  @media screen and (min-width: 769px) {
    margin-bottom: 0;
    align-items: flex-start;
  }
`;
const UserAvatarContainer = styled.div`
  height: 70px;
  margin-right: 19px;
  img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  @media screen and (min-width: 376px) {
    margin-right: 41px;
    height: 117px;
    img {
      border-radius: 50%;
      width: 117px;
      height: 117px;
      object-fit: cover;
    }
  }
`;
const UserInfoTextContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  flex-direction: column;
  h3 {
    margin-bottom: 2px;
    font-weight: bold;
    line-height: 24px;
  }
  @media screen and (min-width: 376px) {
    h3 {
      font-size: 26px;
      line-height: 39px;
    }
  }
  @media screen and (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const AccountName = styled.p`
  color: #0079ff;
  @media screen and (min-width: 376px) {
    a {
      font-size: 16px;
    }
  }
`;
export default function UserInfo({ userData }) {
  return (
    <UserInfoContainer>
      <UserAvatarContainer>
        <img src={userData.avatar_url} alt={userData.login} />
      </UserAvatarContainer>
      <UserInfoTextContainer>
        <div className="desktopLayout">
          <h3>{userData.name}</h3>
          <AccountName>
            <a href={userData.html_url}>@{userData.login}</a>
          </AccountName>
        </div>
        <p>Joined {new Date(userData.created_at).toLocaleDateString()}</p>
      </UserInfoTextContainer>
    </UserInfoContainer>
  );
}
