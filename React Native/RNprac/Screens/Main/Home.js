import React from 'react'
import {View, Text, StyleSheet} from 'react-native';


export const Home = () => {
    return (
        <View style = {styles.container}>
            <Text>It's Home!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
})