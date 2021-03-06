import React from "react";
import styled from "styled-components/native";
import { theme } from "../../colors";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/Search/Input";
import Vertical from "../../components/Vertical";

export default ({ movies, shows, onChange, onSubmit, keyword }) => (
  <ScrollContainer loading={false} refreshFn={onSubmit}>
    <Input
      placeholder={"Write a keyword..."}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies?.length !== 0 && (
      <HorizontalSlider title={"Movies:"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows?.length !== 0 && (
      <HorizontalSlider title={"Shows:"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            isTv={true}
            id={show.id}
            title={show.name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
