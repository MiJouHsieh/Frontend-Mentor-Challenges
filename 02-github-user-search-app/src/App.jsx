import { useState } from "react";
import { Header, SearchBar } from "src/components";
import UserProfile from "src/components/userProfile/UserProfile";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "src/theme/theme";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  width: 375px;
  border: 1px solid red;
  padding: 30px 24px;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container>
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <SearchBar />
        <UserProfile />
      </Container>
    </ThemeProvider>
  );
}

export default App;