import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import {Button, StyleSheet} from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const items = [
  //여기는 매 주 추가를 해 주는 곳입니다 !
  { _id: 1, name: "0103~0109" },
];

const list = ({navigation}) => {
  const _onPress = item => {
    navigation.navigate('One', {id : item._id, name:item.name});
  };
  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map(item=>(
        <Button key={item._id} title = {item.name} onpress = {navigation.navigate('One')}/>
      ))}
    </Container>
  );
};


export default list;
