import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
  <View>  
    <View style={{backgroundColor:'#9F9F9F', width: '100%', height: '40%',justifyContent: 'center', alignItems: 'center'}}>
      <Image style={{ height:200,width:400,marginTop:50}} source={require('./assets/basket.png')} />
      <StatusBar style="auto" />
      </View>
      <View style={{ backgroundColor: '#fff',borderRadius: 20,padding:10}}>
      <Text>
      <Text style={{color:'#9F9F9F',fontWeight: 'bold'}}>Addidas</Text><br />
      <Text style={{fontWeight: 'bold',fontSize: 20}}>Yeezy Boost 350 V2 BLACK Red</Text>
      </Text></View>
      <View style={{flexDirection:'row',marginLeft: 20, marginRight: 10}}>
      <Text style={{borderColor: '#9F9F9F',borderWidth : 2,height:50,width:150,borderStyle : 'solid',borderRadius: 5,padding:15,paddingLeft:20,marginTop:20}}>42              340$</Text>
      <Text style={{backgroundColor: 'black',borderWidth : 2,height:50,width:150,borderStyle : 'solid',borderRadius: 5,padding:12,paddingLeft:20,marginTop:20,color: 'white',textAlign: 'center',marginLeft: 30,fontSize:20}}><Icon name="shopping-cart" size={25} color="white" />   BUY</Text>
      </View>  
      <Text style={{fontWeight:'normal',padding:12,marginTop:20,fontSize:17}}>
     The <Text style={{fontWeight:'bold'}}>Yeezy 350 Boost V2 Bred</Text> stand out for its and simplicity. Unlike most V2 shoes 
          that feature a patterned print, this shoes has a monochrome black upper
          with red stitching. yeezy has a monochrome black upper with <Text style={{fontWeight:'bold'}}>red stitching</Text> that read 
          SPLY-350. The silhouette is set on a black boost sole semi-translucent.
      </Text><br /><br />
      <Text style={{fontWeight:'bold',padding: 12}}>SKU:CP9652</Text>
      <Text style={{fontWeight:'bold',padding: 12}}>Release date: February 2017</Text>
      <Text style={{fontWeight:'bold',padding: 12}}>Colorway: CORE BLACK/CORE BLACK/RED</Text>
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
