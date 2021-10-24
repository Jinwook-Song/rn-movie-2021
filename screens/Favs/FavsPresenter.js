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
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
        bounciness: 20,
      }).start();
    },
  });
  return (
    <Container>
      {results?.map((result, index) => {
        if (index === topCover) {
          return (
            <Animated.View
              style={{
                ...styles,
                zIndex: 1,
                transform: [...position.getTranslateTransform()],
              }}
              key={result.id}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
        return (
          <Animated.View
            style={{
              ...styles,
            }}
            key={result.id}
            {...panResponder.panHandlers}
          >
            <Poster source={{ uri: apiImage(result.poster_path) }} />
          </Animated.View>
        );
      })}
    </Container>
  );
};
