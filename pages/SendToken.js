import React, {useState} from 'react'
import {Text, StyleSheet, View} from "react-native"
import {TextInput, Button} from "react-native-paper";

const SendToken = ({navigation}) => {
    const [address, setAddress] = useState('')
    const [address_sender, setNom] = useState('')
    const [montant, setMontant] = useState('')
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Envoyer un NFT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        marginBottom:"10%"
    }
})

export default SendToken