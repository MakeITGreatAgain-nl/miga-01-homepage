import { Link } from "expo-router";
import React from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const logo = require("../../assets/logo/FullLogo_Transparent.png");

export default function Page() {
  return (
    <View className="flex flex-1">
      {/* <Header /> */}
      <Content />
      {/* <Footer /> */}
    </View>
  );
}

function Content() {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={logo} style={{ width: "100%" }} resizeMode="center" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
