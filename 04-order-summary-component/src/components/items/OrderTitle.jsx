import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 16px;
    height: 29px;
    font-size: 22px;
  }
  p {
    width: 80%;
    line-height: 25px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (min-width: 376px) {
    font-size: 28px;

    h1 {
      height: 37px;
    }
    p {
      width: 78%;
      line-height: 26px;
      font-size: 16px;
    }
  }
`;


const OrderTitle = () => {
  return (
    <TitleContainer>
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
    </TitleContainer>
  );
};
export default OrderTitle;
