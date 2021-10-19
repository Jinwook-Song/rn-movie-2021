import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {};
  const onFinish = () => setIsReady(true);
  return isReady ? (
    <Text>Ready!</Text>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}
