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
const ProductInfo = ({ category, name, price }) => {
  return (
    <div>
      <Type>{category}</Type>
      <ProductName>{name}</ProductName>
      <ProductPrice>${price.toFixed(2)}</ProductPrice>
    </div>
  );
};
export default ProductInfo;
