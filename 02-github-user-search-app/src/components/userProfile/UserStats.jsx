import styled from "styled-components";

const UserStatsContainer = styled.div`
  margin-bottom: 24px;
  background: ${(props) => props.theme.userStatsBgColor};
  display: flex;
  width: 100%;
  height: 85px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;

const UserStatsItem = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  flex-grow: 1;
  .title {
    height: 16px;
    font-size: 11px;
  }
  .value {
    height: 24px;
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.userStatsValueColor};
  }
`;

export default function UserStats({ userData }) {
  return (
    <UserStatsContainer className="group">
      <UserStatsItem>
        <div className="title">Repos</div>
        <div className="value">{userData.public_repos}</div>
      </UserStatsItem>
      <UserStatsItem>
        <div className="title">Followers</div>
        <div className="value">{userData.followers}</div>
      </UserStatsItem>
      <UserStatsItem>
        <div className="title">Following</div>
        <div className="value">{userData.following}</div>
      </UserStatsItem>
    </UserStatsContainer>
  );
}
