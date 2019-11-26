import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.mainView}>
      <Image source={require('../resources/img/no_messages.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
    mainView: {
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      
    }
})
