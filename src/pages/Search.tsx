import React from 'react'
import { styled } from 'styled-components';
import brandIndetity from '../BrandIdentity';
import Sections3 from '../views/Sections3';

const SearchBox = styled.div`
  width: 100%;
  margin: 24px auto;
  text-align: center;

  @media ${brandIndetity.mediaQuaries.mdD} {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
`;

const FilterBox = styled.div`
  width: 100%;
  margin: 0px auto;
  margin-top: 24px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media ${brandIndetity.mediaQuaries.mdD} {
    width: 80%;
    justify-content: space-between;
}
`;

const SearchInput = styled.input`
  width: 40%;
  padding: 12px 8px;
  border: 1px solid black;
  @media ${brandIndetity.mediaQuaries.mdD} {
    width: 70%;
    padding: 8px 6px;
}
`;

const SearchButton = styled.button`
  color: white;
  background-color: black;
  padding: 12px 24px;
  border: none;
  width: 10%;
  margin-left: 24px;
  @media ${brandIndetity.mediaQuaries.mdD} {
    width: 20%;
    padding: 8px 6px;
    margin-left: 0px;
}
`;

const FilterDropdown = styled.select`
  width: 20%;
  padding: 12px 8px;
  border: 1px solid black;

  @media ${brandIndetity.mediaQuaries.mdD} {
      width: 40%;
      margin-bottom: 12px;
      padding: 8px 6px;
  }
`;

function Search() {

    return (
        <>

            <SearchBox>
                <SearchInput type="text" placeholder="Enter your query" />
                <SearchButton> Search </SearchButton>
            </SearchBox>

            <FilterBox>
                <FilterDropdown>
                    <option value="filter1">Filter 1</option>
                    <option value="filter2">Filter 2</option>
                    <option value="filter3">Filter 3</option>
                </FilterDropdown>
                <FilterDropdown>
                    <option value="filter1">Filter 1</option>
                    <option value="filter2">Filter 2</option>
                    <option value="filter3">Filter 3</option>
                </FilterDropdown>
                <FilterDropdown>
                    <option value="filter1">Filter 1</option>
                    <option value="filter2">Filter 2</option>
                    <option value="filter3">Filter 3</option>
                </FilterDropdown>
                <FilterDropdown>
                    <option value="filter1">Filter 1</option>
                    <option value="filter2">Filter 2</option>
                    <option value="filter3">Filter 3</option>
                </FilterDropdown>
            </FilterBox>

        </>
    )
}

export default Search
