import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomTabBar from 'react-native-tabbar-bottom';
import Dashboard from '../views/Dashboard.js';
import AddCheck from '../views/AddCheck.js';
import Notifications from '../views/Notifications.js';
import Colors from '../constants/colors.js'

export default function BottomTabs () {

    const [curPage, setCurPage] = useState("Dashboard");

    return (
        <View style={styles.container}>

            {curPage === "Dashboard" && <Dashboard />}
            {curPage === "AddCheck" && <AddCheck />}
            {curPage === "Notifications" && <Notifications />}

            <BottomTabBar 
                stateFunc = { tab => setCurPage(tab.page)}
                activePage = {curPage}
                tabbarBgColor = {Colors.primary}
                tabbarBorderTopColor={Colors.accent}
                labelSize = {12}
                style={{padding: 15,}}
                rippleEffect={true}
                tabs={[
                    {
                        page: "Dashboard",
                        icon: "home",
                        iconText: "Dashboard"
                    },
                    {
                        page: "AddCheck",
                        icon: "person",
                        iconText: "Add Check"
                    },
                    {
                        page: "Notifications",
                        icon: "notifications",
                        iconText: "Notifications",
                        badgeNumber: 2,
                    }
                ]}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        padding: 15,
    }
})