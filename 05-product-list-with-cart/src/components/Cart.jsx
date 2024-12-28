import styled from "styled-components";
// import CartEmptyState from "src/components/CartEmptyState";
import CartFilledState from "src/components/CartFilledState";


const CartSection = styled.section`
  padding: 24px;
  width: 100%;
  border-radius: 12px;
  background: var(--white);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CartTitle = styled.p`
  color: var(--red);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
`;

const Cart = () => {
  return (
    <CartSection>
      <CartTitle>Your Cart (0)</CartTitle>
      {/* <CartEmptyState /> */}
      <CartFilledState />
    </CartSection>
  );
};
export default Cart;