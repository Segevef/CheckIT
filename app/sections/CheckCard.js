import React from 'react';
import { Image, StyleSheet } from "react-native";
import { Container, Card, CardItem, Text, Body, View } from "native-base";
import Colors from '../constants/colors.js'
import { Button } from 'react-native-paper';

export default function CheckCard (props) {
    return (
        <Container>
            <Card>
                <CardItem button onPress={() => alert("This is Card Body")}>
                    <Body>
                        <View style={styles.body}>
                            <Image 
                                style={styles.image}
                                source={require('../resources/img/Altman-Marom-logo.png')}
                            />
                            <View style={{flexDirection: 'column', alignContent: 'center', marginLeft: 25}}>
                                <Text>{props.name}</Text>
                                <Text>{props.amount}</Text>
                                <Text>{props.date}</Text>
                                <Text style={{fontSize: 10}, props.isDeposited ? { color: 'green'} : { color: 'yellow'}}>
                                    {props.isDeposited}
                                </Text>
                            </View>

                        </View>
                    </Body>
                </CardItem>
            </Card>
        </Container>
    );
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',

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
})