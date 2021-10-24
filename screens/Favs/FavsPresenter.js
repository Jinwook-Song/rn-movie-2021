import React from "react";
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
  top: 80,
  height: HEIGHT / 1.5,
  width: "90%",
  position: "absolute",
};

export default ({ results }) => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
  });
  return (
    <Container>
      {results?.reverse().map((result) => (
        <Animated.View
          style={{
            ...styles,
            transform: [...position.getTranslateTransform()],
          }}
          key={result.id}
          {...panResponder.panHandlers}
        >
          <Poster source={{ uri: apiImage(result.poster_path) }} />
        </Animated.View>
      ))}
    </Container>
  );
};
