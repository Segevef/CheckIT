import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Header } from '../sections/Header.js'; 
import { Hero } from '../sections/Hero.js';

export class Home extends React.Component {

    static navigationOptions = {

    };

    render() {
        return (
            <View>
                {/* <Header 
                  placement="left"
                  leftComponent={{ icon: 'menu', color: '#fff' }}
                  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                  rightComponent={{ icon: 'home', color: '#fff' }}
                 /> */}
                 <Header message = 'Press to login'/>
                 <Hero />
                 <Text style={{flex: 6}}>This will be the homepage</Text>             
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})