import React, { useState } from "react";

import * as Font from "expo-font";
import { View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

import tw from "tailwind-react-native-classnames";

// Redux store file
import store from "./store.js";

enableScreens();

// Comfortably load your fonts before app starts up
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {
          console.log(error);
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

export default App;
