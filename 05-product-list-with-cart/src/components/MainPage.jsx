import { useState } from "react";
import styled from "styled-components";
import ProductCard from "src/components/ProductCard";
import Cart from "src/components/Cart";
import productData from "src/data.json";

const MainPageContainer = styled.div`
  outline: 5px red solid;
  padding: 24px;
  width: 375px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Header = styled.header`
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
const MainPage = () => {
  const [cartItems, setCartItems] = useState(0)

  function handleClick () {
    setCartItems((prevCartItems) => prevCartItems+1);
  }

  return (
    <MainPageContainer>
      <Header>Desserts</Header>
      <ProductCardGroup>
        {productData.map((product, index) => (
          <ProductCard
            key={product.name}
            image={product.image.mobile}
            name={product.name}
            category={product.category}
            price={product.price}
            onAddToCart={handleClick}
          />
        ))}
      </ProductCardGroup>
      <Cart cartItems={cartItems} />
    </MainPageContainer>
  );
};
export default MainPage;
