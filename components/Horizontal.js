import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import { theme } from "../colors";
import Poster from "./Poster";
import Votes from "./Votes";
import { trimText, formatDate } from "../utils";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  padding-left: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: flex-start;
`;
const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 10px;
`;

const Title = styled.Text`
  color: ${theme.green};
  font-weight: 600;
  margin-bottom: 5px;
`;

const ReleaseContainer = styled.View`
  flex-direction: row;
`;

const ReleaseDate = styled.Text`
  color: ${theme.yellow};
  font-size: 12px;
  opacity: 0.8;
  margin-left: 10px;
  font-weight: 600;
`;

const Overview = styled.Text`
  color: ${theme.white};
  opacity: 0.8;
  font-size: 12px;
  margin-top: 5px;
`;

const Horizontal = ({ id, poster, title, votes, overview, releaseDate }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", {
      id,
      poster,
      title,
      votes,
      overview,
      releaseDate,
    });
  };
  return (
    <TouchableOpacity onPress={goToDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          <ReleaseContainer>
            <Votes votes={votes} />
            {releaseDate ? <ReleaseDate>{releaseDate}</ReleaseDate> : null}
          </ReleaseContainer>
          <Overview>{trimText(overview, 140)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  vote: Proptypes.number,
  overview: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  releaseDate: Proptypes.string,
};

export default Horizontal;
