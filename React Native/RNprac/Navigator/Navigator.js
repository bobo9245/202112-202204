import React from "react";

import {Image} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {Home} from '../Screens/Main/Home';
import {Page} from '../Screens/Main/Page';
import {Setting} from '../Screens/Setting/Setting';

const Tab = createBottomTabNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
                case "Home":
                  iconName = focused
                    ? require("../assets/images/home_solid.png")
                    : require("../assets/images/home_default.png");
                  break;
                
                case "Page":
                  iconName = focused
                    ? require("../assets/images/file_solid.png")
                    : require("../assets/images/file_default.png");
                  break;
                
                case "Setting":
                  iconName = focused
                    ? require("../assets/images/setting_solid.png")
                    : require("../assets/images/setting_default.png");
                  break;
                default:
                    break;
              }
            return <Image source={iconName} style={{width:25, height:25}}/>
          },
        })}
        tabBarOptions={{activeTintColor:'tomato', inactiveTintColor:'gray'}}
      >
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Page" component={Page}/>
          <Tab.Screen name="Setting" component={Setting}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};