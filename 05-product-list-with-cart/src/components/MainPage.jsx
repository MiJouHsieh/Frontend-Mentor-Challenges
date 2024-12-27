import styled from "styled-components";
import ProductCard from "src/components/ProductCard";
import Cart from "src/components/Cart";


const MainPageContainer = styled.div`
  outline: 5px red solid;
  padding: 24px;
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
  outline: 1px solid blue;
  color: var(--rose-900);
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header>Desserts</Header>
      <ProductCard />
      <Cart />
    </MainPageContainer>
  );
};
export default MainPage;
