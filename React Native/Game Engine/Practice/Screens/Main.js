import React from 'react'
import {View, Button, StyleSheet} from 'react-native';

const Main = (props) =>{
    return(
        <View style = {styles.container}>
            <Button style={styles.Button} title="1번게임 - 조합" onPress={()=>{props.navigation.navigate("Game1")}}></Button>
            <Button style={styles.Button}title = "2번게임 - 레이저퍼즐" onPress ={()=>{props.navigation.navigate("Game2")}}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        width :"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-between",
    },
    Button:{
        width:200,
        height:80,
        margin:60,
        color:'aquamarine',
    }
})
