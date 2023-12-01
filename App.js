import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import DogListComponent from "./components/DogListComponentStyles";
export default function App() {
  return (
    <View style={{}}>
      <DogListComponent />
      <StatusBar style="auto" />
    </View>
  );
}
