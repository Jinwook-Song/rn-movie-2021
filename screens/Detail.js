import React from "react";
import { Button, Text, View } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>Detail</Text>
    <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
  </View>
);
