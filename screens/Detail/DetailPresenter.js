import React, { useEffect } from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import { theme } from "../../colors";
import Poster from "../../components/Poster";
import ScrollContainer from "../../components/ScrollContainer";
import Votes from "../../components/Votes";

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
  margin-top: 30px;
  padding: 0px 30px;
  padding-bottom: 50px;
`;

const DataName = styled.Text`
  margin-top: 30px;
  color: ${theme.green};
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

export default ({ results, loading }) => (
  <ScrollContainer loading={false} refreshFn={() => {}}>
    <HeaderContainer>
      <BG source={{ uri: apiImage(results.backgroundImage) }} />
      <Container>
        <Poster url={results.poster} />
        <Info>
          <Title>{results.title}</Title>
          <Votes votes={results.votes} />
        </Info>
      </Container>
    </HeaderContainer>
    <DataContainer>
      {results.overview?.length !== 0 && (
        <>
          <DataName style={{ color: theme.base }}>Overview</DataName>
          <DataValue>{results.overview}</DataValue>
        </>
      )}
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 30 }}
          color={theme.green}
          size={"large"}
        />
      )}
      {results.spoken_languages && results.spoken_languages.length !== 0 && (
        <>
          <DataName>Languages</DataName>
          <DataValue>
            {results.spoken_languages.map((lang) => `${lang.name} `)}
          </DataValue>
        </>
      )}
      {results.release_date?.length !== 0 && (
        <>
          <DataName style={{ color: theme.base }}>Realease Date</DataName>
          <DataValue>{results.release_date}</DataValue>
        </>
      )}
      {results.status?.length !== 0 && (
        <>
          <DataName>Status</DataName>
          <DataValue>{results.status}</DataValue>
        </>
      )}
      {results.runtime?.length !== 0 && (
        <>
          <DataName style={{ color: theme.base }}>Runtime</DataName>
          <DataValue>{results.runtime} min</DataValue>
        </>
      )}
      {results.first_air_date?.length !== 0 && (
        <>
          <DataName>First Air Date</DataName>
          <DataValue>{results.first_air_date}</DataValue>
        </>
      )}
      {results.genres && (
        <>
          <DataName style={{ color: theme.base }}>Genres</DataName>
          <DataValue>
            {results.genres.map((g, index) =>
              index + 1 === results.genres.length ? g.name : `${g.name}, `
            )}
          </DataValue>
        </>
      )}
    </DataContainer>
  </ScrollContainer>
);
