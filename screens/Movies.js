import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { theme } from "../colors";
import { movieApi } from "../api";

export default () => {
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popular, popularError] = await movieApi.popular();
  };
  useEffect(() => {
    getData();
  }, []);
  return <View style={{ flex: 1, backgroundColor: theme.black }}></View>;
};
