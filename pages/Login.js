import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useNavigate } from "react-router-native";
import { useContext } from "react";
import { UserContext } from "../App";
import Home from "./Home";

export default function Login() {

    /*Import de UserContext*/
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const handlePress = () =>{
        userContext.setisLogged(true),
        console.log(userContext.isLogged);
    }

    return(
        <SafeAreaView style={styles.container}>
        <Text style={{textAlign: "center",margin: 10, borderBottomWidth: 1, width:100}}>Se Connecter</Text>
        {/*Input pour le login*/}
        <TextInput style={styles.input} placeholder="Entrez votre Pseudo" onChange={(e) => userContext.setUsername(e.target.value)}/>
        {/*Bouton Se Connecter*/}
        <TouchableOpacity style={styles.bouton} onPress={() => handlePress()}>
            <Text style={styles.boutonText}>Se Connecter</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "50%",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    input: {
        margin: 20,
        borderWidth: 1,
		width: 200,
		padding: 15,
		borderRadius: 5,
		borderColor: "lightgrey",
    },
    bouton: {
        width: 200,
		padding: 15,
        borderRadius: 5,
        backgroundColor: "red",
        textAlign: "center",
    },
    boutonText: {
        color: "white",
        textAlign: "center",
    }
})