import React from "react";
import Proptypes from "prop-types";
import { ScrollView, View } from "react-native";
import Title from "./Title";

const HorizontalSlider = ({ title, children }) => (
  <View>
    <Title title={title} />
    <ScrollView
      style={{ marginVertical: 20, marginBottom: 40 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {children}
    </ScrollView>
  </View>
);

HorizontalSlider.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default HorizontalSlider;
