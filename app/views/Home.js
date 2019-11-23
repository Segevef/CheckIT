import React from "react";
import { View } from "react-native";
import AppHeader from "../sections/AppHeader.js";
import BottomTabs from "../sections/BottomTabs.js";
export default function Home() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <AppHeader />
      <View style={{ flex: 5, flexDirection: "column" }}>
        <BottomTabs />
      </View>
    </View>
  );
}
