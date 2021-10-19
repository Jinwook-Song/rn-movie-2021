import React from "react";
import { Text, View, Button } from "react-native";
import { theme } from "../colors";

export default ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: theme.black,
    }}
  >
    <Text>Movies</Text>
    <Button title="Movie" onPress={() => navigation.navigate("Detail")} />
  </View>
);
