import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import UrlListing from "./components/urlListing";
import Footer from "./components/footer"
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <UrlListing />
      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a3b4a",
    alignItems: "center",
    justifyContent: "center",
  },
});
