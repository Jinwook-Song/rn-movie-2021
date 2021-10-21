import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import { theme } from "../colors";
import Poster from "./Poster";
import { apiImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { trimText } from "../utils";

const Container = styled.View`
  align-items: center;
  margin-right: 10px;
`;
const Title = styled.Text`
  color: ${theme.green};
  font-weight: 600;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ isTv = false, id, poster, title, votes }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { isTv, id, poster, title, votes });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: Proptypes.number.isRequired,
  poster: Proptypes.string,
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Vertical;
