import React, { useState } from "react";
import CheckCard from "../sections/CheckCard.js";
import { ScrollView, View, StyleSheet, Alert } from "react-native";
import mockData from "../constants/mockData.js";
import { Button, Text } from "native-base";
import Colors from '../constants/colors.js'

export default function Dashboard() {

    const [checks, setChecks] = useState(mockData);
    
    const showAllChecks = () => {
        setChecks(mockData);
    }

    const showDepositedChecks = () => {
        setChecks( mockData.filter(check => check.isDeposited === true))
    }

    const showNotDepositedChecks = () => {
        setChecks( mockData.filter(check => check.isDeposited === false))
    }

  return (
    <View style={{flex: 1}}>
        <View style={{flex: 3}}>
            <View style={styles.buttonArea}>
                <Button rounded style={styles.buttonsTop} active onPress={showAllChecks}>
                    <Text>כל הצ'קים</Text>
                </Button>
                <Button rounded style={styles.buttonsTop} onPress={showDepositedChecks}>
                    <Text>שהופקדו</Text>
                </Button>
                <Button rounded style={styles.buttonsTop} onPress={showNotDepositedChecks}>
                    <Text>טרם הופקדו</Text>
                </Button>
            </View>
            <ScrollView style={{flex: 3}}>
                {checks ? (
                    checks.map( (check, key) => {
                        return (
                            <CheckCard
                                key={key}
                                name={check.name}
                                amount={check.amount}
                                date={check.date}
                                isDeposited={check.isDeposited}
                                image={check.image}
                            />
                        )
                    })
                    ) : <Text>Loading....</Text>}
            </ScrollView>
        </View>
        <View style={{flex: 1}}>
                <Button full bordered rounded style={styles.buttonsBottom} onPress={ () => Alert.alert("In Progress...")}>
                    <Text>צפה בסטטיסטיקות</Text>
                </Button>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    buttonsTop: {
        backgroundColor: Colors.primary,
        marginLeft: 5,
        fontSize: 12,
        marginRight: 5,
    },
    buttonsBottom: {
        marginTop: 10,
        // backgroundColor: Colors.accent,
        justifyContent: 'center',
    },

})
