import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
   <StatusBar style="auto" />
   <ScrollView horizontal={true}>
    <View style={{position: 'absolute',marginLeft: 40, marginTop: 47}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:79,height:79,borderRadius:89,backgroundColor: 'white'}} ></Text>
    </View>
    <View style={{position: 'absolute',marginLeft: 141, marginTop: 65}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:180,height:25,borderStyle : 'solid',borderRadius:28, backgroundColor: '#C4C4C4'}}></Text>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:81,height:25,borderStyle : 'solid',borderRadius:28, backgroundColor: '#C4C4C4'}}></Text>
    </View>
    <View style={{position: 'absolute',marginLeft:19, marginTop: 182}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:130,height:82,borderStyle : 'solid',borderRadius:9, backgroundColor: '#ffffff'}}></Text>
      </View>
      <View style={{position: 'absolute',marginLeft:175, marginTop: 182}}>
        <Text style={{borderColor: '#dedede',borderWidth : 2,width:130,height:82,borderStyle : 'solid',borderRadius:9, backgroundColor: '#ffffff'}}></Text>
      </View>
      <View style={{position: 'absolute',marginLeft:320, marginTop: 182}}>
        <Text style={{borderColor: '#dedede',borderWidth : 2,width:130,height:82,borderStyle : 'solid',borderRadius:9, backgroundColor: '#ffffff'}}></Text>
      </View>
      <View style={{position: 'absolute',marginLeft:26, marginTop: 308}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:81,height:25,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
      </View> 
      <View style={{position: 'absolute',marginLeft:26, marginTop: 363}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:273,height:231,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
      </View> 
      <View style={{position: 'absolute',marginLeft:320, marginTop: 363}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:273,height:231,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
      </View>
      <View style={{position: 'absolute',marginLeft:26, marginTop: 592}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:273,height:60,borderStyle : 'solid',borderRadius:18, backgroundColor: 'white'}}></Text>
      </View>
      <View style={{ position: 'absolute',marginLeft:51, marginTop: 607}}> 
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:145,height:15,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
      </View>
      <View style={{ position: 'absolute',marginLeft:51, marginTop: 625}}> 
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:81,height:15,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
      </View>
      <View style={{position: 'absolute',marginLeft:320, marginTop: 592}}>
        <Text style={{borderColor: '#dedede',borderWidth : 2,width:273,height:60,borderStyle : 'solid',borderRadius:18, backgroundColor: 'white'}}></Text>
      </View>
    <View style={{position: 'absolute',marginLeft:40, marginTop: 700}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:145,height:15,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
    </View>
    <View style={{position: 'absolute',marginLeft:30, marginTop: 740}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:303,height:231,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}></Text>
    </View>
    </ScrollView>
   </View>
   
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: 428,
    height: 926,
  },
});
