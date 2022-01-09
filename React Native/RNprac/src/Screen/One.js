import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
`;

const StyledText = styled.Text`
    font-size : 30px;
    margin-bottom : 10px;
`;

const One = ({route}) =>{
    return(
        <Container>
            <StyledText>First Item.</StyledText>
            <StyledText>ID :</StyledText>
            <StyledText>Name :</StyledText>
        </Container>
    );
};

export default One;