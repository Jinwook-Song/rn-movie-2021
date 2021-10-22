import React, { useState, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { isTv, id, title, backgroundImage, poster, votes, overview },
  },
}) => {
  const [details, setDetails] = useState({
    loading: true,
    results: {
      title,
      backgroundImage,
      poster,
      votes,
      overview,
      videos: {
        results: [],
      },
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetails({
      loading: false,
      results: {
        ...getDetail,
        title: getDetail.name || getDetail.title,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        votes: getDetail.vote_average,
        overview: getDetail.overview,
      },
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

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return <DetailPresenter openBrowser={openBrowser} {...details} />;
};
