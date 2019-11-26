import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from "native-base";
import Colors from "../constants/colors.js";
export default function AppHeader() {
  return (
    <Container>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={styles.body}>
          <Title>CheckIT</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: Colors.primary
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-around",
    alignItems: "center"
  }
});
