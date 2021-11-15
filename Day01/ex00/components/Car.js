import React from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground,} from 'react-native';
import Bouton from "./boutons";


const Car = (props) => {

  const { name, tagline, image, taglineCTA } = props.car;
  return (
    <View style={styles.carContainer}>

      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{ name }</Text>
        <Text style={styles.subtitle}>
          { tagline + ' ' }
          <Text style={styles.subtitleCTA}>
            { taglineCTA }
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Bouton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

      </View>

    </View>
  );
};

export default Car;


const styles = StyleSheet.create({
    carContainer: {
      width: '100%',
      height: Dimensions.get('window').height,
    },
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: '600'
    },
    subtitle: {
      fontSize: 16,
      color: '#5c5e62'
    },
    subtitleCTA: {
      textDecorationLine: 'underline'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    }
  });
  