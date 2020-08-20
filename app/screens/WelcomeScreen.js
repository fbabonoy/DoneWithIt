import React from "react";
import { View, Image, StyleSheet, Text, ImageBackground } from "react-native";

import Colors from "../config/Colors";

function WelcomeScreen(props) {
  return (
    <View style={style.container}>
      <ImageBackground
        style={style.imageBackground}
        source={require("../assets/background.jpg")}
      >
        <View style={style.logoContainer}>
          <Image
            style={style.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={{ alignSelf: "center" }}>
            {"Sell What You Don't need"}
          </Text>
        </View>
        <View style={style.loginButton}></View>
        <View style={style.registerButton}></View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  loginButton: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  registerButton: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  logoContainer: {
    alignItems: "center",
    flex: 9,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: "15%",
  },
});

export default WelcomeScreen;
