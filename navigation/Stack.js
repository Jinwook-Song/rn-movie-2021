import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name={"Home"} component={Home} />
    <Stack.Screen name={"Detail"} component={Detail} />
  </Stack.Navigator>
);
