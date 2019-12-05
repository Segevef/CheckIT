import React, {useState} from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { Button, Text } from 'native-base';
import Colors from '../constants/colors.js'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import CheckInput from '../sections/CheckInput.js';

export default function ImgPicker () {

    const [pickedImage, setPickedImage] = useState();
    const [isPickedImage, setIsPickedImage] = useState(false);
    

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (result.status !== 'granted'){
            Alert.alert('Insufficient permissions!',
            'You need to grant camera permissions to use this app.',
            [{text: 'Okay'}]);
            return false;
        }
        return true;
    };

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermissions();
        if(!hasPermission) return 
        
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        });
        console.log(image);
        setPickedImage(image.uri);
        setIsPickedImage(true);
        renderCheckInput()
    }


    const renderCheckInput = () => {
        return (
             <CheckInput imageUri={pickedImage} />
            ) 
    }

    return (
        <View style={styles.imagePicker}>
            <View style={{ marginBottom: 5, alignItems: 'center', justifyContent: 'center'}}>
                {isPickedImage 
                ?   <Button  
                        rounded
                        // title="Take Another Photo" 
                        // color={Colors.accent} 
                        onPress={takeImageHandler} 
                        style={styles.button}
                    >
                        <Text>הוסף צ'ק נוסף</Text>
                    </Button>
                :   <Button
                        rounded
                        // title="Add New Check" 
                        // color={Colors.accent} 
                        onPress={takeImageHandler} 
                        style={styles.button}
                    >
                        <Text>הוסף צ'ק חדש</Text>
                    </Button>
                }
            </View>
            <View style={styles.imagePreview}>
                {!pickedImage ? ( 
                    <Text>No check picked yet.</Text>
                ) : (
                    <Image 
                        style={styles.image} 
                        source={{uri: pickedImage}}
                    />
                )}

            </View>
            <View style={styles.formPreview}>
                {isPickedImage ? renderCheckInput() 
                               : <Image style={styles.image} source={require("../resources/img/money.jpg")}/>} 
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 5
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.accent,
        borderWidth: 1

    },
    formPreview: {
        width: '100%',
        height: 240,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.accent,
        borderWidth: 1

    },
    image: {
        width: "100%",
        height: "100%",
    },
    button: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: Colors.primary,
        padding: 5
    }

})