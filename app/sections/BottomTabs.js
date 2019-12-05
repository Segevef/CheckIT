import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomTabBar from "react-native-tabbar-bottom";
import Dashboard from "../views/Dashboard.js";
import AddCheck from "../views/AddCheck.js";
import Notifications from "../views/Notifications.js";
import Colors from "../constants/colors.js";

export default function BottomTabs() {
  const [curPage, setCurPage] = useState("הצ'קים שלי");

  return (
    <View style={styles.container}>
      {curPage === "הצ'קים שלי" && <Dashboard />}
      {curPage === "הוספת צ'ק" && <AddCheck />}
      {curPage === "הודעות" && <Notifications />}

      <BottomTabBar
        stateFunc={tab => setCurPage(tab.page)}
        activePage={curPage}
        tabbarBgColor={Colors.primary}
        tabbarBorderTopColor={Colors.accent}
        labelSize={12}
        style={{ padding: 15 }}
        rippleEffect={true}
        tabs={[
          {
            page: "הצ'קים שלי",
            icon: "home",
            iconText: "הצ'קים שלי"
          },
          {
            page: "הוספת צ'ק",
            icon: "camera",
            iconText: "הוספת צ'ק"
          },
          {
            page: "הודעות",
            icon: "notifications",
            iconText: "הודעות",
            badgeNumber: 2
          }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  }
});
