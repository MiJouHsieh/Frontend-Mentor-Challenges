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
const ProductCardGroup = styled.div`
  outline: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
;
const MainPage = () => {
  return (
    <MainPageContainer>
      <Header>Desserts</Header>
      <ProductCardGroup>
        <ProductCard />
      </ProductCardGroup>
      <Cart />
    </MainPageContainer>
  );
};
export default MainPage;
