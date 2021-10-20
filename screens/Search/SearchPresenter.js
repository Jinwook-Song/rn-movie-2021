import React from "react";
import styled from "styled-components/native";
import { theme } from "../../colors";
import Input from "../../components/Search/Input";

const Container = styled.ScrollView`
  background-color: ${theme.black};
`;

const Text = styled.Text`
  color: ${theme.white};
`;

export default () => (
  <Container>
    <Input placeholder={"Write a keyword"} />
  </Container>
);
