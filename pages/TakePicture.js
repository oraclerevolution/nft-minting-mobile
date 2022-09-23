import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Button} from"react-native-paper"

const TakePicture = ({navigation}) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }
    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', marginBottom:15, fontWeight:"bold", fontSize:16 }}>
                    Nous avons besoin de votre permission pour démarrer la caméra
                </Text>
                <Button mode="contained" onPress={requestPermission}>Donnez la permission</Button>
            </View>
        );
    }

    function toggleCameraType() {
        setType((current) => (
            current === CameraType.back ? CameraType.front : CameraType.back
        ));
    }

    async function takePhoto(){
        const options = {quality: 0.5};
        const data = await Camera.
        console.log(data.uri);
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={toggleCameraType}>
                        <Text style={styles.text}>Tourner la Camera</Text>
                    </TouchableOpacity>
                </View>
                <Button mode="contained" icon="camera" style={{margin:8}} onPress={()=> takePhoto()}>Prendre la photo</Button>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        padding:12
    },
    camera: {
        flex: 1,
        width:"100%"
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default TakePicture