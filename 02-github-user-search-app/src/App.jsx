import { useState } from "react";
import { Header, SearchBar } from "src/components";
import UserProfile from "src/components/userProfile/UserProfile";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "src/theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const Container = styled.div`
  min-width: 375px;
  width: 100%;
  padding: 30px 24px;
  margin: 0 auto;

  @media screen and (min-width: 376px) {
    max-width: 573px;
    padding: 0;
  }

  @media screen and (min-width: 769px) {
    max-width: 730px;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userData, setUserData] = useState(null);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleSetUserData = (data) => {
    if (!data) {
      setUserData(null);
    } else {
      setUserData(data);
    }
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <SearchBar setUserData={handleSetUserData} />
        {userData && <UserProfile userData={userData} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;