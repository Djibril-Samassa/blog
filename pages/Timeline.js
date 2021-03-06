import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createContext, useContext } from 'react';
import { UserContext } from '../App';


export default function Timeline(){
    
    const userContext = useContext(UserContext);

    return(
        <View>
            <Text style={styles.title}>Bienvenue sur votre fil d'actualité {userContext.username} </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 20,
    }
})