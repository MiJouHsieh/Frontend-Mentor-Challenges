import iconLocation from "src/assets/icon-location.svg";
import iconWebsite from "src/assets/icon-website.svg";
import iconTwitter from "src/assets/icon-twitter.svg";
import iconCompany from "src/assets/icon-company.svg";

import styled from "styled-components";

const UserLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadowColor};
`;
const UserLinksItem = styled.div`
  margin-bottom: 16px;
  border: 1px solid blue;
  display: flex;
  align-items: start;
  height: 20px;
  img {
    border: 1px solid red;
    margin-right: 13px;
    max-width: 20px;
    height: 20px;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.themeToggleButtonHoverColor};
    }
  }
`;

export default function UserLinks() {
  return (
    <UserLinksContainer className="links-group">
      <UserLinksItem>
        <span className="link-icon">
          <img src={iconLocation} alt="" />
        </span>
        <h4 className="link">San Francisco</h4>
      </UserLinksItem>
      <UserLinksItem>
        <span className="link-icon">
          <img src={iconWebsite} alt="" />
        </span>
        <h4 className="link">https://github.blog</h4>
      </UserLinksItem>
      <UserLinksItem>
        <span className="link-icon">
          <img src={iconTwitter} alt="" />
        </span>
        <h4 className="link">Not available</h4>
      </UserLinksItem>
      <UserLinksItem>
        <span className="link-icon">
          <img src={iconCompany} alt="" />
        </span>
        <h4 className="link">@github</h4>
      </UserLinksItem>
    </UserLinksContainer>
  );
}
