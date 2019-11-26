import React, { useState } from "react";
import { Image, StyleSheet, Modal, TouchableHighlight, Button } from "react-native";
import { Card, CardItem, Text, Body, View } from "native-base";
import Colors from "../constants/colors.js";

export default function CheckCard({name, amount , date, isDeposited, image}) {

  const [displayDetails, setDisplayDetails] = useState(false);

  return (
     <Card>
        <CardItem button onPress={() => {setDisplayDetails(true)}}>
          <Body>

              <Modal 
                animationType="fade"
                transparent={true}
                visible={displayDetails}
                style={styles.modal}
              >
                    <View style={styles.moreDetailsView}>
                          <Button 
                            onPress={() => setDisplayDetails(false) } 
                            title="Back" 
                            style={styles.buttonItem} 
                          />
                             <Image style={styles.imageMoreDetails} source={image}/>
                    </View> 
                </Modal>

            <View style={styles.body}>
              <Image
                style={styles.image}
                source={image}
              />
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "center",
                  marginLeft: 25
                }}
              >
                <Text>{name}</Text>
                <Text>{amount}</Text>

                <Text>{date}</Text>
                <Text
                  style={
                    ({ fontSize: 10 },
                    isDeposited
                      ? { color: "green" }
                      : { color: "red" })
                  }
                >
                  {isDeposited ? "Deposited" : "Not Deposited"}
                </Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "row"
  },
  image: {
    width: 60,
    height: 60,
    // borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 1,
    marginLeft: 10,
    alignSelf: "center",
    borderColor: Colors.accent
  },
  moreDetailsView: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMoreDetails: {
    width: "100%",
    height: 200
  },
  buttonItem: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: Colors.accent,
  },
  modal: {
    borderRadius: 5,
    backgroundColor: Colors.accent,
  }

});
