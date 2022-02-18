import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const SearchBoxPhrase = styled.h1`
  font-size:1.8rem;
  margin-top:2rem;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const SearchTextBox = styled.input`
  width: 35rem;
  border-radius: 17.5rem 0 0 17.5rem;
  padding-left:1.2rem;
  height: 3rem;
  font-size: 1.8rem;
`;

const SearchButtonContainer = styled.button`
  width:3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1.5px solid black;
  border-radius: 0 17.5rem 17.5rem 0;
  padding: 3px;
`;

function SearchBoxSearchButton() {
  return (
    <SearchButtonContainer>
      <MdSearch size="35" />
    </SearchButtonContainer>
  );
}

function SearchBox() {
  return (
    <>
      <SearchBoxPhrase>원하는 책을 검색해 보세요</SearchBoxPhrase>
      <SearchBoxContainer>
        <SearchTextBox placeholder="책 검색하기" />
        <SearchBoxSearchButton />
      </SearchBoxContainer>
    </>
  );
}

export default SearchBox;
