import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Button = ({ title }) => {
  return (
    <View style={styles.button}>
      <Icon name="add-circle-outline" color="white" /> 
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#4864e6",
    color: "white",
    borderRadius: 5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  title: {
    textAlign: "center",
    color: "white",
    marginLeft:5
  },
});
export default Button;
