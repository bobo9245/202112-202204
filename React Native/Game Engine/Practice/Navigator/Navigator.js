import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CreateNativeStackNavigator } from "@react-navigation/native-stack";
import { StackRouter } from "react-navigation";

const Stack = CreateNativeStackNavigator();

const Navigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
        initialRouteName="Main"
      >
        <Stack.Screen name="MainScreen" component={Main} />
        <Stack.Screen name="Game1" component={Game1} />
        <Stack.Screen name="Game2" component={Game2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
