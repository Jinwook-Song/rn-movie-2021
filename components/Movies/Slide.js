import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import Proptypes from "prop-types";
import { apiImage } from "../../api";
import { theme } from "../../colors";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  background-color: ${theme.green2};
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
`;

const Slide = ({ id, title, backgroundImage, votes, overview }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
  </Container>
);

Slide.prototype = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  backgroundImage: Proptypes.string.isRequired,
  vote: Proptypes.number.isRequired,
  overview: Proptypes.string.isRequired,
};

export default Slide;
