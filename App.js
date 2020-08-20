import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "./app/components/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>
        i love react native! my first react native app! here's some more text.
      </AppText>
    </View>
  );
}
