/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const gettingStarted = () => {
  const myName = "Neelkanth";
  return (
    <View style={myStyle.container}>
      <Text style={myStyle.textHeading}>Getting Started With React Native</Text>
      <Text style={myStyle.textSubHeading}>My name is {myName}</Text>
    </View>
  );
};

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#aaa',
    padding: 20,
    margin: 10,
    alignItems: "center",
  },
  textHeading: {
    // flex: '0.6',
    textAlign: "center",
    fontSize: 25,
    padding: 15,
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "#444",
    color: "#fff",
    borderColor: "cyan",
  },
  textSubHeading: {
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

export default gettingStarted;
