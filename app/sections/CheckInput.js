import React, { useState } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native' 
import { Form, Item, Input, Label, Picker, DatePicker, Text } from 'native-base';
import MockData from '../constants/mockData.js';
import Colors from '../constants/colors.js';
import * as FileSystem from 'expo-file-system';

export default function CheckInput ({ imageUri }) {

    const [date, setDate] = useState(new Date());
    const [origin, setOrigin] = useState();
    const [amount, setAmount] = useState();

    const addCheckToData = async () => {

            MockData.unshift(
                { 
                  name: origin,
                  amount: amountChangeFormat(amount),
                  date: dateChangeFormat(date),
                  isDeposited: false,
                  image: {uri: imageUri}
                }
            )

            Alert.alert("Check Added! ")
        
    }

    const amountChangeFormat = amount => {
        return amount + '$'
    }

    const dateChangeFormat = date => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        
        if(dd < 10) dd = '0' + dd;
        if(mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    return (
            <Form>
                <Item floatingLabel style={styles.item}>
                    <Label> Origin: </Label>
                    <Input onChangeText={ input => setOrigin(input)} />
                </Item>
                <Item floatingLabel style={styles.item}>
                    <Label> Amount: </Label>
                    <Input keyboardType = 'numeric' onChangeText={ input => setAmount(input)}/>
                </Item>
                <Item style={styles.item}>
                    <DatePicker
                        defaultDate={new Date(2018, 1, 1)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Date:"
                        onDateChange={setDate}
                        disabled={false}
                    />
                </Item>
                <Item style={styles.buttonItem}>
                    <Button 
                        title="Add This Check" 
                        color={Colors.primary} 
                        onPress={addCheckToData} 
                        style={{marginTop: 10, marginBottom: 5}}
                    />
                </Item>
            </Form>
    );
}

const styles = StyleSheet.create({
    item: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonItem: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
})