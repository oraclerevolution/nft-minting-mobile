import React, {useState} from 'react'
import {Text, StyleSheet, View, Alert} from "react-native"
import {TextInput, Button} from "react-native-paper";

const SendToken = ({navigation}) => {
    const [address, setAddress] = useState('')
    const [address_sender, setAddress_sender] = useState('')
    const [montant, setMontant] = useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Envoyer un NFT</Text>
            <TextInput
                style={{margin:"4%", height:55}}
                label="Adresse de l'envoyeur"
                placeholder='0x....'
                value={address_sender}
                onChangeText={text => setAddress_sender(text)}
            />
            <TextInput
                style={{margin:"4%", height:55}}
                label="Quantité à envoyer"
                placeholder='10'
                keyboardType="number-pad"
                value={montant}
                onChangeText={text => setMontant(text)}
            />
            <TextInput
                style={{margin:"4%", height:55}}
                label="Adresse du recepteur"
                placeholder='0x....'
                value={address}
                onChangeText={text => setAddress(text)}
            />

            <Button mode="contained" icon="send" style={{width:250, alignSelf:"center"}} onPress={()=>Alert.alert("Désolé", "Page en clours de développement")}>Envoyer le NFT</Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:15
    },
    text:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"10%"
    }
})

export default SendToken