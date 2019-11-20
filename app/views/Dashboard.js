import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import MockData from '../constants/mockData.js';
import Colors from '../constants/colors.js'
import { Col } from 'native-base';


export default function Dashboard () {
    MockData.data
    return (
    <View>
        <Text>Dashboard</Text>
        <ScrollView>
            <DataTable
                highlightOnHover={true}
                pointerOnHover={true}
                responsive={true}
                striped={true}
                title={"My Checks"}

            >
                <DataTable.Header 
                    style={styles.head}
                    fixedHeader={true}
                    
                >
                    {MockData ? (
                        MockData.head.map( tableTitle => (
                            <DataTable.Title
                                key={tableTitle}
                                width={3}
                            >
                                {tableTitle}
                            </DataTable.Title>
                        ))
                    ) : ( 
                        <DataTable.Title style={styles.head}>Loading....</DataTable.Title>
                    )}
                </DataTable.Header>
            {MockData ? (
                MockData.data.map ( data => (
                    <DataTable.Row key={data}>{data.map ( rowData => (
                        <DataTable.Cell 
                            key={rowData} 
                            style={styles.cell} 
                            width={3}>
                                {rowData}
                        </DataTable.Cell>
                        )
                    )}
                    </DataTable.Row>
                    ))
                )  : (
                    <DataTable.Row><DataTable.Cell style={styles.cell}>Loading...</DataTable.Cell></DataTable.Row> 
                )}

            </DataTable>
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    header: {

    },
    cell: {
        // width: '20%',
        // textAlign: 'center',
    },
    row: {

    },
    head: {
        flex: 1,
        textAlign: 'center',
        // backgroundColor: Colors.primary,
        // color: Colors.accent,
    }
})