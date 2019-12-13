import React from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, Easing} from 'react-native';

const buttonSize = 80;

const actions = [
  {
    title: "Edit",
    onPress: ""
  },
  {
    title: "View",
    onPress: ""
  }
]

const FloatingActionButton = () => {
  return (
    <View style={styles.container}>
      {
        actions.map((action, index) => {
          return (
            <View key={index} style={styles.main}/>
          );
        })
      }

      <TouchableOpacity 
        style={styles.main} 
        onPress={() => {
          //open main button
        }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    backgroundColor: 'pink',
  },

});

export default FloatingActionButton;