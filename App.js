import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigation';
import Warning from './components/Warning'

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();




export default function App() {
  
  return (
    <NavigationContainer> 
     <Navigator/>
   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

 {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Login/>
      <Dashboard/>
      <StatusBar style="auto" />
    </View> */}