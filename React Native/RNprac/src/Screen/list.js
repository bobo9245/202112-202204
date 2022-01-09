import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import { Button, StyleSheet } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;
const Button2 = styled(Button)``;

const items = [
  //여기는 매 주 추가를 해 주는 곳입니다 !
  { _id: 1, name: "One" },
  { _id: 2, name: "Two"},
  { _id: 3, name: "Three"},
  { _id: 4, name: "Four"},
];

const list = ({ navigation }) => {
  return (
    <Container>
      <StyledText>List</StyledText>
      {items.map((item) => (
        <Button2 transparent key={item._id} title={item.name} onPress={navigation.navigate("One")} />
      ))}
    </Container>
  );
};

export default list;
