import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Card = props => {
  return (
    // Merge styles
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
    card: {
      // shadow- only works on iOS
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 10,
      shadowOpacity: 0.26,
      // elevation works only for Android
      elevation: 5,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
    }
});

export default Card;