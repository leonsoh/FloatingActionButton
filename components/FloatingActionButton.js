import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const buttonSize = 80;

const FloatingActionButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.main} />
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
    backgroundColor: "pink",
  },

});

export default FloatingActionButton;