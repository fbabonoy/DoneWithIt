import { Text, StyleSheet, Platform } from "react-native";
import React, { Children } from "react";

function AppText(children) {
  return <Text style={style.text}>{children}</Text>;
}
const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppText;
