import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

export default function Login() {
    return(
        <SafeAreaView style={styles.container}>
        <Text style={{textAlign: "center",margin: 10, borderBottomWidth: 1, width:100}}>Se Connecter</Text>
        {/*Input pour le login*/}
        <TextInput style={styles.input} placeholder="Username"/>
        {/*Bouton Se Connecter*/}
        <TouchableOpacity style={styles.bouton} onPress={() => useNavigate("/")}>
            <Text style={{/*fontFamily: "arial",*/color: "white",}}>Se Connecter</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}