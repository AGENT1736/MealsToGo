import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, FlatList } from "react-native";
import { ResturantInfoCard } from "../components/resturants-info-card.components";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  }
})``;



export const ResturantsScreen =() =>(
      <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantList 
          data = {[
            {name:1},
            {name:2},
            {name:3},
            {name:4},
            {name:5},
            {name:6},
            {name:7},
            {name:8},
            {name:9},
            {name:10},
            {name:11},
            {name:12},
            {name:13},
            {name:14},
          ]}
          renderItem={() => (
          <Spacer position="bottom" >
          <ResturantInfoCard />
          </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
          
        
      </SafeArea>
);




const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16,
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue",
    },
  });