import { useState } from 'react'
import styled from "styled-components";
import iconSearch from "src/assets/icon-search.svg";

const SearchForm = styled.form`
  margin-bottom: 16px;
  padding: 6.5px 6.5px 6.5px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background: ${(props) => props.theme.searchFormBgColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  span,
  img {
    width: 20px;
    height: 20px;
  }
`;
const Input = styled.input`
  background: ${(props) => props.theme.searchFormBgColor};
  color: ${(props) => props.theme.inputValueColor};
  border: 0px;
  &::placeholder {
    color: ${(props) => props.theme.textColor};
    letter-spacing: -1px;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.searchFormBgColor};
  }
  border: 1px solid red;
  width: 184px;
`;

const SearchBtn = styled.button`
  background: ${(props) => props.theme.inputBgColor};
  width: 84px;
  height: 46px;
  font-size: 16px;
  font-weight: bold;
  background: ${(props) =>
    props.disabled ? props.theme.searchBtnBgColor : "#60ABFF"};
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(inputValue.trim()) {
      console.log('Search for:', inputValue)
    }
  }

  return (
    <SearchForm onSubmit={handleSubmit}>
      <span>
        <img src={iconSearch} alt="search input" />
      </span>
      <Input
        type="text"
        placeholder="Search GitHub username..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <SearchBtn disabled={inputValue.length === 0}>Search</SearchBtn>
    </SearchForm>
  );
}
