import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import { theme } from "../colors";

const Text = styled.Text`
  color: ${theme.base};
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
`;

const Title = ({ title }) => <Text>{title}</Text>;

Title.prototype = {
  title: Proptypes.string.isRequired,
};

export default Title;
