import React from "react";
import Proptypes from "prop-types";
import { ScrollView } from "react-native";
import Title from "./Title";

const HorizontalSlider = ({ title, children }) => (
  <>
    <Title title={title} />
    <ScrollView
      style={{ marginVertical: 20, marginBottom: 40 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
    >
      {children}
    </ScrollView>
  </>
);

HorizontalSlider.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default HorizontalSlider;
