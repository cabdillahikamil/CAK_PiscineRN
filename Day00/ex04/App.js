import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,ScrollView, TextInput, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
   <View style={{position: 'absolute',marginLeft: 40, marginTop: 47}}>
      <Image style={{ borderColor: '#dedede',borderWidth : 2,width:79,height:79,borderRadius:89,backgroundColor: '#fff' }} source={require('./assets/images/maTof.jpeg')} />
    </View>
    <View style={{position: 'absolute',marginLeft: 141, marginTop: 65,}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:110,height:25,borderStyle : 'solid',borderRadius:28, backgroundColor: '#C4C4C4',color:'#E5E5E5',fontWeight:'bold'}}>Welcome Back</Text>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:81,height:25,borderStyle : 'solid',borderRadius:28, backgroundColor: '#C4C4C4',fontWeight:'bold'}}>Charmarke</Text>
    </View>
   <ScrollView horizontal={true}>
    <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',position: 'absolute',marginLeft:19, marginTop: 182,borderColor: '#dedede',borderWidth : 2,width:130,height:82,borderStyle : 'solid',borderRadius:9, backgroundColor: '#ffffff' }}>
    <Image style={{ height:40,width:40}} source={require('./assets/images/javascriptLogo.png')} /><Text style={{ color:'black',fontWeight: 'bold', textAlign:'center'}}>JAVASCRIPT</Text>
    </View>
      <View style={{ flexDirection:'row',alignItems: 'center',justifyContent: 'center',position: 'absolute',marginLeft:175, marginTop: 182,borderColor: '#dedede',borderWidth : 2,width:130,height:82,borderStyle : 'solid',borderRadius:9, backgroundColor: '#ffffff'}}>
        <Image style={{ height:40,width:40}} source={require('./assets/images/javascriptLogo.png')} /><Text style={{ color:'black',fontWeight: 'bold', textAlign:'center'}}>JAVASCRIPT</Text>
      </View>
      <View style={{ flexDirection:'row',alignItems: 'center',justifyContent: 'center',position: 'absolute',marginLeft:320, marginTop: 182,borderColor: '#dedede',borderWidth : 2,width:130,height:82,borderStyle : 'solid',borderRadius:9, backgroundColor: '#ffffff'}}>
        <Image style={{ height:40,width:40}} source={require('./assets/images/javascriptLogo.png')} /><Text style={{ color:'black',fontWeight: 'bold', textAlign:'center'}}>JAVASCRIPT</Text>
      </View>
   <View style={{position: 'absolute',marginLeft:26, marginTop: 308}}>
      <Text style={{borderColor: '#dedede',height:15, width: 150,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}>CONTINUE LEARNING</Text>
    </View>
    <View style={{position: 'absolute',marginLeft:26, marginTop: 363,borderColor: '#dedede',borderWidth : 2,width:273,height:231,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}>
      <Image style={{ height:'100%',width:'100%'}} source={require('./assets/images/abstractBg.jpeg')} />
    </View> 
    <View style={{position: 'absolute',marginLeft:320, marginTop: 363,borderColor: '#dedede',borderWidth : 2,width:273,height:231,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}>
      <Image style={{ height:'100%',width:'100%'}} source={require('./assets/images/abstractBg.jpeg')} />
    </View> 
    <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-around',position: 'absolute',marginLeft:26, marginTop: 592, borderColor: '#dedede',borderWidth : 2,width:273,height:60,borderStyle : 'solid',borderRadius:18, backgroundColor: 'white'}}>
      <Image style={{ height:40,width:40}} source={require('./assets/images/react.jpg')} /><Text style={{ color:'black',fontWeight: 'bold', textAlign:'center'}}>REACT.JS</Text><br /><Text style={{color: '#dedede', fontSize: 16}}>5 OF 12 SECTIONS </Text>
    </View> 
    <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-around',position: 'absolute',marginLeft:320, marginTop: 592,borderColor: '#dedede',borderWidth : 2,width:273,height:60,borderStyle : 'solid',borderRadius:18, backgroundColor: 'white'}}>
      <Image style={{ height:40,width:40}} source={require('./assets/images/react.jpg')} /><Text style={{ color:'black',fontWeight: 'bold', textAlign:'center'}}>REACT.JS</Text><br /><Text style={{color: '#dedede', fontSize: 16}}>5 OF 12 SECTIONS </Text>
    </View>
   </ScrollView>
   <View style={{position: 'absolute',marginLeft:40, marginTop: 700}}>
      <Text style={{borderColor: '#dedede',borderWidth : 2,width:110,height:25,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}>NEXT PISCINE</Text>
   </View>
    <View style={{position: 'absolute',marginLeft:30, marginTop: 740,orderColor: '#dedede',borderWidth : 2,width:303,height:231,borderStyle : 'solid',borderRadius:18, backgroundColor: '#C4C4C4'}}>
     <Image style={{ height:'100%',width:'100%'}} source={require('./assets/images/abstractBg.jpeg')} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: 428,
    height: 926,
    flex:1,
  },
});
