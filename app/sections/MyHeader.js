import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet } from "react-native";

export class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("../resources/fonts/Roboto.ttf"),
      Roboto_medium: require("../resources/fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    return (
      <Container>
        <Header style={styles.headStyle}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={styles.headText}>
            <Title>My Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20
    },

    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#35605a'
    }
})