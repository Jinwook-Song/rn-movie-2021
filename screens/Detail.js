import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { theme } from "../colors";
import Poster from "../components/Poster";
import ScrollContainer from "../components/ScrollContainer";
import Votes from "../components/Votes";

const HeaderContainer = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  justify-content: flex-end;
  align-items: center;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: ${theme.green};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const DataContainer = styled.View`
  margin-top: 50px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: ${theme.white};
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 5px;
  font-size: 15px;
`;

const DataValue = styled.Text`
  color: ${theme.white};
  opacity: 0.7;
  font-weight: 500;
`;

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  useEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return (
    <ScrollContainer loading={false} refreshFn={() => {}}>
      <HeaderContainer>
        <BG source={{ uri: apiImage(backgroundImage) }} />
        <Container>
          <Poster url={poster} />
          <Info>
            <Title>{title}</Title>
            <Votes votes={votes} />
          </Info>
        </Container>
      </HeaderContainer>
      <DataContainer>
        {overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{overview}</DataValue>
          </>
        )}
      </DataContainer>
    </ScrollContainer>
  );
};
