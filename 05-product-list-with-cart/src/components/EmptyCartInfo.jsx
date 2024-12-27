import styled from "styled-components";
import ImageEmptyCart from "src/assets/images/illustration-empty-cart.svg?react";

const CartInfoContainer = styled.div`
  outline: 1px solid blue;
  padding: 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const CartInfoText = styled.p`
  outline: 1px solid blue;
  color: var(--rose-500);
  font-size: 14px;
  font-weight: 600;
`;

const EmptyCartInfo = () => {
  return (
    < >
      <CartInfoContainer>
        <ImageEmptyCart />
        <CartInfoText>Your added items will appear here</CartInfoText>
      </CartInfoContainer>
    </>
  );
};
export default EmptyCartInfo;
