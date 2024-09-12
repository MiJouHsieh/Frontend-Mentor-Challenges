import IconLocation from "src/assets/icon-location.svg?react";
import IconWebsite from "src/assets/icon-website.svg?react";
import IconTwitter from "src/assets/icon-twitter.svg?react";
import IconCompany from "src/assets/icon-company.svg?react";

import styled from "styled-components";

const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 376px) {
    height: 63px;
    gap: 19px 0;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 769px) {
    width: calc(100% - 9.875rem);
    margin-left: 9.875rem;
  }
`;
const UserLinksItem = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: start;
  height: 20px;
  span.link-icon {
    margin-right: 13px;
    width: 20px;
    height: 20px;
    svg {
      color: ${(props) =>
        props.isUnavailable ? "#A5B4CD" : "inherit"}; /* 動態改變顏色 */
      &:hover,
      &:focus {
        text-decoration: underline;
        color: ${(props) => props.theme.themeToggleButtonHoverColor};
      }
    }
  }

  h4 {
    width: 270px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) =>
      props.isUnavailable ? "#A5B4CD" : "inherit"}; /* 動態改變顏色 */
    a {
      color: ${(props) => props.theme.textColor};

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  @media screen and (min-width: 376px) {
    margin-bottom: 0;
    width: 50%;
    font-size: 15px;
  }
`;

export default function UserLinks({ userData }) {

  return (
    <UserLinksContainer className="links-group">
      <UserLinksItem isUnavailable={!userData.location}>
        <span className="link-icon">
          <IconLocation />
        </span>
        <h4 className="link">{userData.location || "Not available"}</h4>
      </UserLinksItem>
      <UserLinksItem isUnavailable={!userData.website}>
        <span className="link-icon">
          <IconWebsite />
        </span>
        <h4 className="link">
          {userData.blog ? (
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
              {userData.blog}
            </a>
          ) : (
            "Not available"
          )}
        </h4>
      </UserLinksItem>
      <UserLinksItem isUnavailable={!userData.twitter}>
        <span className="link-icon">
          <IconTwitter />
        </span>
        <h4 className="link">{userData.twitter || "Not available"}</h4>
      </UserLinksItem>
      <UserLinksItem>
        <span className="link-icon">
          <IconCompany />
        </span>
        <h4 className="link">{userData.company || "Not available"}</h4>
      </UserLinksItem>
    </UserLinksContainer>
  );
}
