import styled from "styled-components";

const ButtonContainer = styled.div`
  outline: 1px solid BLUE;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  margin-bottom: 24px;
  height: 50px;
  width: 100%;
  font-size: 15px;
  font-weight: 900;
  box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.19);
`;
const CancelButton = styled.button`
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center;
  height: 20px;
  // line-height: 20px;//無效
  width: 100%;
  font-size: 15px;
  font-weight: 900;
  border: 0px solid transparent;
  background-color: transparent;
  cursor: pointer;
  color: var(--desaturated-blue);

  &:hover,
  &:focus,
  &:active {
    color: var(--dark-blue);
    border: 0px solid transparent;
    background-color: transparent;
  }
`;


const ActionButtons = () => {
  return (
    <ButtonContainer>
      <Button>Proceed to Payment</Button>
      <CancelButton>Cancel Order</CancelButton>
    </ButtonContainer>
  );
}
export default ActionButtons