import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useState } from 'react';

 const Counter = () => {
  const[count, setCount]=useState(0)
  const[count1, setCount1]=useState(0)
  const[count2, setCount2]=useState(0)
  const[count3,setCount3]=useState(0)
  return (
    <View style={styles.container}>
       <Text ><strong>Prix Panier 1: {count}</strong></Text>
       <Text ><strong>Prix Panier 2: {count1}</strong></Text>
       <Text><strong>Prix Panier 3: {count2}</strong></Text>
       <Text><strong>Prix Panier total:{count+count1+count2}</strong></Text>
     
      
      <View style={styles.Button}>
          <Button title='Acheter chaise de type 1' onPress ={() => setCount(count+119 )}></Button>
          <View style={styles.Button1}>
          <Button title='Acheter chaise de type 2' onPress ={() => setCount1(count1+319 )}></Button>
      </View>
          <View style={styles.Button2}>
          <Button title='Acheter chaise de type 3' onPress ={() => setCount2(count2+419 )}></Button></View>  
      </View>

      
      <View style={styles.ButtonReset}>
          <Button title='Reset' onPress ={() => setCount(0) }>
           </Button>
           </View>
      <View style={styles.ButtonReset1}>
          <Button title='Reset1' onPress ={() => setCount1(0) }>
           </Button>
      </View>
      <View style={styles.ButtonReset2}>
          <Button title='Reset2' onPress ={() => setCount2(0) }>
           </Button>
      </View>
      </View>
      )};


export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
      width:'180px',
      height:'50px',
      justifyContent:'center',
      textAlign:'center',
      marginTop:'50px',
      marginLeft:'400px',
  },

  Button1:{
    width:'180px',
    height:'50px',
    justifyContent:'center',
    textAlign:'center',
    marginTop:'120px',
    marginRight:'40px',
},
Button2:{
  width:'180px',
  height:'50px',
  justifyContent:'center',
  textAlign:'center',
  marginTop:'120px',
  marginRight:'40px',
},
  ButtonReset:{
    textAlign:'center',
    width:'130px',
    height:'50px',
    marginTop:'20px',
    marginRight:'400px',
    justifyContent:'center',
    fontSize:'40px'
  },
  ButtonReset1:{
    textAlign:'center',
    width:'130px',
    height:'50px',
    marginTop:'20px',
    marginRight:'400px',
    justifyContent:'center',
    fontSize:'40px'
  },
  ButtonReset2:{
    textAlign:'center',
    marginTop:'20px',
    marginRight:'400px',
    width:'130px',
    height:'50px',
    justifyContent:'center',
    fontSize:'40px'
  },
  
  Texte:{
    textAlign:'center',
    marginTop:'30px',
    marginLeft:'240px',
    width:'100px',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'Gold',
    fontSize:'40px'
  },


});