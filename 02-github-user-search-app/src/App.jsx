import { useState } from "react";
import { Header, SearchBar } from "src/components";
import UserProfile from "src/components/userProfile/UserProfile";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "src/theme/theme";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  min-width: 375px;
  padding: 30px 24px;
  width: 100%;
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

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <SearchBar setUserData={setUserData} />
        {userData && <UserProfile userData={userData} />} 
      </Container>
    </ThemeProvider>
  );
}

export default App;