import React, { useState } from 'react';
import { StyleSheet, Alert, View } from 'react-native' 
import { Form, Item, Input, Label, DatePicker, Text, Button } from 'native-base';
import MockData from '../constants/mockData.js';
import Colors from '../constants/colors.js';

export default function CheckInput ({ imageUri }) {

    const [date, setDate] = useState(new Date());
    const [origin, setOrigin] = useState();
    const [amount, setAmount] = useState();

    const addCheckToData = async () => {
            
            if(isNaN(amount) || amount < 1) { 
                Alert.alert("Amount not valid. Please enter a valid amount");
                return;
            }
            if(origin === "") {
                Alert.alert("Origin not valid. Please enter a valid origin");
                return;
            }

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
        let am = amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        return am + '₪'
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
                    <Label> שלמו ל </Label>
                    <Input onChangeText={ input => setOrigin(input)} />
                </Item>
                <Item floatingLabel style={styles.item}>
                    <Label> סכום </Label>
                    <Input keyboardType = 'numeric' onChangeText={ input => setAmount(input)}/>
                </Item>
                <Item style={styles.datePickerItem}>
                    <DatePicker
                        defaultDate={new Date(2019, 1, 1)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="תאריך"
                        onDateChange={setDate}
                        disabled={false}
                    />
                </Item>
                <Item style={styles.buttonItem}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Button 
                                transparent 
                                rounded
                                full 
                                textStyle={Colors.primary}
                                // color={Colors.accent} 
                                onPress={addCheckToData} 
                                // style={{marginTop: 10, marginBottom: 5}}
                            >
                                <Text>הוסף צ'ק</Text>
                            </Button>
                        </View>
                </Item>
            </Form>
    );
}

const styles = StyleSheet.create({
    item: {
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    datePickerItem: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 5,
        marginBottom: 5,
    },
    buttonItem: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    }
})