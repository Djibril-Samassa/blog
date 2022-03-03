import React, { createContext, useState, useContext } from "react";
import reactDom from "react-dom";
import { View, Text, TouchableOpacity, StyleSheet,TextInput, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";


export default function Home() {

    const navigate = useNavigate();

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigate("/login")}>
                <Text style={{padding: 15}}>Timeline</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("/login")}>
                <Text style={{padding: 15}}>Créer un post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("/login")}>
                <Text style={{padding: 15}}>Mon profil</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "red",
        borderWidth: 1,
        flexDirection: "row",justifyContent: "space-around",
        alignItems: "flex-end",
        marginBottom: "auto",
    },
})

