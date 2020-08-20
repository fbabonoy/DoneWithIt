import React from "react";
import { StyleSheet, View, Image, SafeAreaView } from "react-native";

import Colors from "../config/Colors";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: Colors.secondary,
    width: 40,
    height: 40,
    position: "absolute",
    top: 40,
    right: 30,
  },

  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  safeArea: {
    backgroundColor: Colors.black,
    flex: 1,
  },
});

export default ViewImageScreen;
