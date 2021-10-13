import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}> <Text  style={styles.hero}>Url</Text> box</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#1b1c29",
    padding: 20,
    paddingTop:50,
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
