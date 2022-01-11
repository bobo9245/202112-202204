import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const Page = () =>{
    return(
        <View style = {styles.container}>
            <Text>It's My Page !</Text>
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