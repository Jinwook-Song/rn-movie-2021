import React from "react";
import { TouchableOpacity } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import styled from "styled-components/native";
import { theme } from "../../colors";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const Text = styled.Text`
  color: ${theme.base};
  font-weight: 600;
  margin-left: 10px;
`;

const Link = ({ onPress, text, icon }) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <Fontisto name={icon} color={theme.base} size={20} />
      <Text>{text}</Text>
    </Container>
  </TouchableOpacity>
);

export default Link;
