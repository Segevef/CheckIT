import React from 'react';
import CheckCard from '../sections/CheckCard.js'
import { ScrollView, ListView } from 'react-native';
import MockData from '../constants/mockData.js';

export default function Dashboard () {

    const data = MockData.data;

    return (
        <ScrollView>
            <ListView>
                {MockData ? (
                    data.map( check => (
                            <CheckCard 
                                name={data.name}
                                amount={data.amount}
                                data={data.date}
                                isDeposited={data.isDeposited}
                            />
                        ))  
                    ) : <Text>Data missing...</Text>
                }
            </ListView>
            
        </ScrollView>
    );
}

