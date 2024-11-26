import styled from "styled-components";
import MusicIcon from 'src/assets/images/icon-music.svg'

const DetailsContainer = styled.div`
  padding: 16px;
  // outline: 1px solid red;
  border-radius: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--very-pale-blue);
  width: 85%;
  height: 81px;
`;

const MusicIconContainer = styled.div`
  width: 48px;
  height: 48px;
`;

const DetailsInfo = styled.div`
  // outline: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  height: 48px;

  h3 {
    line-height: 19px;
    font-weight: 900;
    color: var(--dark-blue);
  }
  p {
    font-weight: 500;
    color: var(--desaturated-blue);
  }
`;
const ChangeButton = styled.button`
  padding: 0;
  display: flex; /* 使用 Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center;
  height: 20px;
  // line-height: 20px;//無效
  font-size: 13px;
  font-weight: 700;
  border: 0px solid transparent;
  background-color: transparent;
  cursor: pointer;
  color: var(--bright-blue);
  text-decoration: underline;
  text-decoration-thickness: 1px; /* 底線的粗細 */
  text-underline-offset: 3px; /* 調整底線與文字的距離 */

  &:hover,
  &:focus,
  &:active {
    color: var(--dark-blue);
    border: 0px solid transparent;
    background-color: transparent;
  }
`;
const OrderDetails = () => {
  return (
    <DetailsContainer>
      <MusicIconContainer>
        <img src={MusicIcon} alt="Music Icon" />
      </MusicIconContainer>
      <DetailsInfo>
        <h3>Annual Plan</h3>
        <p>$59.99/year</p>
      </DetailsInfo>
      <ChangeButton>
        Change
      </ChangeButton>
    </DetailsContainer>
  );
};
export default OrderDetails;
