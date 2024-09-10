import styled from "styled-components";
import MoonIcon from "src/assets/icon-moon.svg?react";
import SunIcon from "src/assets/icon-sun.svg?react";

const HeaderContainer = styled.header`
  display: flex;
  margin-bottom: 36px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 38px;
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.appNameColor};
`

const ThemeToggleButton = styled.button`
  display: flex;
  background: none;
  border: none;
  justify-content: space-between;
  align-items: center;
  width: 78px;
  font-family: "Space Mono", monospace;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: ${(props) => props.theme.themeToggleButtonColor};
  cursor: pointer;

  &:hover,
  &:focus {
    background: none;
    color: ${(props) => props.theme.themeToggleButtonHoverColor};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.themeToggleButtonColor};
    &:hover,
    &:focus {
      color: ${(props) => props.theme.themeToggleButtonHoverColor};
    }
  }
`;

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer>
      <H1>devfinder</H1>
      <ThemeToggleButton
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <span>{isDarkMode ? "LIGHT" : "DARK"}</span>
        {isDarkMode ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};
export default Header;
