import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createContext, useContext } from 'react';
import { UserContext } from '../App';


export default function Profil(){
    
    const userContext = useContext(UserContext);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Votre profil</Text>
            <Text >Nom d'utilisateur: {userContext.username} </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10
    }
})