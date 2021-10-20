import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollContainer from "../../components/ScrollContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const PopularContainer = styled.View``;

const UpcommingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {nowPlaying?.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.title}
              backgroundImage={movie.backdrop_path}
              votes={movie.vote_average}
              overview={movie.overview}
              poster={movie.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <PopularContainer>
        <Title title={"Popular Movies"} />
        <ScrollView
          style={{ marginVertical: 20, marginBottom: 40 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </ScrollView>
        <Title title={"Comming Soon"} />
        <UpcommingContainer>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
              overview={movie.overview}
              releaseDate={movie.release_date}
            />
          ))}
        </UpcommingContainer>
      </PopularContainer>
    </>
  </ScrollContainer>
);
