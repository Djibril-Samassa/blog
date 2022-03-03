import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createContext,} from 'react';
import {NativeRouter as Router, Routes, Route} from "react-router-native"
import Login from './pages/Login';
import Home from './pages/Home';
export default function App() {
  return (
    <SafeAreaView>
      <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route exact path="/login" exact element={<Login/>}/>
      </Routes>
    </Router>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
