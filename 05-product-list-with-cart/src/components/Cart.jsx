import styled from "styled-components";
import EmptyCartInfo from "src/components/EmptyCartInfo";

const CartSection = styled.section`
  outline: 1px solid blue;
  padding: 24px;
  width: 100%;
  border-radius: 12px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  gap: 24px;
  svg {
    outline: 1px solid blue;
  }
`;

const CartTitle = styled.p`
  outline: 1px solid blue;
  color: var(--red);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
`;

const Cart = () => {
  return (
    <CartSection>
      <CartTitle>Your Cart (0)</CartTitle>
      <EmptyCartInfo />
    </CartSection>
  );
};
export default Cart;