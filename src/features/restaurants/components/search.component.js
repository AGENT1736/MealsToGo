import React, {useContext, useState} from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
    const {keyword} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);
return(
    <SearchContainer>
        <Searchbar 
            placeholder="Enter your location!"
            value={searchKeyword}
            onSubmitEditing={() => {
                Search(searchKeyword);
            }}
            onChangeText={(text) => {
                setSearchKeyword(text);
            }}  
        />
    </SearchContainer>
    );
};