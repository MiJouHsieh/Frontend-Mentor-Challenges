import styled from "styled-components";
import Main from "src/components/Main";

const StyledAppContainer = styled.div`
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 375px;
  min-height: 100vh; /* 讓容器撐滿整個視窗 */

  @media screen and (min-width: 376px) {
    padding: 40px;
  }
  @media screen and (min-width: 769px) {
    padding: 0;
  }
`;

function AppContainer() {
  return (
    <StyledAppContainer>
      <Main />
    </StyledAppContainer>
  );
};

export default AppContainer;