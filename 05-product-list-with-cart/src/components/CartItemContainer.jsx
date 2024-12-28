import styled from "styled-components";
import IconRemoveItem from "src/assets/images/icon-remove-item.svg?react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  hr {
    border: 1px solid var(--rose-100);
    width: 100%;
  }
`;
const CartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  div {
    display: flex;
    gap: 8px;
  }
`;

const ItemName = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--rose-900);
`;
const ItemNumber = styled.span`
  color: var(--red);
  font-weight: 600;
`;
const ItemPrice = styled.span`
  color: var(--rose-500);
`;
const ItemTotalPrice = styled.span`
  color: var(--rose-500);
  font-weight: 600;
`;

const DeleteButton = styled.button`
  border: 1px solid var(--rose-400);
  width: 20px;
  height: 20px;
  line-height: 16px;
  background: none;
  color: var(--rose-400);
  font-size: 16px;
  font-weight: 600;
  border-radius: 40px;
  svg {
    color: var(--red);
  }
`;

const CartItemContainer = () => {
  return (
        <Container>
          <CartItem>
            <CartItemInfo>
              <ItemName>classic Tiramisu</ItemName>
              <div>
                <ItemNumber>1x</ItemNumber>
                <ItemPrice>@5.50</ItemPrice>
                <ItemTotalPrice>$5.50</ItemTotalPrice>
              </div>
            </CartItemInfo>
            <DeleteButton>
              <IconRemoveItem />
            </DeleteButton>
          </CartItem>
          <hr />
          <CartItem>
            <CartItemInfo>
              <ItemName>classic Tiramisu</ItemName>
              <div>
                <ItemNumber>1x</ItemNumber>
                <ItemPrice>@5.50</ItemPrice>
                <ItemTotalPrice>$5.50</ItemTotalPrice>
              </div>
            </CartItemInfo>
            <DeleteButton>
              <IconRemoveItem />
            </DeleteButton>
          </CartItem>
        </Container>
  );
};
export default CartItemContainer;
