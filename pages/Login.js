import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from "react-native";
import { useNavigate } from "react-router-native";
import { useContext } from "react";
import { UserConext } from "../App";

export default function Login() {

    /*Import de UserContext*/
    const userContext = useContext(UserConext);
    const navigate = useNavigate();
    return(
        <SafeAreaView style={styles.container}>
        <Text style={{textAlign: "center",margin: 10, borderBottomWidth: 1, width:100}}>Se Connecter</Text>
        {/*Input pour le login*/}
        <TextInput style={styles.input} placeholder="Username" onChange={(e) => userContext.setUsername(e.target.value)}/>
        {/*Bouton Se Connecter*/}
        <TouchableOpacity style={styles.bouton} onPress={() => navigate("/timeline")}>
            <Text style={styles.boutonText}>Se Connecter</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "50%",
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    input: {
        margin: 10,
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
        backgroundColor: "white",
        textAlign: "center",
    },
    boutonText: {
        color: "black",
    }
})