import styled from "styled-components";

const CitySearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  padding-top: 24px;
`;

const TextAreaContainer = styled.div`
  display: center;
  background-color: white;
  width: 50%;
  border-radius: 12px;
  padding: 6px 12px;
`;

const TextArea = styled.input`
  height: 32px;
  font-size: 20px;
  width: 100%;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  text-align: center;
  color: white;
  width: 10%;
  background-color: #039dfc;
  font-size: 16px;
  margin-left: 12px;
  border-radius: 12px;
  height: 42px;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: #0356fc;
  }
`;

// props -> destructuring
const CitySearch = ({ handleChange, search, zipIsSearch }) => {
  return (
    <div>
      <CitySearchContainer>
        <TextAreaContainer>
          <form>
            <TextArea
              placeholder="Enter ZIP code"
              onChange={handleChange}
              value={search}
            />
          </form>
        </TextAreaContainer>
        <SearchButton onClick={zipIsSearch}>Search</SearchButton>
      </CitySearchContainer>
    </div>
  );
};

export default CitySearch;
