import styled from "styled-components";

const Type = styled.p`
  color: var(--rose-500);
  font-size: 14px;
  font-weight: 400;
`;
const ProductName = styled.p`
  color: var(--rose-900);
  font-size: 16px;
  font-weight: 600;
`;
const ProductPrice = styled.p`
  color: var(--red);
  font-size: 16px;
  font-weight: 600;
`;
const ProductInfo = () => {
  return (
    <div>
      <Type>Waffle</Type>
      <ProductName>Waffle with Berries</ProductName>
      <ProductPrice>$6.50</ProductPrice>
    </div>
  );
};
export default ProductInfo;
