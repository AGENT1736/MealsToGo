import React from "react";
import { Text } from "react-native";
import {createStackNavigator,TransitionPresets} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";


const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator headerMode ="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestaurantStack.screen
                name="Restaurant"
                component={RestaurantsScreen}
            />
            <RestaurantStack.screen
                name="RestaurantDetail"
                component={() => <Text>Restaurant Detail</Text>}
            />
        </RestaurantStack.Navigator>
    );
};