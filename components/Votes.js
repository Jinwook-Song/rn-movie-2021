import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import { theme } from "../colors";

const Container = styled.Text`
  color: ${theme.yellow};
  opacity: 0.8;
  font-weight: 600;
  font-size: 12px;
`;

const Votes = ({ votes }) => <Container>⭐ {votes} / 10</Container>;

Votes.prototype = {
  votes: Proptypes.number.isRequired,
};

export default Votes;
