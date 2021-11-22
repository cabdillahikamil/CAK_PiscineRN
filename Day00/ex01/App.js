import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{ height:200,width:400 }} source={require('./assets/Loginlaunch.png')} />
      <StatusBar style="auto" />
    </View>
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
