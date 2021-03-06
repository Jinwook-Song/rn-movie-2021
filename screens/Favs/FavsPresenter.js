import React, { useState } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components/native";
import { apiImage } from "../../api";
import { theme } from "../../colors";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  flex: 1;
  background-color: ${theme.black};
  align-items: center;
`;
const Card = styled.View``;
const Poster = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const styles = {
  top: 70,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

export default ({ results }) => {
  const [topCover, setTopConver] = useState(0);
  const nextCover = () => setTopConver((currentCover) => currentCover + 1);
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (event, { dx, dy }) => {
      if (dx >= 250) {
        Animated.spring(position, {
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCover);
      } else if (dx <= -250) {
        Animated.spring(position, {
          toValue: {
            x: -(WIDTH + 100),
            y: dy,
          },
          useNativeDriver: true,
        }).start(nextCover);
      } else {
        Animated.spring(position, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          bounciness: 20,
        }).start();
      }
    },
  });
  const rotationValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ["-10deg", "0deg", "10deg"],
    extrapolate: "clamp",
  });
  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolate: "clamp",
  });
  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });
  return (
    <Container>
      {results?.map((result, index) => {
        if (index < topCover) {
          return null;
        } else if (index === topCover) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [
                  { rotate: rotationValues },
                  ...position.getTranslateTransform(),
                ],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (index === topCover + 1) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: -index,
                opacity: 0,
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};
