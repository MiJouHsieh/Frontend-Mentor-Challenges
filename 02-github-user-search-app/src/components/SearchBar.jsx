import { useState } from 'react'
import styled from "styled-components";
import iconSearch from "src/assets/icon-search.svg";
import { fetchUserData } from "src/api"; // 導入 API 函數

const SearchForm = styled.form`
  margin-bottom: 16px;
  padding: 6.5px 6.5px 6.5px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  background: ${(props) => props.theme.sectionBgColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  div {
    margin:  0 10px 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    width: 100%;
    span {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 376px) {
    margin-bottom: 24px;
    padding: 9.5px;

    span,
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
const Input = styled.input`
  flex-grow: 1;
  background: ${(props) => props.theme.sectionBgColor};
  width: 184px;
  color: ${(props) => props.theme.inputValueColor};
  border: 0px;
  &::placeholder {
    color: ${(props) => props.theme.textColor};
    letter-spacing: -1px;
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.sectionBgColor};
  }
  @media screen and (min-width: 376px) {
    font-size: 18px;
    line-height: 25px;
    width: 100%;
  }
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

  @media screen and (min-width: 376px) {
    width: 106px;
    height: 50px;

  }
`;

export default function SearchBar({ setUserData }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      try {
        const data = await fetchUserData(inputValue);
        setUserData(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <div>
        <span>
          <img src={iconSearch} alt="search input" />
        </span>
        <Input
          type="text"
          placeholder="Search GitHub username..."
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <SearchBtn disabled={inputValue.length === 0}>Search</SearchBtn>
    </SearchForm>
  );
}
