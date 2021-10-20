import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/TV";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import Fontisto from "react-native-vector-icons/Fontisto";
import { theme } from "../colors";

function bottomTabIcon(focused, tabName) {
  return (
    <Fontisto
      name={tabName}
      size={25}
      color={`${focused ? theme.base : theme.gray}`}
    />
  );
}

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.base,
        tabBarInactiveTintColor: theme.gray,
        tabBarStyle: {
          backgroundColor: theme.black,
          borderTopColor: theme.black,
        },
        headerStyle: {
          backgroundColor: theme.black,
          borderBottomColor: theme.black,
          shadowColor: theme.black,
        },
        headerTintColor: theme.base,
      }}
    >
      <Tabs.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "tv"),
        }}
      />
      <Tabs.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "film"),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "search"),
        }}
      />
      <Tabs.Screen
        name="Discovery"
        component={Favs}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "star"),
        }}
      />
    </Tabs.Navigator>
  );
};
