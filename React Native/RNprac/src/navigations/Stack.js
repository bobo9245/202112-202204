import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../Screen/main';
import List from '../Screen/list';
import One from '../Screen/One';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name="Main" component = {Main}options={{headerTitle:'메인 페이지', headerTitleAlign:'center'}}/>
            <Stack.Screen name="List" component = {List} />
            <Stack.Screen name="One" component = {One} options={{headerTitle:'0103-0109', headerTitleAlign:'center'}}/>
        </Stack.Navigator>
    )
}

export default StackNavigation;