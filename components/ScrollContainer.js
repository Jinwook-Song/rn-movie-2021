import React, { useState } from "react";
import Proptypes from "prop-types";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";
import { theme } from "../colors";

const ScrollContainer = ({ loading, children, refreshFn }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={theme.white}
        />
      }
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
};

ScrollContainer.propTypes = {
  loading: Proptypes.bool.isRequired,
  children: Proptypes.node.isRequired,
  refreshFn: Proptypes.func.isRequired,
};

export default ScrollContainer;
