import React, { createContext, useState, useContext } from "react";
import reactDom from "react-dom";
import { View, Text, TouchableOpacity, StyleSheet,TextInput, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";
import { UserContext } from "../App";
import Login from "./Login";

export default function Home() {

    const userContext = useContext(UserContext)
    const navigate = useNavigate();

    return userContext.isLogged ? (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigate("/timeline")}>
                <Text style={{padding: 15}}>Timeline</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("/timeline")}>
                <Text style={{padding: 15}}>Créer un post</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate("/profil")}>
                <Text style={{padding: 15}}>Mon profil</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
    ) : <Login/>
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

