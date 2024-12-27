import styled from "styled-components";
import { AddToCartButton, ProductInfo } from "src/components";

const ProductCardContainer = styled.div`
  outline: 1px blue dotted;
  width: 100%;
  height: 319px;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 212px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img
          src="src/assets/images/image-waffle-mobile.jpg"
          alt="Product Image"
        />
      </ImageContainer>
      <AddToCartButton />
      <ProductInfo />
    </ProductCardContainer>
  );
};
export default ProductCard;
