/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

const flatListDemo = () => {
  const myFriend = [
    { name: "Ghanshyam", age: "7" },
    { name: "Sahajanand", age: "28" },
    { name: "Hari", age: "3" },
    { name: "Sarjudas", age: "19" },
    { name: "Narayanmuni", age: "35" },
  ];
  return (
    <FlatList
      data={myFriend}
      // keyExtractor={keyExtractor}
      renderItem={({ item }) => {
        return (
          <Text style={myStyle.textTable}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#aaa",
    padding: 20,
    margin: 10,
    alignItems: "center",
  },
  textTable: {
    // flex: '0.4',
    textAlign: "center",
    fontSize: 25,
    padding: 15,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#444",
    color: "#fff",
    borderColor: "cyan",
  },
});
export default flatListDemo;
