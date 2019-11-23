import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import { DataTable } from "react-native-paper";
import MockData from "../constants/mockData.js";

export default function Dashboard() {
  const _alertIndex = index => {
    Alert.alert(`This is row ${index + 1}`);
  };

  const element = (data, index) => (
    <TouchableOpacity onPress={() => _alertIndex(index)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );
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
          <DataTable.Header style={styles.head} fixedHeader={true}>
            {MockData ? (
              MockData.head.map(tableTitle => (
                <DataTable.Title key={tableTitle} width={3}>
                  {tableTitle}
                </DataTable.Title>
              ))
            ) : (
              <DataTable.Title style={styles.head}>Loading....</DataTable.Title>
            )}
          </DataTable.Header>
          {MockData ? (
            MockData.data.map(data => (
              <DataTable.Row key={data}>
                {data.map(rowData => (
                  <DataTable.Cell key={rowData} style={styles.cell} width={3}>
                    {rowData}
                  </DataTable.Cell>
                ))}
              </DataTable.Row>
            ))
          ) : (
            <DataTable.Row>
              <DataTable.Cell style={styles.cell}>Loading...</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>

        <View style={styles.container}>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row
              data={MockData.head}
              style={styles.head}
              textStyle={styles.text}
            />
            {MockData.data.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellIndex === 3 ? element(cellData, index) : cellData}
                    textStyle={styles.text}
                  />
                ))}
              </TableWrapper>
            ))}
          </Table>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6, width: "50%" },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" }
});
