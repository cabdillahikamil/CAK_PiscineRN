
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable  } from 'react-native';

import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


import cars from './cars';
import  Car  from './Car';
import List from './List';

export function CustomDrawerContent (props){
    return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    )
  }
  
/*function Menu ({navigation}) {
  return (
    <Pressable style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>Menu</Text>
    </Pressable> 
  );
};*/


export function Header ({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
     <Pressable style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>Menu</Text>
    </Pressable>
    </View>
    );
};

 
  export function Model3 ({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
     <Pressable style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>Menu</Text>
    </Pressable> 
    </View>
      <Text>Model 3</Text>
    </View>
 );
}

export function ModelS ({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
     <Pressable style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>Menu</Text>
    </Pressable> 
    </View>
      <Text>Model S</Text>
    </View>
 );
}

export function ModelX ({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
     <Pressable style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>Menu</Text>
    </Pressable> 
    </View>
      <Text>Model X</Text>
    </View>
  );
}

 
 export function ModelY ({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      />
     <Pressable style={styles.menu} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Text>Menu</Text>
    </Pressable> 
    </View>
      <Text>Model Y</Text>
    </View>
   );
  }

const Drawer = createDrawerNavigator();

  export function MyDrawer () {
        return (
      <Drawer.Navigator
      screenOptions={{drawerPosition: 'right', headerShown: false, }}
      drawerContent = {(props) => <CustomDrawerContent {...props} />}
      >
      <Drawer.Screen name="Model S" component={ModelS} />
      <Drawer.Screen name="Model 3" component={Model3} />
      <Drawer.Screen name="Model X" component={ModelX} />
      <Drawer.Screen name="Model Y" component={ModelY} />
      </Drawer.Navigator>

      );
    }
   
  




  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 50,
      zIndex: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 20
    },
    logo: {
      width: 100,
      height: 20,
      resizeMode: 'contain'
    },
    menu: {
      width: 75,
      height: 25,
      resizeMode: 'contain',
      fontWeight: 'bold',
      borderRadius:'18px',
      justifyContent:'center',
      textAlign:'center',
      backgroundColor:'#D3D3D3',
    }
  });
