import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [details, setDetails] = useState({
    title,
    backgroundImage,
    poster,
    votes,
    overview,
  });
  const getData = async () => {
    const [getMovie, getMovieError] = await movieApi.movie(id);
    setDetails({
      ...getMovie,
      title: getMovie.title,
      backgroundImage: getMovie.backdrop_path,
      poster: getMovie.poster_path,
      votes: getMovie.vote_average,
      overview: getMovie.overview,
    });
  };
  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  }, []);
  return <DetailPresenter {...details} />;
};
