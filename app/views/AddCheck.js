import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImagePicker from '../sections/ImgPicker.js';

export default function AddCheck() {

  return (
    <View style={{flex: 1}}>
        <ImagePicker />
    </View>
  );
}
