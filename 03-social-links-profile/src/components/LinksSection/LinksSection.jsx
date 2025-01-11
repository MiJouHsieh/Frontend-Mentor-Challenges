import styled from "styled-components";

const StyledLinkItem = styled.a`
  border-radius: 8px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background: var(--grey-700);
  width: 100%;
  //a:hover 無無效
`;
const links = [
  { id: "GitHub", link: "https://github.com" },
  { id: "Frontend Mentor", link: "https://frontendmentor.io" },
  { id: "LinkedIn", link: "LinkedIn" },
  { id: "Twitter", link: "Twitter" },
  { id: "Instagram", link: "Instagram" },
];

// const LinkItem = links.map( link => 
//     <StyledLinkItem key={link.id}>{link.link}</StyledLinkItem>
//   )

const StyledLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  a:hover {
    background: var(--green);
  }
`;

const LinksSection = () => {
  return (
    <StyledLinksContainer>
      {/* <LinkItem>GitHub</LinkItem>
      <LinkItem>Frontend Mentor</LinkItem>
      <LinkItem>LinkedIn</LinkItem>
      <LinkItem>Twitter</LinkItem>
      <LinkItem>Instagram</LinkItem> */}
      {links.map((link) => (
        <StyledLinkItem
          key={link.id}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.id}
        </StyledLinkItem>
      ))}
    </StyledLinksContainer>
  );
};
export default LinksSection;