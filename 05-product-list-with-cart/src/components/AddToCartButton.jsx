import styled from "styled-components";
import IconAddToCart from "src/assets/images/icon-add-to-cart.svg?react";

const Button = styled.button`
  padding: 12px;
  width: 160px;
  height: 44px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  top: -22px;
  background: var(--white);
  border: 1px solid var(--rose-400);
  color: var(--rose-900);
  font-size: 14px;
  font-weight: 600;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const AddToCartButton = () => {
  return <Button><IconAddToCart/>Add To Cart</Button>;
};
export default AddToCartButton;