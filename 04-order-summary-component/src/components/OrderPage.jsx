import {  OrderTitle, OrderDetails, ActionButtons } from 'src/components/items'
import  TopImage from "src/components/TopImage";
import styled from "styled-components";

const StyledContainer = styled.div`
  outline: 1px solid red;
  border-radius: 20px;
  width: 100%;
  max-width: 327px;
  height: 567px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const InfoContainer = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const OrderPage = () => {
  return (
    <StyledContainer>
      <TopImage />
      <InfoContainer>
        <OrderTitle />
        <OrderDetails />
        <ActionButtons />
      </InfoContainer>
    </StyledContainer>
  );
}

export default OrderPage