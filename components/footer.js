import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./button"
export default function Footer() {
  return (
    <View style={styles.Footer}>
        <Button title="Add new url" />
    </View>
  );
}
const styles = StyleSheet.create({
  Footer: {
    width: "100%",
    backgroundColor: "#1b1c29",
    padding: 20,
    top:0
  },
  title:{
      color:"#4864e6",
      fontSize:22,
      fontWeight:"bold"
  },
  hero:{
      color:"white"
  }
});
