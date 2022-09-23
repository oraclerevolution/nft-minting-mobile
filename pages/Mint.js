//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import mintNFT from "../helpers/interact";

// create a component
const Mint = async ({navigation}) => {
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [quantite, setQuantite] = useState(null)
    const [image, setImage] = useState('')
    const [address, setAddress] = useState('')
    const [networkSelected, setNetworkSelected] = useState(0) // 1 - eth 2 - pol
    const [backgroundColorEth, setBackgroundColorEth] = useState('#ddd')
    const [backgroundColorPol, setBackgroundColorPol] = useState('#ddd')
    const [visible, setVisible] = React.useState(false);
    const [status, setStatus] = useState(null)

    const onDismissSnackBar = () => setVisible(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
            setVisible(true)
        }
    };

    const clickNetwork = (blockchain) => {
        if (blockchain == "Ethereum"){
            setBackgroundColorEth("#000")
            setBackgroundColorPol("#ddd")
            setNetworkSelected(1)
        }else if(blockchain == "Polygon"){
            setBackgroundColorPol("#000")
            setBackgroundColorEth("#ddd")
            setNetworkSelected(2)
        }
    }

    const validInput = async(nom, description, quantite, image, address, network) => {
        if (nom == '' || description == '' || quantite == null || image == '' || address == '' || network == 0){
            Alert.alert("Attention", "veuillez remplir tous les champs svp")
        }else{
            const {status} = await mintNFT(image,nom,description,address,quantite)
            console.log(status)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={{marginTop:"15%"}}>
                <Text style={{fontSize:20, fontWeight:"bold"}}>Créer ma collection de NFT</Text>
                <Text style={{fontSize:12, color:"gray"}}>Remplissez correctement les champs ci-dessous</Text>
            </View>
            <View View style = {{marginTop: "5%", flexDirection:"row", padding:7, justifyContent:"center", alignItems: "center"}}>
                <Button mode = 'contained' icon="camera" onPress={()=> navigation.navigate("TakePicture")} disabled={true} style = {{width: 150, margin:4}}> Photo </Button>
                <Button mode = 'contained' icon="file" onPress={()=>pickImage()} style={{width:150, margin:4}}> Charger </Button>
            </View>
            <View style={{justifyContent:"center", alignItems:"center", padding:8}}>
                {image && <Image source={{ uri: image }} style={{ width: 280, height: 200 }} />}
            </View>
            <View style={{marginTop: "5%"}}>
                <TextInput
                    style={{margin:"4%", height:55}}
                    label="Nom de la collection"
                    placeholder='Rocks'
                    value={nom}
                    onChangeText={text => setNom(text)}
                />
                <TextInput
                    style={{margin:"4%", height:55}}
                    label="Description de la collection"
                    placeholder='Description'
                    multiline={true}
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
                <TextInput
                    style={{margin:"4%", height:55}}
                    label="Quantité à minter"
                    placeholder='50'
                    keyboardType="number-pad"
                    value={quantite}
                    onChangeText={text => setQuantite(text)}
                />
                <TextInput
                    style={{margin:"4%", height:55}}
                    label="Address eth"
                    placeholder="Address 0X..."
                    value={address}
                    onChangeText={text => setAddress(text)}
                />
            </View>

            <View View style = {{flex: 1,padding: 5}}>
                <Text style={{fontWeight:"bold", fontSize:16}}>Choisissez le reseau</Text>
                <View style={{flexDirection:"row", padding:5, justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity style={{flexDirection:"column", margin:10, borderWidth:1, width:115, height:120}} onPress={()=> clickNetwork("Ethereum")}>
                        <View style={{height:"30%", backgroundColor:backgroundColorEth}}></View>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontWeight:"bold", fontSize:16}}>Ethereum</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style ={{flexDirection: "column", margin:10, borderWidth:1, width:115, height:120}} onPress={()=> clickNetwork("Polygon")}>
                        <View style={{ height: "30%", backgroundColor: backgroundColorPol }}></View>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontWeight:"bold", fontSize:16}}>Polygon</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{padding:10}}>
                    <Button mode="outlined" onPress={()=> validInput(nom,description,quantite,image,address,networkSelected)}>Minter</Button>
                </View>
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Compris',
                    onPress: () => {
                        // Do something
                    },
                }}>
                L'image a bien été chargée.
            </Snackbar>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:15,
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Mint;
