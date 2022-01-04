import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../Screen/main';
import List from '../Screen/list';
import One from '../Screen/0103-0109';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name="List" component = {List}/>
            <Stack.Screen name="Main" component = {Main}/>
            <Stack.Screen name="0103-0109" component = {One}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;