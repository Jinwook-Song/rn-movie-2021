import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import Fontisto from "react-native-vector-icons/Fontisto";

function bottomTabIcon(focused, tabName) {
  return (
    <Fontisto
      name={tabName}
      size={25}
      color={`${focused ? "#e91e63" : "black"}`}
    />
  );
}

const Tabs = createBottomTabNavigator();

export default ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tabs.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "home"),
        }}
      />
      <Tabs.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "tv"),
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
        name="Favs"
        component={Favs}
        options={{
          tabBarIcon: ({ focused }) => bottomTabIcon(focused, "favorite"),
        }}
      />
    </Tabs.Navigator>
  );
};
