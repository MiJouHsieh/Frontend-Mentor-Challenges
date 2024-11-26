import {  OrderTitle, OrderDetails, ActionButtons } from 'src/components/items'
import  TopImage from "src/components/TopImage";
import styled from "styled-components";

const StyledContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  max-width: 327px;
  height: 567px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(100, 100, 255, 0.2);

  @media screen and (min-width: 376px) {
    max-width: 450px;
    height: 697px;
  }
`;

const InfoContainer = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  @media screen and (min-width: 376px) {
    padding: 45px 0;
    gap: 32px;
  }
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