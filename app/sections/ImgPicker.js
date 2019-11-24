import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, Image, Alert } from 'react-native';
import Colors from '../constants/colors.js'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function ImgPicker () {

    const [pickedImage, setPickedImage] = useState();

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
        setPickedImage(image.uri);
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? ( 
                    <Text>No image picked yet.</Text>
                ) : (
                    <Image 
                        style={styles.image} 
                        source={{uri: pickedImage}}
                    />
                )}
                <Button 
                    title="Take Image" 
                    color={Colors.primary} 
                    onPress={takeImageHandler} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',

    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.accent,
        borderWidth: 1

    },
    image: {
        width: "100%",
        height: "100%",

    }

})