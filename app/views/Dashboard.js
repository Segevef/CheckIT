import React from "react";
import CheckCard from "../sections/CheckCard.js";
import { ScrollView, View,Text } from "react-native";
import mockData from "../constants/mockData.js";

export default function Dashboard() {
    
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 2}}>
            <ScrollView >
                {mockData ? (
                    mockData.map( (check, key) => {
                        return (
                            <CheckCard
                                key={key}
                                name={check.name}
                                amount={check.amount}
                                date={check.date}
                                isDeposited={check.isDeposited}
                            />
                        )
                    })
                    ) : <Text>Loading....</Text>}
            </ScrollView>
        </View>
        <View style={{flex: 1}}>
            <Text>BlaBla</Text>
        </View>
    </View>
  );
}
