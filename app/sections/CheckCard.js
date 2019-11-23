import React from "react";
import { Image, StyleSheet } from "react-native";
import { Container, Card, CardItem, Text, Body, View } from "native-base";
import Colors from "../constants/colors.js";

export default function CheckCard({name, amount , date, isDeposited}) {
  return (
      <Card>
        <CardItem button onPress={() => alert(`More details on ${name}'s check`)}>
          <Body>
            <View style={styles.body}>
              <Image
                style={styles.image}
                source={require("../resources/img/Altman-Marom-logo.png")}
              />
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "center",
                  marginLeft: 25
                }}
              >
                <Text>{name}</Text>
                <Text>{amount}</Text>

                <Text>{date}</Text>
                <Text
                  style={
                    ({ fontSize: 10 },
                    isDeposited
                      ? { color: "green" }
                      : { color: "red" })
                  }
                >
                  {isDeposited ? "Deposited" : "Not Deposited"}
                </Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "row"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    marginLeft: 10,
    alignSelf: "center",
    borderColor: Colors.primary
  }
});
