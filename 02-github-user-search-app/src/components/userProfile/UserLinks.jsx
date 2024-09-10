import IconLocation from "src/assets/icon-location.svg?react";
import IconWebsite from "src/assets/icon-website.svg?react";
import IconTwitter from "src/assets/icon-twitter.svg?react";
import IconCompany from "src/assets/icon-company.svg?react";

import styled from "styled-components";

const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    color: ${(props) =>
      props.isUnavailable ? "#A5B4CD" : "inherit"}; /* 動態改變顏色 */
    a {
      color: ${(props) => props.theme.textColor};
    }
  }
`;

export default function UserLinks() {
  const userData = {
    location: "San Francisco",
    website: "https://github.blog",
    twitter: null, // 模擬 "未有值"
    company: "@github",
  };


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
          {userData.website ? (
            <a
              href={userData.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.website}
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
