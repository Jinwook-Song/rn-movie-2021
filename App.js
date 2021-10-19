import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text, Image } from "react-native";
import { Asset } from "expo-asset";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1586993451228-09818021e309?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png"),
    ]);
    console.log(images);
  };
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
