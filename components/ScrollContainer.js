import React from "react";
import Proptypes from "prop-types";
import { ActivityIndicator, ScrollView } from "react-native";
import { theme } from "../colors";

const ScrollContainer = ({ loading, children }) => (
  <ScrollView
    style={{ backgroundColor: theme.black }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color={theme.green} size={"large"} />
    ) : (
      children
    )}
  </ScrollView>
);

ScrollContainer.prototype = {
  loading: Proptypes.bool.isRequired,
  children: Proptypes.node.isRequired,
};

export default ScrollContainer;
