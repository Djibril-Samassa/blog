import React from "react";
import { View, Text, TouchableOpacity, StyleSheet,TextInput, SafeAreaView } from "react-native";
import { useNavigate } from "react-router-native";
import { Children } from "react/cjs/react.production.min";

export default function Home() {

    const navigate = useNavigate();

    return(
        <SafeAreaView>
            <TouchableOpacity>
                <Text>Se connecter</Text>
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
		padding: 5,
		borderRadius: 5,
		borderColor: "lightgrey",
    },
    bouton: {
        width: 200,
		padding: 5,
        borderRadius: 5,
        backgroundColor: "red",
        textAlign: "center"
    }
})