import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions} from 'react-native';
import cars from './cars';
import  Car  from './Car';



const List = (props) => {
    return (
      <View style={styles.container}>
        <FlatList
          data={cars}
          renderItem={({item}) => <Car car={item} />}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={Dimensions.get('window').height}
        />
      </View>
    );
  };

  export default List;

  const styles = StyleSheet.create({
    container: {
      width: '100%'
    }
  });