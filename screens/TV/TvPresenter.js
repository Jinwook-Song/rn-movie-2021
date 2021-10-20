import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slide from "../../components/Movies/Slide";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ refreshFn, loading, popular, topRated, today, thisWeek }) => (
  <ScrollContainer loading={loading} refreshFn={refreshFn}>
    <>
      <SliderContainer>
        <Swiper controlsEnabled={false} loop timeout={3}>
          {popular?.map((show) => (
            <Slide
              key={show.id}
              id={show.id}
              title={show.name}
              backgroundImage={show.backdrop_path}
              votes={show.vote_average}
              overview={show.overview}
              poster={show.poster_path}
            />
          ))}
        </Swiper>
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Airing Today"}>
          {today.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title="This Week">
          {thisWeek.map((show) => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title="Top Rated">
          {topRated.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
              overview={show.overview}
              releaseDate={show.first_air_date}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
