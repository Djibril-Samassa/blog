import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import { createContext, useState,} from 'react';
import {NativeRouter as Router, Routes, Route} from "react-router-native"
import Login from './pages/Login';
import Home from './pages/Home';
import Timeline from './pages/Timeline'

/* Export du context User*/
export const UserConext = createContext();


export default function App() {

  const [username, setUsername] = useState("");


  const usernameValue = {
    username : username,
    setUsername: setUsername,
}
  return (
    <UserConext.Provider value={usernameValue}>
      <SafeAreaView>

        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route exact path="/login" exact element={<Login/>}/>
            <Route path="/timeline" exact element={<Timeline/>}/>
          </Routes>
        </Router>
      </SafeAreaView>
    </UserConext.Provider>

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
