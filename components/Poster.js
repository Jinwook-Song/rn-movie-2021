import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poseter = ({ url }) => <Image source={{ uri: url }} />;

Poseter.prototype = {
  url: Proptypes.string.isRequired,
};

export default Poseter;
