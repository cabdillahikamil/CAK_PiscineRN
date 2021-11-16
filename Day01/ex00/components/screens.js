
import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from "react-native";



export function ModelS({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/ModelS.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }} >
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo} />
          <View style={{ flex: 0.2 }}>
            <Text style={styles.menu} onPress={() => navigation.toggleDrawer()}>menu</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
          <Text style={styles.titre}>Model S</Text>
          <Text style={{}}>Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text style={styles.text}>Custom Order</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export function Model3({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Model3.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <View style={{ flex: 0.2 }}>
            <Text style={styles.menu} onPress={() => navigation.toggleDrawer()}>menu</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.titre}>Model 3</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text style={styles.text}>Custom Order</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export function ModelY({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/ModelY.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <View style={{ flex: 0.2 }}>
            <Text style={styles.menu} onPress={() => navigation.toggleDrawer()}>menu</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.titre}>Model Y</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text style={styles.text}>Custom Order</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export function ModelX({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/ModelX.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
          <View style={{ flex: 0.2 }}>
            <Text style={styles.menu} onPress={() => navigation.toggleDrawer()}>menu</Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.titre}>Model X</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text style={styles.text}>Custom Order</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titre: {
      color: "#3F3E3E",
      fontSize: 32,
      fontWeight: "bold",
      letterSpacing: 1,
    },
    header: {
      position: 'absolute',
      top: 30,
      zIndex: 100,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
      paddingHorizontal: 20
    },
    logo: {
      width: 200,
      height: 115,
      resizeMode: "center",
      flex: 0.4,
    },
    menu: {
      backgroundColor: "#D3D3D3",
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 25,
      resizeMode: 'contain',
      fontWeight: 'bold',
      borderRadius:'18px',
      justifyContent:'center',
      textAlign:'center',
    },
    text: {
      backgroundColor: "#050505",
      opacity: 0.6,
      padding: 20,
      color: "#fff",
      fontSize: 15,
      letterSpacing: 1,
      textTransform: "uppercase",
      width: "80%",
      textAlign: "center",
      borderRadius: 28,
    }
  });