import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import { theme } from "../colors";
import Poseter from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  align-items: center;
  margin-right: 10px;
  margin-top: 20px;
`;
const Title = styled.Text`
  color: ${theme.green};
  font-weight: 600;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poseter url={apiImage(poster)} />
      <Title>
        {title.length > 10 ? title.slice(0, 10).concat("...") : title}
      </Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

Vertical.prototype = {
  poster: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Vertical;
