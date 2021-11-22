import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    
    <View style={styles.container}>
    <View style={{backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    height:'55%',
    position:'relative',
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,  
    elevation: 5,
    }}>
      <Image style={{ height:'25%',width:'41%' }} source={require('./assets/Loginlaunch.png')} />
    <View style={{ marginBottom: 50 }}>
    <Text style={{borderColor: '#dedede',borderWidth : 2,width:250,borderStyle : 'solid',borderRadius: 15,padding:15}} >Email</Text><br />
    <Text style={{borderColor: '#dedede',borderWidth : 2,width:250,borderStyle : 'solid',borderRadius: 15,padding:15}} >Password</Text><br />
    <Text style={{borderColor: '#dedede', background: '#ff8000', color:'#fff',textAlign:'center',borderWidth : 2,width:'250',borderStyle : 'solid',borderRadius: 15,padding:15}} >Login</Text>
    </View>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%'
  },
});
