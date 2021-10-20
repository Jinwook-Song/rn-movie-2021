import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import Title from "./Title";

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({ title, children }) => (
  <>
    <Title title={title} />
    <Container>{children}</Container>
  </>
);

export default List;
