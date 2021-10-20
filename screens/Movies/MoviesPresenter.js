import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { theme } from "../../colors";
import { ActivityIndicator, Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
  flex: 1;
  background-color: ${theme.black};
  justify-content: center;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {!loading ? (
      <ActivityIndicator color={theme.green2} size={"large"} />
    ) : (
      <>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying?.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              backgroundImage={movie.backdrop_path}
              vote={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </Swiper>
      </>
    )}
  </Container>
);
