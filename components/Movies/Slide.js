import React from "react";
import styled from "styled-components/native";
import Proptypes from "prop-types";
import { apiImage } from "../../api";
import { theme } from "../../colors";
import Poseter from "../Poster";
import { TouchableOpacity } from "react-native";
import Votes from "../Votes";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${theme.green};
  font-weight: 800;
  font-size: 18px;
  margin-bottom: 10px;
`;

const VotesContainer = styled.View`
  margin-bottom: 5px;
`;

const Overview = styled.Text`
  color: ${theme.white};
  opacity: 0.6;
  font-size: 12px;
  margin-bottom: 5px;
`;

const Button = styled.View`
  background-color: ${theme.base};
  opacity: 0.9;
  padding: 3px 10px;
  border-radius: 3px;
`;
const ButtonText = styled.Text`
  color: ${theme.white};
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    <BG source={{ uri: apiImage(backgroundImage) }} />
    <Content>
      <Poseter url={apiImage(poster)} />
      <Data>
        <Title>
          {title.length > 40 ? title.slice(0, 40).concat("...") : title}
        </Title>
        <VotesContainer>
          <Votes votes={votes} />
        </VotesContainer>
        <Overview>
          {overview.length > 120
            ? overview.slice(0, 120).concat("...")
            : overview}
        </Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>see more</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
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
