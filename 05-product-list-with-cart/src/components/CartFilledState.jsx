import styled from "styled-components";
import IconCarbonNeutral from "src/assets/images/icon-carbon-neutral.svg?react";
import CartItemContainer from "src/components/CartItemContainer";

const CartInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  hr {
    border: 1px solid var(--rose-100);
    width: 100%;
  }
`;
const TotalContainer = styled.div`
  width: 100%;
  height: 32px;
  color: var(--rose-900);
  font-size: 14px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TotalPrice = styled.span`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 700;
`;

const CarbonNeutralBadge = styled.div`
  padding: 16px;
  width: 100%;

  background: var(--rose-50);
  display: flex;
  gap: 8px;
  border-radius: 8px;
  svg {
    width: 20px;
    height: 20px;
  }

  p {
    color: var(--rose-90);
    font-size: 14px;
    font-weight: 400;
    span {
      font-weight: 600;
    }
  }
`;

const Button = styled.button`
  padding: 0 24px; 
  border: none;
  width: 100%;
  height: 53px;
  line-height: 16px;
  background: var(--red);
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  border-radius: 40px;
`;

const CartFilledState = () => {
  return (
    <>
      <CartInfoContainer>
        <CartItemContainer />

        <hr />
        <TotalContainer>
          <span>Order Total</span>
          <TotalPrice>$46.50</TotalPrice>
        </TotalContainer>
        <CarbonNeutralBadge>
          <IconCarbonNeutral />
          <p>
            This is a <span> carbon-neutral</span> delivery
          </p>
        </CarbonNeutralBadge>
        <Button>Confirm Order</Button>
      </CartInfoContainer>
    </>
  );
};
export default CartFilledState;