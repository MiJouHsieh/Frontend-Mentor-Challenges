import styled from "styled-components";

const TitleContainer = styled.div`
  // margin-bottom: 24px;
  outline: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: space-between;
`;

const H1 = styled.h1`
  margin-bottom: 16px;
  outline: 1px solid red;
  line-height: 29px;
  font-size: 22px;
`;

const P = styled.p`
  outline: 1px solid red;
  width: 80%;
  line-height: 25px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;


const OrderTitle = () => {
  return (
    <TitleContainer>
      <H1>Order Summary</H1>
      <P>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </P>
    </TitleContainer>
  );
};
export default OrderTitle;
