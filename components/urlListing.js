import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import Header from "./header";
import { Icon } from "react-native-elements";

const UrlListing = () => {
  const [dataSource, setDataSource] = useState([
    { id: 1, title: "Button" },
    { id: 2, title: "Card" },
    { id: 3, title: "Input" },
    { id: 4, title: "Avatar" },
    { id: 5, title: "CheckBox" },
    { id: 6, title: "Header" },
    { id: 7, title: "Icon" },
    { id: 8, title: "Lists" },
    { id: 9, title: "Rating" },
    { id: 10, title: "Pricing" },
    { id: 11, title: "Avatar" },
    { id: 12, title: "CheckBox" },
    { id: 13, title: "Header" },
    { id: 14, title: "Icon" },
    { id: 15, title: "Lists" },
    { id: 16, title: "Rating" },
    { id: 17, title: "Pricing" },
  ]);
  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={styles.cardContainer}>
        {/* <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>Link</Text>
        </View> */}
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.cardControls}>
            <Icon name="content-copy" color="white" />
            <Icon name="edit" color="white" />
            <Icon name="delete" color="white" />

          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        //Header to show above listview
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#3a3b4a",
    flex: 1,
  },
  title: {
    color: "red",
  },
  cardContainer: {
    margin: 10,
    // minHeight: 100,
    backgroundColor: "#1b1c29",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
  },
  cardTitle: {
    padding: 10,
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    width:120
  },
  cardHeader: {
    backgroundColor: "rgb(230, 72, 72);",
  },
  cardHeaderTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  contentContainer: {
    flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,

  },
  cardControls: {
    flex:0.5,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
});
export default UrlListing;
