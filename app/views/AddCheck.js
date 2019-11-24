// TAB 2

import React from "react";
import { View, Text } from "react-native";
import ImagePicker from '../sections/ImgPicker.js'

export default function AddCheck() {
  return (
    <View>
      <Text>This Will Be Our Camera to add check</Text>
      <View>
        <ImagePicker />
      </View>
    </View>
  );
}
