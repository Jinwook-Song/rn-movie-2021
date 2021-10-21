import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";
import { theme } from "../colors";

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: theme.black,
        border: theme.black,
        shadowColor: theme.black,
      },
      headerTintColor: theme.base,
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
