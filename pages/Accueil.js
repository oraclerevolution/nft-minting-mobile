import React from "react"
import {Text, StyleSheet, View } from "react-native"
import {Button} from 'react-native-paper'

const Accueil = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue sur Minter NFT</Text>

            <Button mode="contained" style={{margin: 5, width: 250}} onPress={()=>navigation.navigate('Mint')}>Minter un NFT</Button>
            <Button mode="contained" style={{margin: 5, width: 250}} onPress={()=>navigation.navigate('sendToken')}>Envoyez un NFT</Button>
            <Button mode="contained" style={{margin: 5, width: 250}} onPress={()=>navigation.navigate('Mint')}>Vendre un NFT</Button>
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

export default Accueil