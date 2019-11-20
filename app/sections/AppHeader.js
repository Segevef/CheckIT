import React from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle, Button } from 'native-base';

export default function AppHeader () {

    return (
     <Container>
        <Header>
        <Left>
            <Button transparent>
              <Icon name='bars' />
            </Button>
          </Left>
          <Body>
            <Title>CheckIT</Title>
            <Subtitle>Protect Your Cash Flow</Subtitle>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
       </Container>
    );
}
