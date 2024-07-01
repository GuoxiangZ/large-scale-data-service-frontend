import styled from "styled-components";


const FilterContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #000, #333);

`;

const SearchBar = styled.div`
  width: 30%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: white;
  line-height: 28px;
`;

const Form = styled.input`
  width: 27%;
  height: 20%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #854CE6;
    box-shadow: 2px 2px 10px rgba(133, 76, 230, 0.5);
  }

`;
const ApplyButton = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600; 
  color: white;
  background-color: #854CE6;
  border: none;
  border-radius: 8px; 
  cursor: pointer;
  
  

  &:hover {
    background-color: #5a3cb6;
  }

`;

function Filter(){
    return(
      <FilterContainer>
        <SearchBar>
            <Text> Catalog</Text>
            <Form/>

        </SearchBar>

        <SearchBar>
            <Text> CreateDate</Text>
            <Form/>
        </SearchBar>
        <ApplyButton> Apply </ApplyButton>
      </FilterContainer>
  
    )
  
  
  }
  export default Filter;
  